import React from 'react';
import home from '../assets/icon/logoHome.svg';
import user from '../assets/icon/user-profile-account-person-svgrepo-com.svg';
import board from '../assets/icon/clipboard-1-svgrepo-com.svg';
import caseUser from '../assets/icon/case-svgrepo-com.svg';
import contact from '../assets/icon/contact-us-svgrepo-com.svg';

//link
import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/20 h-20 backdrop-blur-2*1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center '>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
          >
            <img className='w-8 cursor-pointer ' src={home} alt='home' />
          </Link>

          <Link to='about' activeClass='active' smooth={true} spy={true}>
            <img className='w-7 cursor-pointer ' src={user} alt='' />
          </Link>

          <Link to='services' activeClass='active' smooth={true} spy={true}>
            <img className='w-7 cursor-pointer' src={board} alt='' />
          </Link>

          <Link to='work' activeClass='active' smooth={true} spy={true}>
            <img className='w-7 cursor-pointer ' src={caseUser} alt='' />
          </Link>

          <Link to='contact' activeClass='active' smooth={true} spy={true}>
            <img className='w-7 cursor-pointer ' src={contact} alt='' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
