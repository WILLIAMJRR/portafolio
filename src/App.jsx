import React, { useState, useEffect } from 'react';
// components

import Header from './components/Header';
import Nav from './components/Nav';

import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Banner from './page/Banner';
import About from './page/About';
import Services from './page/Services';
import Work from './page/Work';
import Contact from './page/Contact';
// import Carrusel from './components/Carrusel';

function App() {
  //theme state
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');

    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light');

    }
  }, [theme]);
  return (
    <div
      className={`bg-no-repeat bg-cover overflow-hidden dark:bg-slate-400 dark:text-black`}
    >
      <Header theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Banner />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Nav />
    </div>
  );
}

export default App;
