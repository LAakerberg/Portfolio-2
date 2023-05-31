import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        {/* Height should be in 220 px normally */}
        <div className="flex flex-row h-52">
          <div className="flex-1 flex flex-col m-0 justify-center items-center">
            <h1 className="logo_type uppercase">Onedesign</h1>
            <h4 className="logo-memo">Only one design needed</h4>
          </div>

          <div className="flex-0 md:flex-1"></div>
        </div>
        {/* No changes to hamburger className */}
        <button className="hamburger" onClick={toggleMenu}>
          <i className="menuIcon material-icons">
            {isMenuOpen ? 'close' : 'menu'}
          </i>
        </button>
        <div className={`nav-menu menu ${isMenuOpen ? 'showMenu' : ''}`}>
          <nav className="nav_link text-3xl">
            <ul>
              <li className="menuItem">
                <Link to="/">Home</Link>
              </li>
              <li className="menuItem">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="menuItem">
                <Link to="/project">Project</Link>
              </li>
              <li className="menuItem">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
