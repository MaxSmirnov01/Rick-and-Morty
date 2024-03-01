import styled from 'styled-components';
import { spin } from '../styles';

export const MainSection = styled.section`
  padding: 40px 0 0 0;
`;

export const UlWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 40px;
  margin: 0;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: 40px;
`;

export const SpinnerImg = styled.img`
  height: 100%;
  animation: ${spin} 1s linear infinite;
`;

export const CardWrapper = styled.li`
  width: 600px;
  height: 220px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);

  overflow: hidden;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  border: 1px solid;

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

export const Error = styled.h2`
  text-align: center;
`;
