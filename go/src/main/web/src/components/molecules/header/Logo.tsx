import React, { useContext } from 'react';
import styled from 'styled-components';
import logoIcon from '../../../static/image/dark/common/topBar/img/img_logo.png';
import { Modal } from '../common';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../stores/modal';
import ModalContext from '../../../contexts/modalContext';

export const Logo: React.FC = () => {
    const [isOpen, setIsOpen] = useRecoilState<boolean>(modalState);
    // const {action: {setIsOpen}} = useContext(ModalContext)
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <StyledLogoWrapper>
            <StyledLogoIcon onClick={handleOpen} />
            {/*<Modal isOpen={isOpen} onClose={handleClose}>*/}
            {/*    <ModalBody>*/}
            {/*        <h2>Title</h2>*/}
            {/*        <p>Description</p>*/}
            {/*    </ModalBody>*/}
            {/*</Modal>*/}
        </StyledLogoWrapper>
    );
};
const StyledLogoWrapper = styled.div`
    flex: 1.4;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledLogoIcon = styled.div`
    width: 128px;
    height: 43px;
    background: url(${logoIcon}) no-repeat;
`;
const ModalBody = styled.div`
    border-radius: 8px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    max-height: calc(100vh - 16px);
    overflow: hidden auto;
    position: relative;
    padding-block: 12px;
    padding-inline: 24px;
`;
