import ExportCSV from '../export-csv/export-csv';
import MainTable from '../main-table/main-table';
import Search from '../search/search';
import "./main-screen.scss"

function MainScreen() {
  return (
    <div className="wrapper">
      <header className="page-header">
        <div className="main-nav">
          <div className="main-nav__inner-wrap">
            <select
              className="main-nav__schools  select "
              name="schools"
              id="schools-select"
              defaultValue="School 1"
              aria-readonly
            >
              <option value="School 1">School 1</option>
              <option value="School 2">School 2</option>
            </select>
          </div>

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

          <div className="main-nav__user">
            <a className="main-nav__user-avatar" href="#"></a>
            <span className="main-nav__user-menu"></span>
          </div>
        </div>

        <div></div>

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

          <Search />

          <ExportCSV />
        </section>

        <MainTable />
      </main>
    </div>
  );
}

export default MainScreen;
