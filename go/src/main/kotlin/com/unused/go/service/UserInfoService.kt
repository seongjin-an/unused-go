package com.unused.go.service

import com.unused.go.domain.user.UserInfo
import com.unused.go.repository.user.UserInfoRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class UserInfoService(val userInfoRepository: UserInfoRepository) {
    @Transactional
    fun getUserInfos(email: String): UserInfo? {
        return userInfoRepository.findByEmail(email).orElseThrow { RuntimeException("CAN NOT FIND USER INFO") }
    }
    @Transactional(readOnly = true)
    fun getMyInfo(): UserInfo? {
        return userInfoRepository.findById("").orElseThrow { RuntimeException("NOT FOUND USER INFO") }
    }
}