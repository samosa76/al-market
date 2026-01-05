import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/Login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
