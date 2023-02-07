import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PopupPage from './Pages/PopupPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/popup" element={<PopupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
