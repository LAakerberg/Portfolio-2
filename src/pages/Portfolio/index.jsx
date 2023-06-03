import { Cards } from '../../components/Cards';
import { portfolio } from '/src/data/portfolioData'; // Import the portfolio data directly

export function Portfolio() {
  // Uses the imported portfolio data instead of making an API call
  const data = portfolio;
  const isLoading = false; // Since you're not making an API call, set isLoading to false
  const isError = false; // Since you're not making an API call, set isError to false

  /* console.log(data); */

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="flex flex-col pt-6">
        <div>
          <h3 className="pb-4">Portfolio</h3>
        </div>
        <div>
          <Cards project={data} showInProgress={false} />
        </div>
      </div>
    </>
  );
}
