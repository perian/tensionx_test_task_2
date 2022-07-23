import Scores from '../types/consts';
import './export-csv.scss';

type ExportCSVProps = {
  getCheckedStudentsData: () => Scores;
}

function ExportCSV({getCheckedStudentsData}: ExportCSVProps) {

  return (
    <div className="export-field__wrap">
      <a className="export-field__button" href="#" onClick={() => getCheckedStudentsData()}>
        Export CSV
      </a>
    </div>
  );
}

export default ExportCSV;
