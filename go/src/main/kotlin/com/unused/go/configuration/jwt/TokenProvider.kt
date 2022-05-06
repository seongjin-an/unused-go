package com.unused.go.configuration.jwt

import com.unused.go.constants.jwt.JwtConstant.ACCESS_TOKEN_EXPIRE_TIME
import com.unused.go.constants.jwt.JwtConstant.AUTHORITIES_KEY
import com.unused.go.constants.jwt.JwtConstant.BEARER_TYPE
import com.unused.go.constants.jwt.JwtConstant.REFRESH_TOKEN_EXPIRE_TIME
import com.unused.go.dto.TokenDto
import io.jsonwebtoken.*
import io.jsonwebtoken.security.Keys
import io.jsonwebtoken.security.SecurityException
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.stereotype.Component
import java.security.Key
import java.util.*
import java.util.stream.Collectors


@Component
class TokenProvider(@Value("\${jwt.secret}") secretKey: String) {
    private lateinit var key: Key

    init {
        val keyBytes = Base64.getDecoder().decode(secretKey)
        this.key= Keys.hmacShaKeyFor(keyBytes)
    }

    fun generateTokenDto(authentication: Authentication): TokenDto {
//        val authorities = authentication.authorities.stream()
//            .map(GrantedAuthority::getAuthority)
//            .collect(Collectors.joining(","));
        val authorities = authentication.authorities.stream()
            .map { obj: GrantedAuthority -> obj.authority }
            .collect(Collectors.joining(","))
        val now = Date().time
        // Access Token 생성
        val accessTokenExpiresIn = Date(now + ACCESS_TOKEN_EXPIRE_TIME)
        val accessToken = Jwts.builder()
            .setSubject(authentication.name) // payload "sub": "name"
            .claim(AUTHORITIES_KEY, authorities) // payload "auth": "ROLE_USER"
            .setExpiration(accessTokenExpiresIn) // payload "exp": 1516239022 (예시)
            .signWith(key, SignatureAlgorithm.HS512) // header "alg": "HS512"
            .compact()

        // Refresh Token 생성
        val refreshToken = Jwts.builder()
            .setExpiration(Date(now + REFRESH_TOKEN_EXPIRE_TIME))
            .signWith(key, SignatureAlgorithm.HS512)
            .compact()

        return TokenDto(
            BEARER_TYPE,
            accessToken,
            refreshToken,
            accessTokenExpiresIn.time
        )
    }

    fun getAuthentication(accessToken: String): Authentication{
        val claims = parseClaims(accessToken)
        if(claims.get(AUTHORITIES_KEY) == null){
            throw RuntimeException("권한 정보가 없는 토큰")
        }
        val authorities = claims.get(AUTHORITIES_KEY).toString().split(",")
            .map { obj: String -> SimpleGrantedAuthority(obj) }
        val principal = User(claims.subject, "", authorities)
        return UsernamePasswordAuthenticationToken(principal, "", authorities)
    }

    fun validateToken(token: String): Boolean {
        return try{
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token)
            true
        }catch(error: Exception){
            error.printStackTrace()
            false
        }
    }

    fun parseClaims(accessToken: String): Claims{
        return try{
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(accessToken).body
        }catch(error: ExpiredJwtException){
            return error.claims
        }
    }

}