import React, {MouseEvent, useState} from "react";
import {BaseTopMenu, DetailTopMenu} from "../../atoms/header";
import styled from "@emotion/styled";

export const TopMenus: React.FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('handleMouseOver')
    }
    const handleMouseOut = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('handleMouseOut')
    }
    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('handleMouseEnter')
        setIsShow(true)
    }
    const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.preventDefault()
        console.log('handleMouseLeave')
        setIsShow(false)
    }
    return (
        <StyledTopMenus onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <BaseTopMenu/>
            <DetailTopMenu isShow={isShow}/>
        </StyledTopMenus>
    )
}
const StyledTopMenus = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`