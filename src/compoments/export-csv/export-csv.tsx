import Scores from '../types/consts';
import './export-csv.scss';

type ExportCSVProps = {
  getCheckedStudentsData: () => Scores;
};

function ExportCSV({ getCheckedStudentsData }: ExportCSVProps) {
  const downloadCSV = () => {
    function pivot(arr: any) {
      const map = new Map();

      function setValue(a: object[], path: string[], val: any) {
        if (Object(val) !== val) {
          // primitive value
          const pathStr = path.join('.');
          const i = (map.has(pathStr) ? map : map.set(pathStr, map.size)).get(
            pathStr
          );
          a[i] = val;
        } else {
          for (let key in val) {
            setValue(a, key == '0' ? path : path.concat(key), val[key]);
          }
        }
        return a;
      }

      const result = arr.map((obj: any) => setValue([], [], obj));
      return [[...map.keys()], ...result];
    }

    function toCsv(arr: any[]) {
      return arr
        .map((row: any[]) =>
          row
            .map((val: number) => (isNaN(val) ? JSON.stringify(val) : +val))
            .join(',')
        )
        .join('\n');
    }

    const csv = toCsv(pivot(getCheckedStudentsData()));

    const elem = document.querySelector('.export-field__button') as HTMLAnchorElement;
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
