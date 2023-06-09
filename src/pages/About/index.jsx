import profileImg from '../../assets/img/portfolio/Onedesign-linus.jpg';
import githubImg from '../../assets/icons/GitHub-Mark-32px.png';
import linkedInImg from '../../assets/icons/LI-In-Bug.png';

export function About() {
  return (
    <>
      <div>
        <div className="m-auto text-center border-b-2 border-slate-400 w-4/5 lg:max-w-6xl pb-1">
          <h2 className="">About</h2>
        </div>
      </div>
      <div className="flex flex-col bg-slate-300 w-4/5 lg:max-w-6xl m-auto p-2 rounded-lg my-8 animate-slow">
        <div className="m-auto mt-5">
          <img src={profileImg} className="w-60 object-contain rounded-full" />
        </div>
        <div className="m-auto text-center">
          <div className="mt-5">
            <h3 className="font-bold">Onedesign</h3>
          </div>
          <div className="mt-4 text-left">
            <p className="text-lg font-bold py-2">Welcome to Onedesign.</p>
            <p className="py-2">
              My name is Linus Aakerberg and I'm today finish my study to become
              an front-end developer. This is my portfolio site were all of my
              on-going projects and portfolio will be published as soon as they
              begins and ends. Onedesign was started up as a part of my start-up
              company during my studies and will continue to be my personal
              portfolio/company site.
            </p>
            <div>
              <p className="font-[Boogaloo] text-2xl">Skills</p>
              <ul className="grid grid-rows-2 md:grid-rows-none grid-flow-col justify-start gap-2">
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=css"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=bootstrap"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=tailwindcss"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=wordpress"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=vite"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=xd"
                    alt="html"
                    className="tech-stack_icons"
                  />
                </li>
              </ul>
            </div>
            <div className="pt-2">
              <p className="font-[Boogaloo] text-2xl">Contact</p>
              <p className="py-2">
                Visit my social media if you would like to contact me.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around w-1/2 m-auto py-4">
          <div className="m-auto mt-2 p-2 text-center w-28 hover:bg-slate-400/50 hover:font-bold transition-all rounded-xl hover:text-white border">
            <a
              href="https://github.com/LAakerberg"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubImg} className="github m-auto" />
              View my Github
            </a>
          </div>
          <div className="m-auto mt-2 p-2 text-center w-28 hover:bg-slate-400/50 hover:font-bold transition-all rounded-xl hover:text-white border">
            <a
              href="https://www.linkedin.com/in/linus-%C3%A5kerberg-4126891b1/"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedInImg} className="in m-auto" />
              View my LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
