package com.unused.go.service.product

import com.unused.go.configuration.security.SecurityUtil
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service

@Service
class ProductService {
    private val _logger = LoggerFactory.getLogger(ProductService::class.java)
    fun postProduct(){
        _logger.info("in postProduct method, current memeberId: {}", SecurityUtil.getCurrentMemberId())
    }
}