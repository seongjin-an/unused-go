package com.unused.go.domain.products

import com.unused.go.domain.BaseEntity
import com.unused.go.domain.user.UserInfo
import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.OneToOne
import javax.persistence.Table

@Entity
@Table(name = "TBL_PRODUCT", schema = "PRODUCTS")
class Product (
    @Id
    @Column(name = "ID")
    var id: String? = null,

    @Column(name = "PRICE")
    var price: Long? = null,

    @Column(name = "SIZE")
    var size: String? = null,

    @Column(name = "COLOR")
    var color: String? = null,

    @Column(name = "FEELING_OF_USE")
    var feelingOfUse: FeelingType? = null,

    @Column(name = "PERIOD_OF_USE")
    var periodOfUse: String? = null,

    @Column(name = "PERIOD_OF_GUARANTEE")
    var periodOfGuarantee: String? = null,

    @Column(name = "ETC")
    var etc: String? = null,

    @OneToOne
    @JoinColumn(name = "ID")
    var category: Category? = null,

    @OneToOne
    @JoinColumn(name = "ID")
    var user: UserInfo? = null,
): BaseEntity() {
    constructor(
        id: String? = null, price: Long? = null, size: String? = null,
        color: String? = null, feelingOfUse: FeelingType? = null, periodOfUse: String? = null,
        periodOfGuarantee: String? = null, etc: String? = null, category: Category? = null, user: UserInfo? = null,
        createdAt: LocalDateTime, updatedAt: LocalDateTime
    ): this(id, price, size, color, feelingOfUse, periodOfUse, periodOfGuarantee, etc, category, user) {
        super.createdAt = createdAt
        super.updatedAt = updatedAt
    }
}