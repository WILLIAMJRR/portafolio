import logo from '../assets/icon/logo.svg';
//icons
import {
  BsFillSunFill,
  BsMoonFill,
  BsCheck,
} from 'react-icons/bs';

const Header = ({ theme, setTheme }) => {
  const handleThemeSwitch = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <header className=" py-4 ">
      <div className="container mx-auto">
        {/* logo */}
        <div className="flex justify-between items-center">
          <a href="">
            <img
              className="w-44"
              src={logo}
              alt="logo william"
            />
          </a>
          <div className="flex items-center justify-evenly w-80">
            <button
              onClick={handleThemeSwitch}
              className="p-4 btn"
            >
              {theme === 'dark' ? (
                <BsMoonFill />
              ) : (
                <BsFillSunFill />
              )}
            </button>
            <button className="btn btn-sm">
              <a href="https://www.linkedin.com/in/william-jose-rodriguez-rojas/"
              target='_blank'
              >
                {' '}
                Work with me
              </a>
            </button>
          </div>
          {/* boton */}
        </div>
      </div>
    </header>
  );
};

export default Header;
