import type { Character } from '../../../types/api';
import { CardWrapper, CardImg, CardContent, H2Wrapper, Status } from './styles';

const Card = ({ character }: { character: Character }) => {
  return (
    <CardWrapper>
      <div>
        <CardImg src={character.image} alt={character.name} />
      </div>
      <CardContent>
        <H2Wrapper>{character.name}</H2Wrapper>
        <strong>Gender: {character.gender}</strong>
        <strong>
          Status: <Status $color={character.status === 'Alive' ? 'green' : 'red'}>{character.status}</Status>
        </strong>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
