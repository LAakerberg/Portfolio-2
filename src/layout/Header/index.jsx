import { useState } from 'react';
import { Nav } from '../Navigation/index';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-sky-50/90">
        {/* Height should be in 220 px normally */}
        <div className="flex flex-row h-48">
          <div className="flex-1 flex flex-col m-0 justify-center items-center">
            <h1 className="logo_type uppercase">Onedesign</h1>
            <p className="logo-memo">Only one design needed</p>
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
          <Nav toggleMenu={toggleMenu} />
        </div>
      </header>
    </>
  );
}
