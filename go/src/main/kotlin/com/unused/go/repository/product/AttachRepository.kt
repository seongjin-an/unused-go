package com.unused.go.repository.product

import com.unused.go.domain.products.Attach
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AttachRepository: JpaRepository<Attach, String> {
}