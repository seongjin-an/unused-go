package com.unused.go

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GoApplication

fun main(args: Array<String>) {
    runApplication<GoApplication>(*args)
}
