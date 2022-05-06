package com.unused.go.domain.user

import com.unused.go.domain.BaseEntity
import com.unused.go.enums.jwt.Authority
import org.springframework.security.core.userdetails.UserDetails
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "TBL_USER_INFO", schema = "USERS")
class UserInfo(
    @Id
    @Column(name = "ID")
    var id: String? = null,
    @Column(name = "LOGIN_ID")
    var loginId: String,
    @Column(name = "NAME")
    var name: String? = null,
    @Column(name = "PASSWORD")
    var pwd: String,
    @Column(name = "EMAIL")
    var email: String? = null,
    @Column(name = "PHONE")
    var phone: String? = null,
    @Enumerated(EnumType.STRING)
    var authority: Authority
): BaseEntity() {
    constructor(id: String? = null, loginId: String, name: String? = null, pwd: String, email: String? = null,
                phone: String? = null, authority: Authority, createdAt: LocalDateTime, updatedAt: LocalDateTime):
            this(id, loginId, name, pwd, email, phone, authority) {
        super.createdAt = createdAt
        super.updatedAt = updatedAt
    }
}