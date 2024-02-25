import { Characters } from '../../types/api';
import { PaginationBox, PaginationButton } from './styles';
import { setPage } from '../../store/charactersSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

const Pagination = ({ data, page }: { data: Characters; page: number }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleNextPage = () => {
    if (page < data.info.pages) {
      dispatch(setPage(page + 1));
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <PaginationBox>
      <PaginationButton onClick={handlePrevPage} $disabled={page === 1}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </PaginationButton>
      <PaginationButton onClick={handleNextPage} $disabled={!data || page === data.info.pages}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </PaginationButton>
    </PaginationBox>
  );
};

export default Pagination;
