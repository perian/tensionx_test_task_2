import { MouseEvent } from 'react';
import Pagination from '../pagination/pagination';
import Scores from '../types/consts';
import MainTableRow from './main-table-row';
import './main-table.scss';

type MainTableProps = {
  scores: Scores;
};

function MainTable({ scores }: MainTableProps) {
  const toggleCheckAll = (evt: MouseEvent<HTMLInputElement>) => {
    const scoreTable = document.querySelector('.score-table__body');
    const checkBoxes = scoreTable!.querySelectorAll('.checkbox-input');
    const checkAllInput = evt.target as HTMLInputElement;

    for (let checkbox of checkBoxes) {
      let input = checkbox as HTMLInputElement;
      input.checked = checkAllInput.checked;
    }
  };

  return (
    <section className="score">
      <div className="score-table">
        <div className="score-table__thead">
          <div className="score-table__tr">
            <div className="score-table__td-check">
              <input
                className="checkbox-input  visually-hidden"
                id="select-all-students"
                type="checkbox"
                onClick={(evt) => toggleCheckAll(evt)}
              />
              <label
                className="checkbox-label"
                htmlFor="select-all-students"
              ></label>
            </div>
            <label className="score-table__td-name">Name</label>
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
