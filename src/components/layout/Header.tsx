import search from '../../assets/search.svg';
import { HeaderWrapper, SearchButton } from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <SearchButton>
        <img src={search} alt="Search icon" />
      </SearchButton>
    </HeaderWrapper>
  );
};

export default Header;
