import { useState } from 'react';
import { useAppSelector } from '../hooks';
import { useFetchDataQuery } from '../services/api';
import './pagination.scss';

function Pagination() {
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const {} = useAppSelector((state) => state.data);

  const { data: scores, isFetching } = useFetchDataQuery({
    pageNumber,
    itemsPerPage,
  });

  const goToPrevPage = () => {
    setPageNumber((pageNumber) => pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  };

  return (
    <div className="pagination">
      <div className="pagination__rows-per-page">
        <p className="pagination__text">Rows per page:</p>
        <select
          className="select pagination__select"
          name="pages"
          id="pagination__rows-per-page"
          aria-readonly
          value={itemsPerPage}
          onChange={(evt) => setItemsPerPage(parseInt(evt.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <p className="pagination__text">21-30 of 100</p>

      <div className="pagination__pages-controls">
        <button
          className="pagination__arrow  pagination__arrow--left"
          type="button"
          onClick={() => goToPrevPage()}
        ></button>
        <button
          className="pagination__arrow  pagination__arrow--right"
          type="button"
          onClick={() => goToNextPage()}
        ></button>
      </div>
    </div>
  );
}

export default Pagination;
