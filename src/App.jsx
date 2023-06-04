import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Layout } from './layout';
import { Portfolio } from './pages/Portfolio';
import { Project } from './pages/Project';
import { SpecificProject } from './pages/Project/Specific';

export function Main() {
  return (
    <>
      <main className=" bg-slate-100 px-2 py-8">
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
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<SpecificProject />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </>
  );
}
