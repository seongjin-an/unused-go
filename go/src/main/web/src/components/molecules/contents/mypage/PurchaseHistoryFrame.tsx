import React from "react";
import styled from "styled-components";

export const PurchaseHistoryFrame: React.FC = () => {
    return(
        <StyledPurchaseHistoryFrame>
            <div className="history_hint">구매 입찰 내역이 없습니다.</div>
        </StyledPurchaseHistoryFrame>
    )
}
const StyledPurchaseHistoryFrame = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  padding-top: 20px;
  & > .history_hint{
    font-family: PretendardRegular;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }
`