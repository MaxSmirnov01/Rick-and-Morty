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

const spin = keyframes`
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
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: 0px;
  fill: white;
`;

export const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 40px 40px;
  margin: 0;
`;

export const CardWrapper = styled.li`
  width: 600px;
  height: 220px;
  display: flex;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
  overflow: hidden;
  cursor: pointer;
  background-color: rgb(255, 255, 255);

  &:hover {
    background-color: rgb(199 188 141);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }
`;

export const CardImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  flex-grow: 1;
  gap: 10px;
`;

export const H2Wrapper = styled.h2`
  margin: 0;
`;

export const Status = styled.span<{ $color?: string }>`
  color: ${(props) => props.$color};
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 40px 40px;
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
