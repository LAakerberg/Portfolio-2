import { useState, useEffect } from 'react';

/**
 * Our API hook
 */
export function useApiCall(url, method) {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const accessToken = localStorage.getItem('accessToken');
        const fetchOptions = {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        };

        const response = await fetch(url, fetchOptions);
        const json = await response.json();
        setData(json);
        setResponse(response);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url, method]);
  return { data, response, isLoading, isError };
}

/*
Use this in the function where you need it:
  const { data, isLoading, isError } = useApi(
    'https://jsonplaceholder.typicode.com/todos',
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>Data loaded</div>;
}
*/
