package com.unused.go.repository.user

import com.unused.go.domain.user.UserInfo
import com.unused.go.enums.jwt.Authority
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.security.crypto.password.PasswordEncoder
import java.time.LocalDateTime
import java.util.*

@SpringBootTest
class UserInfoRepositoryTest {
    @Autowired
    private lateinit var userInfoRepository: UserInfoRepository
    @Autowired
    private lateinit var passwordEncoder: PasswordEncoder

    @Test
    fun createUserTest(){
        val user = UserInfo(
            id = UUID.randomUUID().toString(),
            loginId = "eprot",
            pwd = passwordEncoder.encode("1234"),
            name = "eprot",
            email = "eprot@naver.com",
            phone = "010-1234-1234",
            authority = Authority.ROLE_USER
        )
        userInfoRepository.save(user)
    }
}