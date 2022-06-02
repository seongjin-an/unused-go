package com.unused.go.service.product

import com.unused.go.domain.products.Category
import com.unused.go.repository.product.CategoryRepository
import org.springframework.stereotype.Service

@Service
class CategoryService(val categoryRepository: CategoryRepository) {
    fun getRootCategories(): Collection<Category> {
        return categoryRepository.findBySubject()
    }
}