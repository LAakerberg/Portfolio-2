import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <div className="flex">
        <div className="m-auto">
          <h2>Welcome to Onedesign </h2>
        </div>
      </div>
      <div className="flex flex-col pt-6 w-5/6 m-auto">
        <div className="flex-initial w-4/5 border border-slate-600 bg-sky-800 text-white m-auto p-2">
          <p className="whitespace-pre-line">
            Onedesign is a freelancer company that&#39;s can help you or your
            company to get started on the web. Together can we find the best
            design and solutions that&#39;s fits for you.
          </p>
          <p>
            We help prvate persons and small company's to get there first
            website or upgrade an existing site.
          </p>
          <p className="">
            Yo can find more about Onedesign on our{' '}
            <Link
              to="/about"
              className="font-bold underline underline-offset-2"
            >
              About page
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
