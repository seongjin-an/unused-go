package com.unused.go.configuration.jwt

import org.springframework.security.config.annotation.SecurityConfigurerAdapter
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.web.DefaultSecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
// 직접 만든 TokenProvider 와 JwtFilter 를 SecurityConfig 에 적용할 때 사용
class JwtSecurityConfig(val tokenProvider: TokenProvider) : SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity>() {
    // TokenProvider 를 주입받아서 JwtFilter 를 통해 Security 로직에 필터를 등록
    override fun configure(http: HttpSecurity?) {
        val customFilter = JwtFilter(tokenProvider)
        http?.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter::class.java)
    }
}