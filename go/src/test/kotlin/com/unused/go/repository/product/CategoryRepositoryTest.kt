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
    fun createCategoryTest2(){
        val categories = arrayOf("아령", "바벨", "원판/플레이트", "벨트", "악력기", "밴드/짐볼", "스트랩/보호대")
            .map { Category(UUID.randomUUID().toString(), "sports", "SUBJECT", it) }
        categoryRepository.saveAll(categories)
    }

    @Test
    fun createCategoryTest3(){
        val category = Category(UUID.randomUUID().toString(), "clothes", "ROOT", "의류")
        categoryRepository.save(category)
    }

    @Test
    fun createCategoryTest4(){
        val categories = arrayOf("재킷 & 베스트", "탑 & 티셔츠", "팬츠 & 타이츠", "양말", "셋업")
            .map{ Category(UUID.randomUUID().toString(), "clothes", "SUBJECT", it) }
        categoryRepository.saveAll(categories)
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

    @Test
    fun findRootCategoryTest(){
        val categories = categoryRepository.findRootCategory()
        categories.forEach { println("category: $it") }
        Assertions.assertEquals(1, categories.size)
    }

    @Test
    fun findRootCategory2Test(){
        val categories = categoryRepository.findBySubject()
        categories.forEach { println("category: $it") }
        Assertions.assertEquals(1, categories.size)
    }

    @Test
    fun productTest(){
        val categories = categoryRepository.findByName("운동용품")
        categories.forEach { println("Result of projection: $it") }
        Assertions.assertEquals(1, categories.size)
    }

}