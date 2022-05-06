package com.unused.go.service

import com.unused.go.domain.user.UserInfo
import com.unused.go.repository.user.UserInfoRepository
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service
import java.util.*

@Service
class CustomUserDetailService(val userInfoRepository: UserInfoRepository): UserDetailsService {
    override fun loadUserByUsername(username: String): UserDetails {
        return userInfoRepository
            .findByLoginId(username)
            .map { createUserDetails(it) }.orElseThrow { UsernameNotFoundException("사용자를 찾을 수 없습니다.") }
    }

    private fun createUserDetails(userInfo: UserInfo): UserDetails{
        val grantedAuthority = SimpleGrantedAuthority(userInfo.authority.toString())
        return User(userInfo.loginId, userInfo.pwd, Collections.singleton(grantedAuthority))
    }
}