package com.unused.go

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication
@ConfigurationPropertiesScan
@EnableJpaAuditing
class GoApplication

fun main(args: Array<String>) {
    runApplication<GoApplication>(*args)
}
