import { Route, Routes } from 'react-router-dom';
import Table from './container/Table';
import Btn from './components/Btn';
import Write from './components/Write';
import Pager from './components/Pager';
import Home from './pages/Home';
import Form from './pages/Form';
import Style from './Style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>    
  );
}

export default App;
