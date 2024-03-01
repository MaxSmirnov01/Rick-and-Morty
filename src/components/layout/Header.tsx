import logo from '../../assets/logo.png';
import { HeaderWrapper, Nav, LogoContainer, Logo, SearchButton, FormContainer, InputWrapper } from './styles';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/charactersSlice';
import { AppDispatch } from '../../store/store';
import { useEffect, useRef } from 'react';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: ({ name }) => {
      dispatch(setFilter({ name }));
      formik.resetForm();
    },
  });

  return (
    <HeaderWrapper>
      <Nav>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
        </LogoContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          <InputWrapper
            type="text"
            id="name"
            placeholder="Rick"
            value={formik.values.name}
            onChange={formik.handleChange}
            ref={input}
          />
          <SearchButton type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </SearchButton>
        </FormContainer>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
