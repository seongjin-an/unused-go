package com.unused.go.controller

import com.unused.go.dto.ResultResponse
import com.unused.go.service.UserInfoService
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("member")
@CrossOrigin("*")
class MemberController(val userInfoService: UserInfoService) {
    private final val _logger = LoggerFactory.getLogger(MemberController::class.java)

    @GetMapping("account")
    fun getMyMemberInfo(): ResponseEntity<Any>{
        _logger.info("request get /member")
        return try {
            val userInfo = userInfoService.getMyInfo()
            if(userInfo != null){
                ResponseEntity.ok(ResultResponse("success", userInfo))
            }else{
                ResponseEntity.ok(ResultResponse("empty"))
            }
        }catch(error: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error.message)
        }
    }

    @GetMapping("me/{loginId}")
    fun getMemberInfo(@PathVariable("loginId") loginId: String): ResponseEntity<Any>{
        _logger.info("request get /member/{loginId}")
        return try{
            val userInfo = userInfoService.getUserInfo(loginId)
            if(userInfo != null){
                ResponseEntity.ok(userInfo)
            }else{
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body("FAIL")
            }
        }catch(error: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error.message)
        }
    }
}