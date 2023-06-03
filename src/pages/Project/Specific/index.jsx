import { useParams } from 'react-router-dom';
import { portfolio } from '/src/data/portfolioData.js'; // Import the portfolio data directly
import { SpecificData } from '../../../components/Specific';

const data = portfolio;

export function SpecificProject() {
  const { id } = useParams();

  return (
    <div className="w-full flex flex-col m-auto">
      <div className="m-auto pt-6 text-center">
        <h3>Portfolio</h3>
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
