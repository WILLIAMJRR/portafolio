import React, { useState } from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  //theme state
  const [theme, setTheme] = useState('dark');
  return (
    <div className='dark_mode bg-no-repeat bg-cover overflow-hidden bg-sitedark'>
      <Header key={'dark'} theme={theme} setTheme={setTheme} />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
