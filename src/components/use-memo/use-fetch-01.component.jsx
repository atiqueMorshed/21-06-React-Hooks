import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    const getData = async () => {
      try {
        const response = await fetch(url);
        const resData = await response.json();
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
