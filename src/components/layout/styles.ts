import styled, { keyframes } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: rgb(45, 44, 44);
  width: 100%;
  height: 100px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  padding: 15px 0;
  height: 100%;
`;

export const NotFoundContainer = styled(LogoContainer)`
  align-items: center;
  flex-direction: column;
`;

export const NotFoundImg = styled.img`
  width: 500px;

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const ToMainButton = styled.button`
  cursor: pointer;
  background: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 16px;
  padding: 5px 15px;
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  height: 100%;

  &:hover {
    animation: ${spin} 1s linear infinite;
  }
`;

export const FormContainer = styled.form`
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  padding: 5px 5px;
  height: 45px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

export const InputWrapper = styled.input`
  font: inherit;
  color: white;
  box-sizing: content-box;
  padding: 5px 5px;
  border: 0px;
  background: none;

  &:focus {
    outline: 0px;
  }

  @media (max-width: 425px) {
    width: 150px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: 0px;
  fill: white;
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 40px 20px;
`;

export const PaginationButton = styled.button<{ $disabled: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 0px;
  width: 50px;
  height: 40px;
  opacity: ${(props) => props.$disabled && 0.4};

  &:hover {
    background-color: rgb(199 188 141);
    border-radius: 5px;
  }
`;
