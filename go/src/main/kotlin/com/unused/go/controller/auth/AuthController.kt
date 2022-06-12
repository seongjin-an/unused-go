package com.unused.go.controller.auth

import com.unused.go.constants.app.AppConstant
import com.unused.go.dto.*
import com.unused.go.service.auth.AuthService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
class AuthController(val authService: AuthService) {
    @PostMapping("/signup")
    fun signup(@RequestBody memberRequestDto: MemberRequestDto): ResponseEntity<MemberResponseDto>{
        return ResponseEntity.ok(authService.signup(memberRequestDto))
    }

    @PostMapping("/login")
    fun login(@RequestBody memberRequestDto: MemberRequestDto): ResponseEntity<TokenDto> {
        return ResponseEntity.ok(authService.login(memberRequestDto))
    }

    @PostMapping("/reissue")
    fun reissue(@RequestBody tokenRequestDto: TokenRequestDto): ResponseEntity<TokenDto> {
        return ResponseEntity.ok(authService.reissue(tokenRequestDto))
    }

    @PostMapping("/logout")
    fun logout(): ResponseEntity<ResultResponse>{
        return try {
            if(authService.logout()) {
                ResponseEntity.ok(ResultResponse(AppConstant.Result.SUCCESS))
            }else{
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ResultResponse(AppConstant.Result.ERROR))
            }
        }catch(error: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResultResponse(code = AppConstant.Result.ERROR, result = error.message))
        }
    }
}