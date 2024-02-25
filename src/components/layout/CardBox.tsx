import { useSelector } from 'react-redux';
import { useGetCharactersQuery } from '../../api/api';
import Card from './Card';
import { UlWrapper } from './styles';
import { RootState } from '../../store/store';
import Pagination from './Pagination';

const CardBox = () => {
  const { name, page } = useSelector((state: RootState) => state.currentCharacter);

  const { data, isLoading, isFetching, isError } = useGetCharactersQuery({ name, page });
  console.log(data);

  return (
    <>
      {data && (
        <section>
          <UlWrapper>
            {data.results.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </UlWrapper>
          <Pagination data={data} page={page} />
        </section>
      )}
    </>
  );
};

export default CardBox;
