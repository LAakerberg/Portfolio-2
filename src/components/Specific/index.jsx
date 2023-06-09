import { TbBrowser } from 'react-icons/tb';
import githubImg from '../../assets/icons/GitHub-Mark-32px.png';

export function SpecificData(data) {
  const project = data.data;

  const findMatchingIcons = (techStack) => {
    const icons = techStack.map((tech, index) => {
      const iconUrl = `https://skillicons.dev/icons?i=${tech}`;
      return (
        <div key={index}>
          <img src={iconUrl} alt={tech} className="tech-stack_icons" />
        </div>
      );
    });
    return icons;
  };

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
          <h4 className="font-bold">{project.name}</h4>
        </div>
        <div className="mt-4">
          <p>{project.descriptions}</p>
        </div>
      </div>
      <div className="flex flex-col w-full m-auto p-2 rounded-lg my-2">
        <div className="">
          <p className="font-[Boogaloo] underline underline-offset-4 text-2xl">
            Tech stack
          </p>
        </div>
        <div id="icons" className="">
          <div className="tech-stack m-auto grid grid-cols-3 mobile:grid-cols-5 tablet:grid-cols-7 sm:grid-cols-9 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-16 gap-3 p-2 justify-start w-fit">
            {findMatchingIcons(project.techStack)}
          </div>
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
