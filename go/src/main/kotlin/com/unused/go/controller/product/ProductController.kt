package com.unused.go.controller.product

import com.unused.go.dto.product.ProductDto
import com.unused.go.service.product.ProductService
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.multipart.MultipartFile

@RestController
@RequestMapping("product")
@CrossOrigin("*")
class ProductController(val productService: ProductService) {

    private val _logger = LoggerFactory.getLogger(ProductController::class.java)

    @PostMapping
    fun postProduct(
        @RequestPart(value = "product") product: ProductDto,
        @RequestPart(value = "pictures") pictures: List<MultipartFile>
    ){
        _logger.info("post product")
        productService.postProduct()
    }
}