package com.unused.go.domain.products

import com.unused.go.domain.BaseEntity
import com.unused.go.domain.user.UserInfo
import com.unused.go.enums.product.FeelingType
import com.unused.go.enums.product.SizeType
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "TBL_PRODUCT", schema = "PRODUCTS")
data class Product (
    @Id
    @Column(name = "ID")
    var id: String? = null,

    @Column(name = "PRICE")
    var price: Long? = null,

    @Column(name = "SIZE")
    var size: SizeType? = null,

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

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "ID", insertable = false, updatable = false)
    @OneToOne
    @JoinColumn(name = "category_id")
    var category: Category? = null,

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "ID", insertable = false, updatable = false)
    @OneToOne
    @JoinColumn(name= "user_id")
    var user: UserInfo? = null,
): BaseEntity() {
    constructor(
        id: String? = null, price: Long? = null, size: SizeType? = null,
        color: String? = null, feelingOfUse: FeelingType? = null, periodOfUse: String? = null,
        periodOfGuarantee: String? = null, etc: String? = null, category: Category? = null, user: UserInfo? = null,
        createdAt: LocalDateTime, updatedAt: LocalDateTime
    ): this(id, price, size, color, feelingOfUse, periodOfUse, periodOfGuarantee, etc, category, user) {
        super.createdAt = createdAt
        super.updatedAt = updatedAt
    }
}