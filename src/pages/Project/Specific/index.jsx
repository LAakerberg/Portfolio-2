import { useParams } from 'react-router-dom';

export function SpecificProject() {
  const { id } = useParams();
  console.log(id);

  return <div>ID: {id}</div>;
}
