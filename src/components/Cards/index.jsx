import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Complete, InProgress, InComplete } from '../Badges';

export function Cards({ project, showInProgress }) {
  Cards.propTypes = {
    project: PropTypes.string.isRequired,
    showInProgress: PropTypes.string.isRequired,
  };

  console.log(project[0].completed);
  console.log(showInProgress);

  // Filter the array based on the showInProgress prop
  const filteredProjects = project.filter(
    (pages) => pages.inProgress === showInProgress
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-10 p-4 m-auto">
        {filteredProjects.map((portfolio) => (
          <div key={portfolio.id}>
            <Link to={`/project/${portfolio.id}`}>
              <div className="bg-gradient-to-b from-gray-300 via-zinc-300 to-slate-100 outline outline-1 outline-slate-500 rounded-lg p-2 max-w-xs m-auto shadow-md shadow-gray-600/60 hover:shadow-xl hover:shadow-gray-700/100 hover:-translate-y-4 transition-all">
                <div>
                  <h4 className="font-['ComicNeue'] font-bold">
                    {portfolio.title}
                  </h4>
                </div>
                <div className="h-40">
                  <img
                    src={portfolio.imgThumb}
                    className="object-cover h-40 w-full rounded-lg"
                  />
                </div>
                <div>
                  <h5 className="font-['Boogaloo']">{portfolio.name}</h5>
                </div>
                <div className="h-auto tablet:h-28">
                  <p className="break-words">
                    {portfolio.descriptions.length > 150
                      ? `${portfolio.descriptions.slice(0, 152)}...`
                      : portfolio.descriptions}
                  </p>
                </div>
                <div>
                  <div className="grid grid-cols-1 mobile:grid-cols-2 gap-4 w-fit">
                    {portfolio.completed ? <Complete /> : <InComplete />}
                    {portfolio.inProgress ? <InProgress /> : null}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
