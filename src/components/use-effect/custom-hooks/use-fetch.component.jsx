import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    console.log("useFetch: Rendering!");
    setState({ data: null, loading: true, error: null });

    const timeout = (time) =>
      new Promise((resolve) => setTimeout(resolve, time));

    const getData = async () => {
      try {
        const response = await fetch(url);
        await timeout(1000);
        const resData = await response.text();
        setState({ data: resData, loading: false, error: null });
      } catch (e) {
        setState({ data: null, loading: false, error: e });
      }
    };
    getData();
  }, [url]);

  return state;
};

export default useFetch;
