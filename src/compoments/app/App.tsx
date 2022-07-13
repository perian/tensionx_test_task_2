import { useState } from 'react';
import './App.scss';

function App() {
  const [isShown, setIsShown] = useState(false);

  const openInnerTable = () => {
    setIsShown(true);
  };

  const closeInnerTable = () => {
    isShown && setIsShown(false);
  };

  return (
    <div className="wrapper">
      <header className="page-header">
        <div className="main-nav">
          <select
            className="select schools"
            name="schools"
            id="schools-select"
            defaultValue="School 1"
            aria-readonly
          >
            <option value="School 1">School 1</option>
            <option value="School 2">School 2</option>
          </select>
          <nav className="main-nav__controls">
            <ul className="main-nav__list">
              <li>
                <a className="main-nav__item" href="#">
                  Analytics
                </a>
              </li>
              <li>
                <a className="main-nav__item" href="#">
                  Gradebooks
                </a>
              </li>
              <li>
                <a className="main-nav__item" href="#">
                  Tests
                </a>
              </li>
              <li>
                <a className="main-nav__item  main-nav__item--active" href="#">
                  Students
                </a>
              </li>
              <li>
                <a className="main-nav__item" href="#">
                  Teachers
                </a>
              </li>
              <li>
                <a className="main-nav__item" href="#">
                  Archive
                </a>
              </li>
            </ul>
          </nav>

          <div className="user">
            <a className="user__avatar"></a>
            <span className="user__menu"></span>
          </div>
        </div>

        <div className="sub-nav">
          <nav>
            <form className="sub-nav__list">
              <select
                className="select  sub-nav__item"
                name="clear-all"
                id="clear-all"
                defaultValue="Show all"
                aria-readonly
              >
                <option value="Show all">Show all</option>
              </select>
              <select
                className="select  sub-nav__item"
                name="all-grades"
                id="all-grades"
                defaultValue="all-grades"
                aria-readonly
              >
                <option value="All grades">All grades</option>
              </select>
              <select
                className="select  sub-nav__item"
                name="all-classes"
                id="all-classes"
                defaultValue="All classes"
                aria-readonly
              >
                <option value="All classes">All classes</option>
              </select>
              <select
                className="select  sub-nav__item"
                name="av.score"
                id="av.score"
                defaultValue="Av.Score"
                aria-readonly
              >
                <option value="Av.Score">Av.Score</option>
              </select>
              <select
                className="select  sub-nav__item"
                name="av.speed"
                id="av.speed"
                defaultValue="Av.Speed"
                aria-readonly
              >
                <option value="Av.Speed">Av.Speed</option>
              </select>
              <select
                className="select  sub-nav__item"
                name="all-classes"
                id="all-classes"
                defaultValue="All Classes"
                aria-readonly
              >
                <option value="All Classes">All Classes</option>
              </select>
              <button
                className="sub-nav__item  sub-nav__item--reset"
                type="reset"
              >
                Clear all
              </button>
            </form>
          </nav>
        </div>
      </header>

      <main>
        <section className="export-field">
          <h1 className="export-field__title">Students</h1>
          <form className="export-field__form">
            <input
              className="export-field__search"
              type="search"
              placeholder="Enter Student Name, Parent or ID here"
            />
          </form>
          <div className="export-field__wrap">
            <button className="export-field__button">Export CSV</button>
          </div>
        </section>

        <section className="score-form">
          <div className="score-table">
            <div className="score-table__thead">
              <div className="score-table__tr">
                <div className="score-table__td-check">
                  <input id="select-all-students" type="checkbox" />
                </div>
                <div className="score-table__td-name">Name</div>
                <div className="score-table__td-id">ID</div>
                <div className="score-table__td-class">Class</div>
                <div className="score-table__td-av-score">Av. Score, %</div>
                <div className="score-table__td-av-speed">Av. Speed</div>
                <div className="score-table__td-parents">Parents</div>
                <div className="score-table__td-actions">Actions</div>
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
                <div
                  className="score-table__td-drop-down"
                  onClick={openInnerTable}
                ></div>
              </div>

              {isShown && (
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
                        <div className="results-table__td-number">#</div>
                        <div className="results-table__td-test-label">
                          Test Label
                        </div>
                        <div className="results-table__td-score">Score</div>
                        <div className="results-table__td-speed">Speed</div>
                        <div className="results-table__td-total-questions">
                          Total Q-ns
                        </div>
                        <div className="results-table__td-exp-speed">
                          Exp. Speed
                        </div>
                        <div className="results-table__td-concept">Concept</div>
                        <div className="results-table__td-date">Date</div>
                        <div className="results-table__td-absent">Absent</div>
                      </div>
                    </div>
                    <div className="results-table__body">
                      <div className="results-table__tr">
                        <div className="results-table__td-number">1</div>
                        <div className="results-table__td-test-label">
                          Finding Averages 1 to 400
                        </div>
                        <div className="results-table__td-score">350</div>
                        <div className="results-table__td-speed">
                          1h 12m 41s
                        </div>
                        <div className="results-table__td-total-questions">
                          400
                        </div>
                        <div className="results-table__td-exp-speed">
                          01h 00m 00s
                        </div>
                        <div className="results-table__td-concept">
                          Multiplication
                        </div>
                        <div className="results-table__td-date">
                          APR 30 2021
                        </div>
                        <div className="results-table__td-absent">
                          <input
                            className="results-table"
                            type="checkbox"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="results__devider"></hr>
                </section>
              )}
            </div>
          </div>

          <div className="pagination">
            <div className="pagination__rows-per-page">
              <p className="pagination__text">Rows per page:</p>
              <select
                className="select pagination__select"
                name="pages"
                id="pagination__rows-per-page"
                defaultValue="10"
                aria-readonly
              >
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>

            <p className="pagination__text">21-30 of 100</p>

            <div className="pagination__pages-controls">
              <span className="pagination__arrow  pagination__arrow--left"></span>
              <span className="pagination__arrow  pagination__arrow--right"></span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
