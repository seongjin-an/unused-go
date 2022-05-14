package com.unused.go.controller.test

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("test")
@CrossOrigin("*")
class TestController {
    @GetMapping("imsi")
    fun getImsi(): ResponseEntity<String> {
        return ResponseEntity.ok("IMSI")
    }
}