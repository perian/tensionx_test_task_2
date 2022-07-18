import './inner-table.scss';

function InnerTable() {
  return (
    <section className="results">
      <div className="results__title">
        <p className="results__text">
          Student: <b>Nicole Kidman</b>
        </p>
        <p className="results__text">
          Id: <b>7512552212</b>
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
          <div className="results-table__tr">
            <p className="results-table__td-number">1</p>
            <p className="results-table__td-test-label">
              Finding Averages 1 to 400
            </p>
            <p className="results-table__td-score">350</p>
            <p className="results-table__td-speed">1h 12m 41s</p>
            <p className="results-table__td-total-questions">400</p>
            <p className="results-table__td-exp-speed">01h 00m 00s</p>
            <p className="results-table__td-concept">Multiplication</p>
            <p className="results-table__td-date">APR 30 2021</p>
            <div className="results-table__td-absent">
              <input className="results-table__chekbox" type="checkbox"></input>
            </div>
          </div>
        </div>
      </div>

      <hr className="results__devider"></hr>
    </section>
  );
}

export default InnerTable;
