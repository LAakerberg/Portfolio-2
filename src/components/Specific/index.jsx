import { TbBrowser } from 'react-icons/tb';
import githubImg from '../../assets/icons/GitHub-Mark-32px.png';

export function SpecificData(data) {
  const project = data.data;

  return (
    <div className="flex flex-col bg-slate-100 sm:bg-slate-300 w-4/5 lg:max-w-6xl m-auto p-2 rounded-lg my-2">
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
      <div className="flex flex-col sm:flex-row justify-around w-1/2 m-auto py-4">
        <div className="m-auto mt-2 p-2 text-center w-28 hover:bg-slate-400/50 hover:font-bold transition-all rounded-xl hover:text-white border">
          <a
            href={`${project.urlGithub}`}
            className=""
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubImg} className="github m-auto" />
            Github
          </a>
        </div>
        <div className="m-auto mt-2 p-2 text-center w-28 hover:bg-slate-400/50 hover:font-bold transition-all rounded-xl hover:text-white border">
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
