package com.unused.go.service

import com.unused.go.configuration.security.SecurityUtil
import com.unused.go.domain.user.UserInfo
import com.unused.go.dto.MemberResponseDto
import com.unused.go.repository.user.RefreshTokenRepository
import com.unused.go.repository.user.UserInfoRepository
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class UserInfoService(
    val userInfoRepository: UserInfoRepository,
    val refreshTokenRepository: RefreshTokenRepository
) {

    private val _logger = LoggerFactory.getLogger(UserInfoService::class.java)

    @Transactional
    fun getUserInfo(loginId: String): MemberResponseDto? {
        return userInfoRepository.findByLoginId(loginId)
            .map { MemberResponseDto.of(it) }
            .orElseThrow { RuntimeException("CAN NOT FIND USER INFO") }
    }
    @Transactional(readOnly = true)
    fun getMyInfo(): MemberResponseDto? {
        _logger.info("current member id: {}", SecurityUtil.getCurrentMemberId())
        return userInfoRepository.findByLoginId(SecurityUtil.getCurrentMemberId())
            .map { MemberResponseDto.of(it) }
//            .orElseThrow { RuntimeException("NOT FOUND USER INFO") }
            .orElse(null)
    }

    @Transactional(readOnly = true)
    fun logout(): Boolean {
        _logger.info("LOGOUT INFO: {}", SecurityUtil.getCurrentMemberId())
        var result = false;
        val imsi = userInfoRepository.findByLoginId(SecurityUtil.getCurrentMemberId())
            .map { MemberResponseDto.of(it) }
//            .orElseThrow { RuntimeException("NOT FOUND USER INFO") }
            .orElse(null)
        refreshTokenRepository.findById(imsi.loginId).ifPresent {
            refreshTokenRepository.delete(it)
            result = true
        }
        SecurityUtil.clearContext()
//        println("imsi: $imsi")
        return result
    }

    fun checkId(id: String): String? {
        val user = userInfoRepository.findByLoginId(id).orElse(null)
        return if(user != null){
            "EXIST"
        }else{
            null
        }
    }
}