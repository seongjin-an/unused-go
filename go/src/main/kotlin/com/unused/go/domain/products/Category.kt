package com.unused.go.domain.products

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "TBL_CATEGORY", schema = "PRODUCTS")
data class Category (
    @Id
    @Column(name = "ID")
    var id: String,

    @Column(name = "TYPE")
    var type: String,

    @Column(name = "SUBJECT")
    var subject: String,

    @Column(name = "NAME")
    var name: String
)