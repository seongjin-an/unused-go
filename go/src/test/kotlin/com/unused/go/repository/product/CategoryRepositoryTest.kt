package com.unused.go.repository.product

import com.unused.go.domain.products.Category
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.util.*

@SpringBootTest
class CategoryRepositoryTest {
    @Autowired
    private lateinit var categoryRepository: CategoryRepository

    @Test
    fun createCategoryTest(){
        val category = Category(UUID.randomUUID().toString(), "sports", "ROOT", "운동용품")
        val result = categoryRepository.save(category)
        println("result: $result")
    }

    @Test
    fun createSubCategoryTest(){
        val categories = IntArray(8) { i -> i*2 }.map { idx -> Category(UUID.randomUUID().toString(), "sports", "fitness$idx", "fitness$idx") }
        val result = categoryRepository.saveAll(categories)
        println("result: $result")
        Assertions.assertEquals(result.size, 8)
    }

    @Test
    fun selectCategoriesTest(){
        val categories = categoryRepository.findAll()
        println("result: $categories")
        Assertions.assertNotNull(categories)
    }

}