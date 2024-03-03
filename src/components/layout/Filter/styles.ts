import styled, { keyframes, css } from 'styled-components';
import { InputWrapper, SearchButton, FormContainer } from '../styles';

export const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

export const FilterSelectContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const FilterSelect = styled.select`
  border-radius: 5px;
  cursor: pointer;
  font: inherit;
  height: 45px;
  border: 1px solid;

  &:hover {
    background-color: rgb(199 188 141);
  }
`;

export const FilterForm = styled(FormContainer)`
  background-color: rgb(255, 255, 255);
  border: 1px solid;
  max-height: 45px;

  &:hover {
    background-color: rgb(199 188 141);
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: normal;
    max-height: none;
    height: 100%;
    width: 100%;
  }
`;

export const FilterFormContainer = styled.div`
  display: flex;
`;

export const FilterLabelWrapper = styled.label`
  max-width: 260px;

  @media (max-width: 700px) {
    width: 100%;
    max-width: none;
  }
`;

export const FilterTypeInputWrapper = styled(InputWrapper)`
  color: black;
  width: 65%;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const FilterSpeciesInputWrapper = styled(FilterTypeInputWrapper)`
  width: 65%;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const HrWrapper = styled.hr`
  margin: 0 5px;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  align-self: stretch;

  @media (max-width: 700px) {
    border-width: 0px 0px 1px 0px;
  }
`;

export const AddButton = styled(SearchButton)`
  fill: black;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const ResetButton = styled(AddButton)<{ $isSpinning: boolean }>`
  padding: 0;
  ${({ $isSpinning }) =>
    $isSpinning &&
    css`
      animation: ${spin} 0.5s linear forwards;
    `};
`;
