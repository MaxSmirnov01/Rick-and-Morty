import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 1s steps(30, end);
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 500px;
  height: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 18px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 10px;
`;
