package com.unused.go.service.product

import com.unused.go.domain.products.Category
import com.unused.go.dto.product.CategoryDto
import com.unused.go.repository.product.CategoryRepository
import org.springframework.stereotype.Service

@Service
class CategoryService(val categoryRepository: CategoryRepository) {
    fun getRootCategories(): Collection<CategoryDto> {
        return categoryRepository.findBySubject()
    }
}