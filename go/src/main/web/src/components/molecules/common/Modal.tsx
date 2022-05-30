import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { Portal } from './Portal';
import { BasicButton } from "../../atoms/button";
import { useRecoilState } from "recoil";
import { modalState } from "../../../stores/modal";
// import {Portal} from 'react-portal'

interface IProps {
  // isOpen: boolean;
  // onClose: () => void;
  selector?: string;
}

export const Modal: React.FC<IProps> = ({ selector, children }) => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <CSSTransition in={isOpen.hide} timeout={0} classNames="modal" unmountOnExit>
      <Portal selector={selector}>
        <Overlay>
          <Dim onClick={() => setIsOpen({ hide: false })} />
          <Container>
            {
              isOpen && Object.prototype.hasOwnProperty.call(isOpen, 'hide') &&isOpen.hide && (
                <ModalBody>
                  <StyledModalHeader>{isOpen.header}</StyledModalHeader>
                  <StyledModalSubject>{isOpen.subject}</StyledModalSubject>
                  <StyledModalMessage>{isOpen.message}</StyledModalMessage>
                  <StyledButtonFloor>
                    {isOpen.type === 'confirm' && <BasicButton kind='cancel' type='button' text='취소' onClick={() => setIsOpen({ hide: false })}/>}
                    <BasicButton kind='confirm' text='확인' type='button' onClick={() => {
                      isOpen.callback && isOpen.callback()
                      setIsOpen({ hide: false })
                    }} sx={ () => ({marginRight: '4px'}) }/>
                  </StyledButtonFloor>
                </ModalBody>
              )
            }
          </Container>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
};
const Overlay = styled.section`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.article`
  max-width: 456px;
  position: relative;
  width: 100%;
`;

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  //padding-block: 12px;
  //padding-inline: 24px;
  background-color: #fff;
`;

const StyledModalHeader = styled.header`
  width: auto;
  height: auto;
  color: #212529;
  font-weight: bold;
  font-size: 1vw;
  padding-inline: 1vw;
  border-bottom: 1px solid #e9ecef;
`;
const StyledModalSubject = styled.div`
  width: auto;
  height: 3.2vh;
  line-height: 3vh;
  padding-inline: 1vw;
  color: #212529;
  font-weight: 600;
  font-size: 1.2vw;
`
const StyledModalMessage = styled.div`
  width: auto;
  height: 3.2vh;
  line-height: 3vh;
  padding-inline: 1vw;
  color: #212529;
  font-weight: 500;
  font-size: 1vw;
  border-bottom: 1px solid #e9ecef;
`
const StyledButtonFloor = styled.div`
  direction: rtl;
  display: flex;
  margin-block: 0.2vw;
  margin-inline: 0.2vw;
`