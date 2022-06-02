package com.unused.go.repository.product

import com.unused.go.domain.products.Product
import com.unused.go.enums.product.FeelingType
import com.unused.go.enums.product.SizeType
import com.unused.go.repository.user.UserInfoRepository
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.transaction.annotation.Transactional
import java.util.UUID
import java.util.function.Consumer

@SpringBootTest
class ProductRepositoryTest {
    @Autowired
    private lateinit var categoryRepository: CategoryRepository
    @Autowired
    private lateinit var productRepository: ProductRepository
    @Autowired
    private lateinit var userInfoRepository: UserInfoRepository

    @Test
    fun createProductTest(){
        val category = categoryRepository.findById("060c8230-6622-48ad-be38-42442c2d227b").get()
        val user = userInfoRepository.findById("3fa15afb-8ec1-4c9c-80e2-59611de05c50").get()
        val product = Product(
            id = UUID.randomUUID().toString(),
            price = 10000,
            size = SizeType.LARGE,
            color = "red",
            feelingOfUse = FeelingType.UPPER,
            periodOfUse = "3 years",
            periodOfGuarantee = "1 year",
            etc = "useful goods",
            category = category,
            user = user
        )
        productRepository.save(product)
    }

    @Test
    fun updateProductTest(){
        productRepository.findById("9deaa45b-1388-4622-8f32-39bfe7bcffb1").ifPresent(Consumer {
            val pro = it.apply { price = 22222 }
            productRepository.save(pro)
        })
    }

    @Test
    fun selectProductTest(){
        val product = productRepository.findById("9deaa45b-1388-4622-8f32-39bfe7bcffb1").ifPresent { product ->
            val user = product.user
            val category = product.category
            println("user: $user")
            println("category: $category")
            Assertions.assertEquals("eprot", user?.loginId)
            Assertions.assertEquals("운동용품", category?.name)
        }
    }
}