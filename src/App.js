import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import Layout from './Component/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<LoginPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
