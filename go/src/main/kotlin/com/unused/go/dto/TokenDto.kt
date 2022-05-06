package com.unused.go.dto

data class TokenDto (
    var grantType: String,
    var accessToken: String,
    var refreshToken: String,
    var accessTokenExpiresIn: Long
)