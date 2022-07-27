import Scores from '../types/consts';
import './export-csv.scss';
const {
  Parser,
  transforms: { flatten },
} = require('json2csv');

type ExportCSVProps = {
  getCheckedStudentsData: () => Scores;
};

function ExportCSV({ getCheckedStudentsData }: ExportCSVProps) {
  const downloadCSV = () => {
    const students = getCheckedStudentsData();
    const fields = [
      'name',
      'id',
      'class',
      'parents.0',
      'parents.1',
      'score',
      'speed',
      'tests.0.label',
      'tests.0.score',
      'tests.0.speed',
      'tests.0.total',
      'tests.0.expSpeed',
      'tests.0.concept',
      'tests.0.date',
      'tests.0.absent',
      'tests.1.label',
      'tests.1.score',
      'tests.1.speed',
      'tests.1.total',
      'tests.1.expSpeed',
      'tests.1.concept',
      'tests.1.date',
      'tests.1.absent',
    ];

    const transforms = [flatten({ objects: true, arrays: true })];
    const json2csvParser = new Parser({ fields, transforms });
    const csv = json2csvParser.parse(students);

    const elem = document.querySelector(
      '.export-field__button'
    ) as HTMLAnchorElement;

    elem!.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  };

  return (
    <div className="export-field__wrap">
      <a
        className="export-field__button"
        href="#"
        download="Students.csv"
        onClick={() => downloadCSV()}
      >
        Export CSV
      </a>
    </div>
  );
}

export default ExportCSV;
