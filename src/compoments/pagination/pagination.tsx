import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useFetchDataQuery } from '../services/api';
import { previousPage, nextPage, setSize } from '../store/dataSlice';
import './pagination.scss';

function Pagination() {
  const dispatch = useAppDispatch();
  const { page, size } = useAppSelector((state) => state.data);
  const { data: scores } = useFetchDataQuery({ page, size });
  const [pageItemsCounter, setPageItemsCounter] = useState(1);

  return (
    <div className="pagination">
      <div className="pagination__rows-per-page">
        <p className="pagination__text">Rows per page:</p>
        <select
          className="select pagination__select"
          name="pages"
          id="pagination__rows-per-page"
          aria-readonly
          value={size}
          onChange={(evt) => dispatch(setSize(parseInt(evt.target.value)))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <p className="pagination__text">
        {pageItemsCounter}-{size * page} of {scores?.totalCount}
      </p>

      <div className="pagination__pages-controls">
        <button
          className="pagination__arrow  pagination__arrow--left"
          type="button"
          onClick={() => {
            dispatch(previousPage());
            setPageItemsCounter((prev) => prev - size);
          }}
          disabled={page === 1}
        ></button>
        <button
          className="pagination__arrow  pagination__arrow--right"
          type="button"
          onClick={() => {
            dispatch(nextPage());
            setPageItemsCounter((prev) => prev + size);
          }}
          disabled={page === scores?.totalPages}
        ></button>
      </div>
    </div>
  );
}

export default Pagination;
