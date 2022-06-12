package com.unused.go.configuration.security

import org.springframework.security.core.context.SecurityContextHolder

class SecurityUtil {
    companion object {
        // SecurityContext 에 유저 정보가 저장되는 시점
        // Request 가 들어올 때 JwtFilter 의 doFilter 에서 저장
        fun getCurrentMemberId(): String{
            val authentication = SecurityContextHolder.getContext().authentication
            if(authentication == null || authentication.name == null){
                throw RuntimeException("Security context 에 인증 정보가 없습니다.")
            }
            return authentication.name
        }

        fun clearContext(){
            SecurityContextHolder.clearContext()
        }
    }
}