import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import Layout from './Component/Layout/Layout';
import KoperasiPage from './Seller/Pages/KoperasiPage';
import DashboardPage from './Admin/Pages/DashboardPage';
import ListBarangPage from './Seller/Pages/ListBarangPage';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<LoginPage />} />

          {/* Seller Routes */}
          <Route path='/Koperasi/Home' element={<KoperasiPage />} />
          <Route path='/ListBarang' element={<ListBarangPage />} />

          {/* Admin Routes */}
          <Route path='/Admin/Dashboard' element={<DashboardPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
