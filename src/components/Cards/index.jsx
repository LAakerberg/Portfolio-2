import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Cards({ project, showInProgress }) {
  console.log(project);

  Cards.propTypes = {
    project: PropTypes.string.isRequired,
    showInProgress: PropTypes.string.isRequired,
  };

  // Filter the array based on the showInProgress prop
  const filteredProjects = project.filter(
    (pages) => pages.inProgress === showInProgress
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-6 p-4 m-auto">
        {filteredProjects.map((pages) => (
          <div key={pages.id}>
            <Link to={`/project/${pages.id}`}>
              <div className="bg-gradient-to-b from-gray-400 via-zinc-300 to-slate-100 card-bg outline outline-1 outline-slate-500 rounded-lg p-2 h-96 max-w-xs m-auto">
                <div>
                  <h4 className="font-['ComicNeue'] font-bold">
                    {pages.title}
                  </h4>
                </div>
                <div className="h-40">
                  <img
                    src={pages.imgThumb}
                    className="object-cover h-40 w-full"
                  />
                </div>
                <div>
                  <h5 className="font-['Boogaloo']">{pages.name}</h5>
                </div>
                <div>
                  <p>{pages.descriptions.slice(0, 150)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}

        <div></div>
        <div></div>
      </div>
    </>
  );
}
