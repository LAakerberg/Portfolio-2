import { Link } from 'react-router-dom';

export function Nav(toggleMenu) {
  const closeMenu = toggleMenu;

  return (
    <nav className="nav_link text-3xl">
      <ul>
        <li className="">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="">
          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
        </li>
        <li className="">
          <Link to="/project" onClick={closeMenu}>
            Project
          </Link>
        </li>
        <li className="">
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
