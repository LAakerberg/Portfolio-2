import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="nav_link text-3xl">
      <ul>
        <li className="">
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="">
          <Link to="/project">Project</Link>
        </li>
        <li className="">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
