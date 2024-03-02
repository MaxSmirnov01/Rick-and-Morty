import type { Character } from '../../../types/api';
import { CardContainer, CardImg, CardContent, H2Wrapper, Status } from './styles';

const Card = ({ character, onClick }: { character: Character; onClick: () => void }) => {
  return (
    <CardContainer onClick={onClick}>
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
    </CardContainer>
  );
};

export default Card;
