import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import PageNotFound from '../page-not-found/page-not-found';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
