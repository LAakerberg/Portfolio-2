import rainyDaysImgThumb from '../assets/img/portfolio/Rainydays-onedesign.jpg';
import rainyDaysImgHIgh from '../assets/img/portfolio/Rainydays-high.jpg';
import cmsImgThumb from '../assets/img/portfolio/CMS.jpg';
import cmsImgHigh from '../assets/img/portfolio/CMS-high.jpg';
import onedesignImgThumb from '../assets/img/portfolio//onedesignScreenshotThumbnail.jpg';
import onedesignImgHigh from '../assets/img/portfolio/onedesignScreenshotHigh.jpg';
import oneOnlyBlogThumb from '../assets/img/portfolio/OneOnlyblog.jpg';
import oneOnlyBlogHigh from '../assets/img/portfolio/OneOnlyblog-high.jpg';
import zerBudHigh from '../assets/img/portfolio/zeroBudScreenshotHigh.jpg';
import visionStoreThumb from '../assets/img/portfolio/visionStoreScreenshootThumbnail.jpg';
import visionStoreHigh from '../assets/img/portfolio/visionStoreScreenshootHigh.jpg';
import holidazeImgThumb from '../assets/img/portfolio/holidazeThumbNail.jpg';
import holidazeImgHigh from '../assets/img/portfolio/holidazeScreenshotHigh.jpg';

export const portfolio = [
  {
    id: 0,
    title: 'Cross-course project',
    name: 'Rainydays',
    keywords: [''],
    descriptions: `This was my first bigger project during my studies as a front-end developer.
                        The first edition was only made with HTML & CSS. The site has been developed and there is now
                        some Javascript included in the programming`,
    imgThumb: `${rainyDaysImgThumb}`,
    imgHigh: `${rainyDaysImgHIgh}`,
    url: 'https://incandescent-biscochitos-c68324.netlify.app/',
    urlGithub: 'https://github.com/LAakerberg/cross-course-cms-ca',
    completed: true,
    inProgress: false,
  },
  {
    id: 1,
    title: 'Semester Project 1',
    name: 'Community Science Museum',
    keywords: ['CSM'],
    descriptions: `This was my second project during my studies as a front-end developer.
                        This is a site for CSM were kids, school classes and parents go visit the museum for educations.
                        The site as been built with HTML & CSS`,
    imgThumb: `${cmsImgThumb}`,
    imgHigh: `${cmsImgHigh}`,
    url: 'https://dazzling-cray-677b8f.netlify.app',
    urlGithub: 'https://github.com/LAakerberg/Semester-Project-1',
    completed: true,
    inProgress: false,
  },
  {
    id: 2,
    title: 'Project Exam 1',
    name: 'The one and only blog',
    keywords: ['One and only'],
    descriptions: `This is my third project were we should build an blog and do API request to a backend that's was setup
                        with wordpress. The design is built as a headless.
                        The site is build with HTML, CSS & JavaScript`,
    imgThumb: `${oneOnlyBlogThumb}`,
    imgHigh: `${oneOnlyBlogHigh}`,
    url: 'https://effulgent-crostata-065cc5.netlify.app',
    urlGithub:
      'https://github.com/Noroff-FEU-Assignments/project-exam-1-Nattlegend',
    completed: true,
    inProgress: false,
  },
  {
    id: 3,
    title: 'Portfolio 1 CA',
    name: 'Onedesign Portfolio',
    keywords: ['Onedesign'],
    descriptions: `This is my own portfolio site were you will find all of my completed/on-going and up-coming projects.
                        Here will I try to collect all of my libirayrs.`,
    imgThumb: `${onedesignImgThumb}`,
    imgHigh: `${onedesignImgHigh}`,
    url: '',
    urlGithub: '',
    completed: true,
    inProgress: false,
  },
  {
    id: 4,
    title: 'Semester Project 2',
    name: 'Zero Bud',
    keywords: [''],
    descriptions: `This is an upcoming project.`,
    imgThumb: `${zerBudHigh}`,
    imgHigh: `${zerBudHigh}`,
    url: '',
    urlGithub: 'https://github.com/LAakerberg/semester_project_ca',
    completed: false,
    inProgress: false,
  },
  {
    id: 5,
    title: 'JavaScript Frameworks CA',
    name: 'Vision Store',
    keywords: [''],
    descriptions: `This is an upcoming project.`,
    imgThumb: `${visionStoreThumb}`,
    imgHigh: `${visionStoreHigh}`,
    url: 'https://meek-pika-e025e2.netlify.app/',
    urlGithub: '',
    completed: false,
    inProgress: true,
  },
  {
    id: 6,
    title: 'Project Exam 2',
    name: 'Holidaze',
    keywords: [''],
    descriptions: `This is an upcoming project.`,
    imgThumb: `${holidazeImgThumb}`,
    imgHigh: `${holidazeImgHigh}`,
    url: 'https://holidaze-summer.netlify.app/',
    urlGithub: 'https://github.com/LAakerberg/Holidaze-project-CA',
    completed: true,
    inProgress: false,
  },
  {
    id: 7,
    title: 'Portfolio 2',
    name: 'Onedesign Portfolio 2',
    keywords: ['Onedesign', 'Portfolio'],
    descriptions: `Refactoring my old Portfolio site from regular HTML, CSS & Vanilla JavaScript to now include Vite.js as bundler and a dev server with React.js library, added TailwindCSS as a CSS Framework. `,
    imgThumb: `${rainyDaysImgThumb}`,
    imgHigh: `${rainyDaysImgThumb}`,
    url: '',
    urlGithub: '',
    completed: false,
    inProgress: true,
  },
];
