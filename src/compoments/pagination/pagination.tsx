import { useState } from 'react';
import './pagination.scss';

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  totalPages: number;
};

function Pagination({
  page,
  setPage,
  size,
  setSize,
  totalCount,
  totalPages,
}: PaginationProps) {
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
          onChange={(evt) => setSize(parseInt(evt.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>

      <p className="pagination__text">
        {pageItemsCounter}-{size * page} of {totalCount}
      </p>

      <div className="pagination__pages-controls">
        <button
          className="pagination__arrow  pagination__arrow--left"
          type="button"
          onClick={() => {
            setPage((prev: number) => prev - 1);
            setPageItemsCounter((prev) => prev - size);
          }}
          disabled={page === 1}
        ></button>
        <button
          className="pagination__arrow  pagination__arrow--right"
          type="button"
          onClick={() => {
            setPage((prev) => prev + 1);
            setPageItemsCounter((prev) => prev + size);
          }}
          disabled={page === totalPages}
        ></button>
      </div>
    </div>
  );
}

export default Pagination;
