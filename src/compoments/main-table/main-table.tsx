import { useState } from 'react';
import { useAppSelector } from '../hooks';
import InnerTable from '../inner-table/inner-table';
import Pagination from '../pagination/pagination';
import { useFetchDataQuery } from '../services/api';
import './main-table.scss';

function MainTable() {
  const [isShown, setIsShown] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const {} = useAppSelector((state) => state.data);

  const {
    data: scores,
    isFetching,
    isLoading,
  } = useFetchDataQuery({
    page,
    size
  });

  const openInnerTable = () => {
    setIsShown(true);
  };

  const closeInnerTable = () => {
    isShown && setIsShown(false);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!scores?.data) {
    return (
      <div>
        Ooops something went wrong, please refresh the page or try later :(
      </div>
    );
  }

  return (
    <section className="score">
      <div className="score-table">
        <div className="score-table__thead">
          <div className="score-table__tr">
            <p className="score-table__td-check">
              <input id="select-all-students" type="checkbox" />
            </p>
            <p className="score-table__td-name">Name</p>
            <p className="score-table__td-id">ID</p>
            <p className="score-table__td-class">Class</p>
            <p className="score-table__td-av-score">Av. Score, %</p>
            <p className="score-table__td-av-speed">Av. Speed</p>
            <p className="score-table__td-parents">Parents</p>
            <p className="score-table__td-actions">Actions</p>
          </div>
        </div>
        <div className="score-table__body">
          <div className="score-table__tr" onClick={closeInnerTable}>
            <div className="score-table__td-check">
              <input id="student-name" type="checkbox" />
            </div>
            <div className="score-table__td-name">Nicole Kidman</div>
            <div className="score-table__td-id">7512552212</div>
            <div className="score-table__td-class">1D</div>
            <div className="score-table__td-av-score">76%</div>
            <div className="score-table__td-av-speed">Below Expected</div>
            <div className="score-table__td-av-parents">
              Antony Kidman, Jesica Alba-Gabriella
            </div>
            <div className="score-table__td-actions">
              <button
                className="score-table__button  score-table__button--create"
                type="button"
              ></button>
              <button
                className="score-table__button  score-table__button--trending-up"
                type="button"
              ></button>
              <button
                className="score-table__button  score-table__button--drop-down"
                type="button"
                onClick={openInnerTable}
              ></button>
            </div>
          </div>

          {isShown && <InnerTable />}
        </div>
      </div>

      <Pagination
        size={size}
        setSize={setSize}
        page={page}
        setPage={setPage}
        totalCount={scores.totalCount}
        totalPages={scores.totalPages}
      />
    </section>
  );
}

export default MainTable;
