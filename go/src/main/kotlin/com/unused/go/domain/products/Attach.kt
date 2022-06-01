package com.unused.go.domain.products

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "TBL_ATTACH", schema = "PRODUCTS")
class Attach (
    @Id
    @Column(name = "ID")
    var id: String,

    @Column(name = "PATH")
    var path: String,

    @Column(name = "NAME")
    var name: String,

    @Column(name = "TYPE")
    var type: String,
)