export function SpecificData(data) {
  const project = data.data;
  console.log(project);

  return (
    <div className="flex flex-col bg-slate-300 w-4/5 m-auto p-2 rounded-lg my-8">
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
      <div>Links</div>
      <div>Tags</div>
    </div>
  );
}
