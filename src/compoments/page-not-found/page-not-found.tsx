import { Link } from 'react-router-dom';
import { AppRoutes } from '../utils/consts';
import './page-not-found.scss';

function PageNotFound(): JSX.Element {
  return (
    <div className="page-not-found">
      <h1>404 Page not found</h1>
      <Link to={AppRoutes.Main} about=".">
        Return to the main page
      </Link>
    </div>
  );
}

export default PageNotFound;
