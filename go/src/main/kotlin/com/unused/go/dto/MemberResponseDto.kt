package com.unused.go.dto

import com.unused.go.domain.user.UserInfo

class MemberResponseDto (
    var loginId: String
){
    companion object {
        fun of(userInfo: UserInfo): MemberResponseDto {
            return MemberResponseDto(userInfo.loginId)
        }
    }
}