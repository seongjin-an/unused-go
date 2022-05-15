package com.unused.go.controller.auth

import com.unused.go.dto.MemberRequestDto
import com.unused.go.dto.MemberResponseDto
import com.unused.go.dto.TokenDto
import com.unused.go.dto.TokenRequestDto
import com.unused.go.service.AuthService
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
}