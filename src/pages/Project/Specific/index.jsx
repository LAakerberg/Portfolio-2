import { useParams, useNavigate } from 'react-router-dom';
import { portfolio } from '/src/data/portfolioData.jsx'; // Import the portfolio data directly
import { SpecificData } from '../../../components/Specific';
import { HiArrowSmLeft } from 'react-icons/hi';

const data = portfolio;

export function SpecificProject() {
  const { id } = useParams(); // Get the ID from the url params

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step in the browser history
  };

  return (
    <div className="w-full flex flex-col m-auto">
      <div className="m-auto text-center border-b-2 border-slate-400 w-4/5 lg:max-w-6xl pb-1">
        <div className="absolute left-1 mobile:static float-left m-auto text-center flex bg-slate-400/40 hover:bg-slate-400 backdrop-blur-md border border-black rounded-lg">
          <button onClick={goBack}>
            <HiArrowSmLeft className="icon" />
          </button>
        </div>
        <div>
          <h2 className="">Project</h2>
        </div>
      </div>

      <div className="m-auto text-center pt-2">
        <h4>{data[id].title}</h4>
      </div>
      <div>
        <div className="w-full m-auto animate-fade-in">
          <SpecificData data={data[id]} />
        </div>
      </div>
    </div>
  );
}
