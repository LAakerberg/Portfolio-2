import { TbBrowser } from 'react-icons/tb';

export function SpecificData(data) {
  const project = data.data;
  console.log(project);

  return (
    <div className="flex flex-col bg-slate-300 w-4/5 lg:max-w-6xl m-auto p-2 rounded-lg my-8 ma">
      <div className="m-auto">
        <img
          src={project.imgHigh}
          className="object-contain rounded-lg m-auto"
        />
      </div>
      <div className="m-auto text-center">
        <div className="mt-5">
          <h5 className="font-bold">{project.name}</h5>
        </div>
        <div className="mt-4">
          <p>{project.descriptions}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-1/2 m-auto">
        <div className="m-2 p-2 text-center w-28 hover:bg-slate-400/50 hover:font-bold transition-all rounded-xl hover:text-white">
          <a
            href={`${project.urlGithub}`}
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../../src/assets/icons/GitHub-Mark-32px.png"
              className="github m-auto"
            />
            Github
          </a>
        </div>
        <div className="m-2 p-2 text-center w-28 hover:bg-slate-400/50 hover:font-bold transition-all rounded-xl hover:text-white">
          <a
            href={`${project.url}`}
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <TbBrowser className="icon m-auto text-black" />
            Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
