package com.unused.go.service.product

import com.unused.go.configuration.security.SecurityUtil
import com.unused.go.dto.product.ProductDto
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service
import org.springframework.web.multipart.MultipartFile

@Service
class ProductService {
    private val _logger = LoggerFactory.getLogger(ProductService::class.java)
    fun postProduct(product: ProductDto, pictures: List<MultipartFile>){
        _logger.info("in postProduct method, current memeberId: {}", SecurityUtil.getCurrentMemberId())
        _logger.info("product: {}", product)
        pictures.forEach {
            _logger.info("--------------------------------------------------")
            _logger.info("upload file name: {}", it.originalFilename)
            _logger.info("upload file size: {}", it.size)
            _logger.info("--------------------------------------------------")
        }
    }
}