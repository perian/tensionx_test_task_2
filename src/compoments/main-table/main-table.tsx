import Pagination from '../pagination/pagination';
import Scores from '../types/consts';
import MainTableRow from './main-table-row';
import './main-table.scss';

type MainTableProps = {
  scores: Scores;
}

function MainTable({scores}: MainTableProps) {
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
          {scores.map((student) => {
            return <MainTableRow key={student.id} student={student} />;
          })}
        </div>
      </div>

      <Pagination />
    </section>
  );
}

export default MainTable;
