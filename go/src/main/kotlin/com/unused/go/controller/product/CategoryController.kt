package com.unused.go.controller.product

import com.unused.go.constants.app.AppConstant
import com.unused.go.dto.ResultResponse
import com.unused.go.service.product.CategoryService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("category")
@CrossOrigin("*")
class CategoryController(val categoryService: CategoryService) {
    @GetMapping("root")
    fun getRootCategory(): ResponseEntity<ResultResponse> {
        return try {
            val result = categoryService.getRootCategories()
            ResponseEntity.ok(ResultResponse(AppConstant.Result.SUCCESS, result))
        } catch (error: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ResultResponse(AppConstant.Result.ERROR, error.message))
        }
    }

    @GetMapping("subject")
    fun getSubjectCategory(@RequestParam("type") type: String): ResponseEntity<ResultResponse> {
        return try{
            val result = categoryService.getSubjectCategories(type)
            ResponseEntity.ok(ResultResponse(AppConstant.Result.SUCCESS, result))
        } catch(error: Exception){
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ResultResponse(AppConstant.Result.ERROR, error.message))
        }
    }
}