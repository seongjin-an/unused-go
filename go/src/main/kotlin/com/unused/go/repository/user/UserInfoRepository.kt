package com.unused.go.repository.user

import com.unused.go.domain.user.UserInfo
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.*

@Repository
interface UserInfoRepository: JpaRepository<UserInfo, String> {
    fun findByLoginId(loginId: String): Optional<UserInfo>
    fun findByEmail(email: String): Optional<UserInfo>
    fun existsByLoginId(loginId: String): Boolean
}