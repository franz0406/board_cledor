import { Route, Routes } from 'react-router-dom';
import { Home, Form, Board } from './pages/Pages';
import Style from './Style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/board" element={<Board />} />
    </Routes>    
  );
}

export default App;
