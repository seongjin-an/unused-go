package com.unused.go.controller

import com.unused.go.service.UserInfoService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/member")
@CrossOrigin
class MemberController(val userInfoService: UserInfoService) {
    @GetMapping("/me")
    fun getMyMemberInfo(): ResponseEntity<Any>{
        return try {
            val userInfo = userInfoService.getMyInfo()
            if(userInfo != null){
                ResponseEntity.ok(userInfo)
            }else{
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body("FAIL")
            }
        }catch(error: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error.message)
        }
    }

    @GetMapping("/{email}")
    fun getMemberInfo(@PathVariable("email") email: String): ResponseEntity<Any>{
        return try{
            val userInfo = userInfoService.getMyInfo()
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