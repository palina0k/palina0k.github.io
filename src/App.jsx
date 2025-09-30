import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Coding from './components/Coding';
import StudioArt from './components/StudioArt';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

export default function App() {
  return (
    <div className='content'>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical" element={<Coding />} />
        <Route path="/studio-art" element={<StudioArt />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
