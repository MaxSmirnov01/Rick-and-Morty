import { useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../../../api/api';
import Card from './Card';
import { MainSection, UlWrapper, SpinnerContainer, SpinnerImg, Error } from './styles';
import { RootState } from '../../../store/store';
import Pagination from '../Pagination';
import logo from '../../../assets/logo.png';
import Filter from '../Filter/Filter';
import { useEffect, useState } from 'react';

const CardBox = () => {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const { page, filters } = useSelector((state: RootState) => state.currentCharacter);

  const { data, isLoading, isFetching, isError, error } = useGetCharactersQuery({ page, ...filters });

  useEffect(() => {
    if (isError) {
      if ('data' in error && error.data) {
        const errorData = error.data as { error: string };
        setErrorMessage(errorData.error);
      }
    }
  }, [isError, error]);

  return (
    <MainSection>
      <Filter />
      {isError && <Error>{errorMessage}</Error>}
      {(isLoading || isFetching) && (
        <SpinnerContainer>
          <SpinnerImg src={logo} alt="spinner" />
        </SpinnerContainer>
      )}
      {data && !isError && (
        <>
          <UlWrapper>
            {data.results.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </UlWrapper>
          <Pagination data={data} page={page} />
        </>
      )}
    </MainSection>
  );
};

export default CardBox;
