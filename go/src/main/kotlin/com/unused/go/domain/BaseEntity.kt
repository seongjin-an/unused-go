package com.unused.go.domain

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime
import javax.persistence.EntityListeners
import javax.persistence.MappedSuperclass

@MappedSuperclass
@EntityListeners(value = [AuditingEntityListener::class])
open class BaseEntity {
    @CreatedDate
    var createdAt: LocalDateTime? = null
    @LastModifiedDate
    var updatedAt: LocalDateTime? = null

    constructor()

    constructor(
        createdAt: LocalDateTime,
        updatedAt: LocalDateTime
    ){
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    override fun toString(): String {
        return "BaseEntity(createdAt=$createdAt, updatedAt=$updatedAt)"
    }
}