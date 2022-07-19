import { Test } from '../types/consts';
import './inner-table.scss';

type InnerTableProps = {
  test: Test,
  index: number,
};

function InnerTableRow({ test, index }: InnerTableProps) {
  const { absent, concept, date, expSpeed, label, score, speed, total } = test;

  return (
    <div className="results-table__tr">
      <p className="results-table__td-number">{index}</p>
      <p className="results-table__td-test-label">{label}</p>
      <p className="results-table__td-score">{score}</p>
      <p className="results-table__td-speed">{speed}</p>
      <p className="results-table__td-total-questions">{total}</p>
      <p className="results-table__td-exp-speed">{expSpeed}</p>
      <p className="results-table__td-concept">{concept}</p>
      <p className="results-table__td-date">{date}</p>
      <label className="results-table__td-absent">
        <input className="results-table__chekbox" type="checkbox"></input>
      </label>
    </div>
  );
}

export default InnerTableRow;
