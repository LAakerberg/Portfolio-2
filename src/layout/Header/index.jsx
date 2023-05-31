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
        <div className="topping">
          <div className="logo">
            <h1 className="logo_type">Onedesign</h1>
            <p className="logo-memo">Only one design needed</p>
          </div>

          <div className="sidemenu"></div>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <i className="menuIcon material-icons">
            {isMenuOpen ? 'close' : 'menu'}
          </i>
        </button>
        <div className={`nav-menu menu ${isMenuOpen ? 'showMenu' : ''}`}>
          <nav>
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
