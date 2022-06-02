package com.unused.go.repository.product

import com.unused.go.domain.products.Category
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CategoryRepository: JpaRepository<Category, String> {
}