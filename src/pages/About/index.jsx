import profileImg from '../../assets/img/portfolio/Onedesign-linus.jpg';

export function About() {
  return (
    <>
      <div className="flex pt-6">
        <div>
          <p>Hello, this is about me and my business</p>
          <img src={profileImg} alt="name" />
        </div>
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"></div>
      </div>
    </>
  );
}
