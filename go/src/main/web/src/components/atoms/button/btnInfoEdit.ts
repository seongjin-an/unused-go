import styled, { css } from 'styled-components';

export const btnInfoEdit = css`
    width: 70px;
    height: 34px;
    font-family: PretendardMedium;
    font-size: 15px;
    color: #000000;
    background-color: #ffe36d;
    margin: 0 auto;
    border-radius: 10px;
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transition: -webkit-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
    position: absolute;
    top: 27px;
    border: none;
    right: 0;
    &:hover {
        transform: scale(1.1, 1.1);
        -ms-transform: scale(1.1, 1.1);
        -webkit-transform: scale(1.1, 1.1);
    }
`;
export const StyledBtnInfoEdit = styled.button`
    ${btnInfoEdit}
`;
