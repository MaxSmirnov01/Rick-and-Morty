import { useRoutes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Header from './layout/Header';

const App = () => {
  const pages = useRoutes([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <Header />
      <main>{pages}</main>
    </>
  );
};

export default App;
