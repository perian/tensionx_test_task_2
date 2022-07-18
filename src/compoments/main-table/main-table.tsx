import { useState } from 'react';
import InnerTable from '../inner-table/inner-table';
import Pagination from '../pagination/pagination';
import './main-table.scss';

function MainTable() {
  const [isShown, setIsShown] = useState(false);

  const openInnerTable = () => {
    setIsShown(true);
  };

  const closeInnerTable = () => {
    isShown && setIsShown(false);
  };

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

      <Pagination />
    </section>
  );
}

export default MainTable;
