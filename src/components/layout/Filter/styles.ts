import styled, { keyframes, css } from 'styled-components';
import { InputWrapper, SearchButton, FormContainer } from '../styles';

export const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 40px;
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

export const FilterFormContainer = styled(FormContainer)`
  background-color: rgb(255, 255, 255);
  border: 1px solid;

  &:hover {
    background-color: rgb(199 188 141);
  }
`;

export const FilterLabelWrapper = styled.label`
  width: 260px;
`;

export const FilterInputWrapper = styled(InputWrapper)`
  color: black;
`;

export const FilterSpeciesInputWrapper = styled(FilterInputWrapper)`
  width: 65%;
`;

export const HrWrapper = styled.hr`
  margin: 0 5px;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  align-self: stretch;
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
