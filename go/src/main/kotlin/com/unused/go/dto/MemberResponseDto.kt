package com.unused.go.dto

import com.unused.go.domain.user.UserInfo

class MemberResponseDto (
    var loginId: String,
    var name: String
){
    companion object {
        fun of(userInfo: UserInfo): MemberResponseDto {
            return MemberResponseDto(userInfo.loginId, userInfo.name!!)
        }
    }
}