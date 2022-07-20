import { useState } from 'react';
import Pagination from '../pagination/pagination';
import { useFetchDataQuery } from '../services/api';
import MainTableRow from './main-table-row';
import './main-table.scss';

function MainTable() {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const {
    data: scores,
    isLoading,
  } = useFetchDataQuery({
    page,
    size,
  });

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
          {scores.data.map((student) => {
            return <MainTableRow key={student.id} student={student} />;
          })}
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
