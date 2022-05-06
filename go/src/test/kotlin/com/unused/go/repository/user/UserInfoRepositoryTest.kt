package com.unused.go.repository.user

import com.unused.go.domain.user.UserInfo
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.time.LocalDateTime
import java.util.*

@SpringBootTest
class UserInfoRepositoryTest {
    @Autowired
    private lateinit var userInfoRepository: UserInfoRepository

    @Test
    fun crudTest(){
        val user = UserInfo(
            UUID.randomUUID().toString(),
            "ansj",
            "안성진",
            "1234",
            "ansj@ansj.com",
            "1234",
            LocalDateTime.now(),
            LocalDateTime.now()
        )
        userInfoRepository.save(user)
    }
}