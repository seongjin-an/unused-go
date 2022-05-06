package com.unused.go.repository.user

import com.unused.go.domain.user.UserInfo
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserInfoRepository: JpaRepository<UserInfo, String> {

}