package com.unused.go.domain.user

import com.unused.go.domain.BaseEntity
import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "TBL_USER_INFO", schema = "USERS")
class UserInfo(
    @Id
    @Column(name = "ID")
    var id: String,
    @Column(name = "LOGIN_ID")
    var loginId: String,
    @Column(name = "NAME")
    var name: String,
    @Column(name = "PASSWORD")
    var password: String,
    @Column(name = "EMAIL")
    var email: String,
    @Column(name = "PHONE")
    var phone: String
): BaseEntity() {
    constructor(id: String, loginId: String, name: String,password: String, email: String, phone: String,
                createdAt: LocalDateTime, updatedAt: LocalDateTime): this(id, loginId, name, password, email, phone) {
        super.createdAt = createdAt
        super.updatedAt = updatedAt
    }
}