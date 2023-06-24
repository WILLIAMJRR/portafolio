import home from '../assets/icon/logoHome.svg';
import user from '../assets/icon/user-profile-account-person-svgrepo-com.svg';
import board from '../assets/icon/clipboard-1-svgrepo-com.svg';
import caseUser from '../assets/icon/case-svgrepo-com.svg';
import Whatsapp from '../assets/icon/whatsapp-svgrepo-com.svg';
import contact from '../assets/icon/contact-us-svgrepo-com.svg';

import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="relative h-[2.8rem]">
        <a
          className="absolute bottom-0 right-3 lg:right-14 animate-pulse"
          href="https://wa.me/56962460426"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-10" src={Whatsapp} alt="" />
        </a>
      </div>
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-20 backdrop-blur-2*1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active animate-pulse ' : ''
            }
          >
            <img
              className="w-8 cursor-pointer"
              src={home}
              alt="home"
            />
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'active animate-pulse' : ''
            }
          >
            <img
              className="w-7 cursor-pointer"
              src={user}
              alt=""
            />
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'active animate-pulse' : ''
            }
          >
            <img
              className="w-7 cursor-pointer"
              src={board}
              alt=""
            />
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? 'active animate-pulse' : ''
            }
          >
            <img
              className="w-7 cursor-pointer"
              src={caseUser}
              alt=""
            />
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'active animate-pulse' : ''
            }
          >
            <img
              className="w-7 cursor-pointer"
              src={contact}
              alt=""
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
