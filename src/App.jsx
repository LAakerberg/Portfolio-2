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

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}
