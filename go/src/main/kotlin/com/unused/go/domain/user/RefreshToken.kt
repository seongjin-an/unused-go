package com.unused.go.domain.user

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "REFRESH_TOKEN", schema = "USERS")
class RefreshToken (
    @Id
    @Column(name = "RT_KEY")
    var key: String,
    @Column(name = "RT_VALUE")
    var value: String
){
    fun updateValue(token: String): RefreshToken {
        this.value = token
        return this
    }
}