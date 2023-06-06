export function Complete() {
  return (
    <div className="bg-gradient-to-b from-green-600 via-green-400 to-green-700 drop-shadow-md w-fit px-2 rounded-lg outline outline-1 outline-green-800">
      <div>
        <p className="p-0">Completed</p>
      </div>
    </div>
  );
}

export function InProgress() {
  return (
    <div className="bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-600 drop-shadow-lg w-fit px-2 rounded-lg outline outline-1 outline-yellow-800">
      <div>
        <p className="p-0">In progress</p>
      </div>
    </div>
  );
}

export function InComplete() {
  return (
    <div className="bg-gradient-to-b from-red-600 via-red-400 to-red-700 drop-shadow-lg w-fit px-2 rounded-lg outline outline-1 outline-red-800">
      <div>
        <p className="p-0">Incomplete</p>
      </div>
    </div>
  );
}
