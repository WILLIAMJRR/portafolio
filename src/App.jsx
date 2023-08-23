import React, { useState, useEffect, lazy, Suspense } from 'react';
// components

import Header from './components/Header';
import Nav from './components/Nav';

import { Navigate, Route, Routes } from 'react-router-dom';
import Banner from './page/Banner';
// import About from './page/About';
// import Services from './page/Services';
// import Work from './page/Work';
// import Contact from './page/Contact';

const About = lazy(() => import('./page/About'));

const Services = lazy(() => import('./page/Services'));

const Work = lazy(() => import('./page/Work'));

const Contact = lazy(() => import('./page/Contact'));

function App() {
  //theme state
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);
  return (
    <div
      className={`bg-no-repeat bg-cover overflow-hidden dark:bg-slate-100 dark:text-black`}
    >
      <Header theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Banner />} />

        <Route
          path="/about"
          element={
            <Suspense fallback={null}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="/services"
          element={
            <Suspense fallback={null}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/work"
          element={
            <Suspense fallback={null}>
              <Work />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      <Nav />
    </div>
  );
}

export default App;
