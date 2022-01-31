package com.unused.go.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class ViewController {
    @GetMapping("main")
    fun main(): String{
        return "index"
    }
}