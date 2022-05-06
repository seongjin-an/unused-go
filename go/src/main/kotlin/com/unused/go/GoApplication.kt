package com.unused.go

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication

@SpringBootApplication
@ConfigurationPropertiesScan
class GoApplication

fun main(args: Array<String>) {
    runApplication<GoApplication>(*args)
}
