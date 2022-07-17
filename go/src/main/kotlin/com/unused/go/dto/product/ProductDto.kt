package com.unused.go.dto.product

data class ProductDto(
    val productName: String,
    val categoryId: String,
    val price: String,
    val size: String,
    val color: String,
    val feeling: String,
    val usedDuration: String,
    val guaranteeDuration: String,
    val etcInfo: String
)