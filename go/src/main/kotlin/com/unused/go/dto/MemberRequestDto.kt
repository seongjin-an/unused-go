package com.unused.go.dto

import com.unused.go.domain.user.UserInfo
import com.unused.go.enums.jwt.Authority
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
import java.util.*

class MemberRequestDto (
    var loginId: String,
    var pwd: String,
    var name: String? = null,
    var email: String? = null,
    var phone: String? = null
){
    fun toMember(passwordEncoder: PasswordEncoder): UserInfo{
        return UserInfo(
            id = UUID.randomUUID().toString(),
            loginId = loginId,
            pwd = passwordEncoder.encode(pwd),
            name = name,
            email = email,
            phone = phone,
            authority = Authority.ROLE_USER
        )
    }
    fun toAuthentication(): UsernamePasswordAuthenticationToken {
        return UsernamePasswordAuthenticationToken(loginId, pwd)
    }
}