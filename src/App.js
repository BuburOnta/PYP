// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import Beranda from './pages/Beranda';
import Profile from './pages/Profile';
import FloNews from './pages/floNews';
import FloVest from './pages/floVest';
import TCommerce from './pages/tCommerce';

import './css/font.css';
import './App.css';
import './css/Home/Navbar.css';
import './css/Home/Content.css';
import './css/Home/Section-1.css';
import './css/Home/Section-2.css';
import './css/Home/Footer.css';

import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/react-fontawesome";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Beranda />} />
    <Route path="profile" element={<Profile />} />
    <Route path="tCommerce" element={<TCommerce />} />
    <Route path="floVest" element={<FloVest />} />
    <Route path="floNews" element={<FloNews />} />
  </Routes>
  );
}

export default App;
