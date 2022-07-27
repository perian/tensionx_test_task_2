import React, { useState } from 'react';
import InnerTable from '../inner-table/inner-table';
import { Score } from '../types/consts';
import { averageScoreColor, averageSpeedTextColor } from '../utils/utils';

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

  const scoreTextColor = () => {
    const averageScore = parseInt(score.slice(0, -1));

    return averageScoreColor(averageScore);
  };

  return (
    <React.Fragment>
      <div className="score-table__tr" onClick={closeInnerTable}>
        <div className="score-table__td-checkbox">
          <input
            className="checkbox-input  visually-hidden"
            id={`${id}`}
            name={`student-{name}`}
            type="checkbox"
          />
          <label className="checkbox-label" htmlFor={`${id}`}></label>
        </div>
        <p className="score-table__td-name">{name}</p>
        <p className="score-table__td-id">{id}</p>
        <p className="score-table__td-class">{group}</p>
        <p className={`score-table__td-av-score ${scoreTextColor()}`}>
          {score}
        </p>
        <p
          className={`score-table__td-av-speed ${averageSpeedTextColor(speed)}`}
        >
          {speed}
        </p>
        <p className="score-table__td-av-parents">{parents.join(', ')}</p>
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

      {isShown && <InnerTable key={id} tests={tests} name={name} id={id} />}
    </React.Fragment>
  );
}

export default MainTableRow;
