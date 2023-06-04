import { useParams } from 'react-router-dom';
import { portfolio } from '/src/data/portfolioData.jsx'; // Import the portfolio data directly
import { SpecificData } from '../../../components/Specific';

const data = portfolio;

export function SpecificProject() {
  const { id } = useParams();

  return (
    <div className="w-full flex flex-col m-auto">
      <div className="m-auto text-center border-b-2 border-slate-400 w-4/5 lg:max-w-6xl pb-1">
        <h2 className="">Project</h2>
      </div>
      <div className="m-auto text-center pt-2">
        <h4>{data[id].title}</h4>
      </div>
      <div>
        <div className="w-full m-auto">
          <SpecificData data={data[id]} />
        </div>
      </div>
    </div>
  );
}
