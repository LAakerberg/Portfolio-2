import { Link } from 'react-router-dom';

export function Nav(toggleMenu) {
  const closeMenu = toggleMenu;

  return (
    <nav className="nav_link text-3xl">
      <ul>
        <Link to="/" onClick={closeMenu}>
          <li className="">Home</li>
        </Link>
        <li className="hidden">
          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <Link to="/project" onClick={closeMenu}>
          <li className="">Projects</li>
        </Link>
        <Link to="/about" onClick={closeMenu}>
          <li className="">About</li>
        </Link>
      </ul>
    </nav>
  );
}
