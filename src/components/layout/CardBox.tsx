import { useGetCharactersQuery } from '../../api/api';
import Card from './Card';
import { CardsSection, UlWrapper } from './styles';

const CardBox = () => {
  const { data, isLoading, isFetching, isError } = useGetCharactersQuery();
  console.log(data, isLoading, isFetching, isError);

  return (
    <CardsSection>
      <UlWrapper>
        {data && data.results.map((character) => <Card key={character.id} character={character} />)}
      </UlWrapper>
    </CardsSection>
  );
};

export default CardBox;
