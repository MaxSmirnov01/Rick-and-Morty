import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: rgb(45, 44, 44);
  width: 100%;
  height: 70px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #9ce2fe;
  border: 2px solid;
  border-color: #005ae1;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 0px auto;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CardsSection = styled.section`
  background-color: #fff1b5;
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
