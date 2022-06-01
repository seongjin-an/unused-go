package com.unused.go.domain.products

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "TBL_PRODUCT", schema = "PRODUCTS")
class Product (
    @Id
    @Column(name = "ID")
    var id: String,

)