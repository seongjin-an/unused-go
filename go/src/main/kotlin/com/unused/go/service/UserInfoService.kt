package com.unused.go.service

import com.unused.go.configuration.security.SecurityUtil
import com.unused.go.domain.user.UserInfo
import com.unused.go.dto.MemberResponseDto
import com.unused.go.repository.user.UserInfoRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class UserInfoService(val userInfoRepository: UserInfoRepository) {
    @Transactional
    fun getUserInfo(loginId: String): MemberResponseDto? {
        return userInfoRepository.findByLoginId(loginId)
            .map { MemberResponseDto.of(it) }
            .orElseThrow { RuntimeException("CAN NOT FIND USER INFO") }
    }
    @Transactional(readOnly = true)
    fun getMyInfo(): MemberResponseDto? {
        return userInfoRepository.findByLoginId(SecurityUtil.getCurrentMemberId())
            .map { MemberResponseDto.of(it) }
//            .orElseThrow { RuntimeException("NOT FOUND USER INFO") }
            .orElse(null)
    }
}