package com.unused.go.controller.auth

import com.unused.go.dto.ResultResponse
import com.unused.go.service.UserInfoService
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
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
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResultResponse("error", error.message))
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
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ResultResponse("400", "BAD_REQUEST"))
            }
        }catch(error: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error.message)
        }
    }

    @GetMapping("check/id")
    fun checkId(@RequestParam("id") id: String): ResponseEntity<ResultResponse> {
        return try{
            val checkId = userInfoService.checkId(id)
            if(checkId == null){
                ResponseEntity.ok(ResultResponse("SUCCESS", "사용가능"))
            }else{
                ResponseEntity.ok(ResultResponse("FAIL", "사용불가능"))
            }
        }catch(error: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResultResponse("500", error.message))
        }
    }
}