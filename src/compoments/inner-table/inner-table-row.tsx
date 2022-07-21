import { useState } from 'react';
import { Test } from '../types/consts';
import { averageScoreColor } from '../utils/utils';
import './inner-table.scss';

type InnerTableProps = {
  test: Test;
  index: number;
};

function InnerTableRow({ test, index }: InnerTableProps) {
  const { absent, concept, date, expSpeed, label, score, speed, total } = test;
  const [isAbsent, setIsAbsent] = useState(absent);

  const scoreTextColor = () => {
    const maxScore = parseInt(label.slice(10));
    const averageScore = (score / maxScore) * 100;

    return averageScoreColor(averageScore);
  };

  function setRowDisabled(): any {
    const className = 'results-table__tr';

    if (isAbsent) {
      return `${className}  ${className}--disabled`;
    }
    return className;
  }

  return (
    <div className={setRowDisabled()}>
      <p className="results-table__td-number">{index}</p>
      <p className="results-table__td-test-label">{label}</p>
      <p className={`results-table__td-score  ${scoreTextColor()}`}>{score}</p>
      <p className="results-table__td-speed  text-color  text-color--blue">
        {speed}
      </p>
      <p className="results-table__td-total-questions">{total}</p>
      <p className="results-table__td-exp-speed">{expSpeed}</p>
      <p className="results-table__td-concept">{concept}</p>
      <p className="results-table__td-date">{date}</p>
      <div className="results-table__td-absent">
        <input
          className="results-table__td-checkbox-input  visually-hidden"
          type="checkbox"
          id={`absent-checkbox-${index}`}
          onChange={() => setIsAbsent((prev) => !prev)}
          checked={isAbsent}
        ></input>
        <label
          className="results-table__td-checkbox-label"
          htmlFor={`absent-checkbox-${index}`}
        ></label>
      </div>
    </div>
  );
}

export default InnerTableRow;
