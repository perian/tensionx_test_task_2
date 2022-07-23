import { Tests } from '../types/consts';
import InnerTableRow from './inner-table-row';
import './inner-table.scss';

type InnerTableProps = {
  tests: Tests;
  name: string;
  id: number;
};

function InnerTable({ tests, id, name }: InnerTableProps) {
  return (
    <section className="results">
      <div className="results__title">
        <p className="results__text">
          Student: <b>{name}</b>
        </p>
        <p className="results__text">
          Id: <b>{id}</b>
        </p>
      </div>

      <div className="results__selectors-wrap">
        <div className="results__selectors">
          <select
            className="results__selector"
            name="all concepts"
            id="all concepts"
            defaultValue="all concepts"
            aria-readonly
          >
            <option value="All concepts">All concepts</option>
          </select>

          <select
            className="results__selector"
            name="all score"
            id="all score"
            defaultValue="all score"
            aria-readonly
          >
            <option value="All score">All score</option>
          </select>

          <select
            className="results__selector"
            name="all speed"
            id="all speed"
            defaultValue="all speed"
            aria-readonly
          >
            <option value="All speed">All speed</option>
          </select>

          <label className="results__date-range">
            <input className="results__date-input" type="date" />
          </label>

          <button className="results__reset" type="reset"></button>
        </div>

        <select
          className="results__selector  results__selector--filter"
          name="filter"
          id="filter"
          defaultValue="filter"
          aria-readonly
        >
          <option value="filter">Filter by</option>
        </select>
      </div>

      <hr className="results__devider"></hr>

      <div>
        <div className="results__score-definition">
          <p className="results__score-title">Score</p>
          <p className="results__score-text  results__score-text--blue">
            90%+ accuracy
          </p>
          <p className="results__score-text  results__score-text--green">
            80 - 89% accuracy
          </p>
          <p className="results__score-text  results__score-text--yellow">
            50 - 79% accuracy
          </p>
          <p className="results__score-text  results__score-text--red">
            Below 50% accuracy
          </p>
        </div>

        <div className="results__score-definition">
          <p className="results__score-title">Speed</p>
          <p className="results__score-text  results__score-text--blue">
            Above expected
          </p>
          <p className="results__score-text  results__score-text--green">
            As expected
          </p>
          <p className="results__score-text  results__score-text--red">
            Below expected
          </p>
        </div>
      </div>

      <div className="results-table">
        <div className="results-table__thead">
          <div className="results-table__tr">
            <p className="results-table__td">#</p>
            <p className="results-table__td">Test Label</p>
            <p className="results-table__td">Score</p>
            <p className="results-table__td">Speed</p>
            <p className="results-table__td">Total Q-ns</p>
            <p className="results-table__td">Exp. Speed</p>
            <p className="results-table__td">Concept</p>
            <p className="results-table__td">Date</p>
            <p className="results-table__td">Absent</p>
          </div>
        </div>

        <div className="results-table__tbody">
          {tests.map((test, index) => (
            <InnerTableRow key={index + test.label} test={test} index={index} />
          ))}
        </div>
      </div>

      <hr className="results__devider"></hr>

      <div className="results__average">
        <p className="results__average-title">Average</p>
        <p className="results__average-score">96%</p>
        <p className="results__average-speed">Above Expected</p>
      </div>
    </section>
  );
}

export default InnerTable;
