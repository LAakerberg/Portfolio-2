import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header>
        <div>
          <h1 className="text-4xl border border-red-700">Header</h1>
          <h2>Home</h2>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
