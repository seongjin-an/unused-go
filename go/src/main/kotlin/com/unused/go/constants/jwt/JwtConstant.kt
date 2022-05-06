package com.unused.go.constants.jwt

object JwtConstant {
    const val AUTHORITIES_KEY = "auth"
    const val BEARER_TYPE = "bearer"
    const val ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 30
    const val REFRESH_TOKEN_EXPIRE_TIME = 1000 * 60 * 60 * 24 * 7

    const val AUTHORIZATION_HEADER = "Authorization"
    const val BEARER_PREFIX = "Bearer"
}