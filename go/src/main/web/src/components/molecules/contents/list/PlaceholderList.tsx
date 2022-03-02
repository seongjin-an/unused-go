import React from "react";
import {Skeleton} from "../../../atoms/skeleton";
import styled from "styled-components";

const Placeholder: React.FC = () => {
    return(
        <Wrapper>
            <Skeleton width={308} height={373} rounded/>
            <Skeleton width={250} height={25} style={{marginTop: '3px'}} rounded/>
            <Skeleton width={230} height={25} style={{marginTop: '3px'}} rounded/>
            <Skeleton width={260} height={25} style={{marginTop: '3px'}} rounded/>
        </Wrapper>
    )
}

export const PlaceholderList: React.FC = () => (
    <>
        {
            Array(9).fill(0).map((_, index) => (
                <Placeholder/>
            ))
        }
    </>
)
const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 308px;
  height: auto;
  margin-left: 35.5px;
  margin-bottom: 40px;
  cursor: pointer;
`