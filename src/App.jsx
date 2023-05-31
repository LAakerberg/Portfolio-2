import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Layout } from './layout';

export function Main() {
  return (
    <>
      <main>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </>
  );
}
