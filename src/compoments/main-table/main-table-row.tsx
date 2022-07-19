import React, { useState } from 'react';
import InnerTable from '../inner-table/inner-table';
import { Score } from '../types/consts';

type MainTableRowProps = {
  student: Score;
};

function MainTableRow({ student }: MainTableRowProps) {
  const { class: group, name, id, score, speed, parents, tests } = student;

  const [isShown, setIsShown] = useState(false);

  const openInnerTable = () => {
    setIsShown(true);
  };

  const closeInnerTable = () => {
    isShown && setIsShown(false);
  };

  return (
    <React.Fragment>
      <div className="score-table__tr" onClick={closeInnerTable}>
        <div className="score-table__td-check">
          <input id="student-name" type="checkbox" />
        </div>
        <div className="score-table__td-name">{name}</div>
        <div className="score-table__td-id">{id}</div>
        <div className="score-table__td-class">{group}</div>
        <div className="score-table__td-av-score">{score}</div>
        <div className="score-table__td-av-speed">{speed}</div>
        <div className="score-table__td-av-parents">{parents.join(', ')}</div>
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

      {isShown && <InnerTable tests={tests} name={name} id={id} />}
    </React.Fragment>
  );
}

export default MainTableRow;
