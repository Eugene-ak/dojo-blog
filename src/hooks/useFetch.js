import { useEffect, useState } from "react";

// Custom hook for fetching data
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create new abort controller
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then(res => {
        // Check if response is okay
        if (!res.ok) {
          throw new Error("Could not retrieve data");
        }
        return res.json();
      })
      .then(data => {
        // Set new state of data, isPending and error
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === "AbortError") {
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error }
}
 
export default useFetch;