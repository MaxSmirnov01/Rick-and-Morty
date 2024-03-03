import notFound from '../../assets/notFound.png';
import { NotFoundContainer, NotFoundImg, ToMainButton } from '../layout/styles';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg src={notFound} alt="notFound" />
    <Link to="/">
      <ToMainButton>На главную</ToMainButton>
    </Link>
  </NotFoundContainer>
);

export default NotFound;
