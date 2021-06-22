import { useEffect, useState, useRef } from "react";

const useFetch = (url) => {
  const isCurrent = useRef(true); // Does not try to setState when component is unmounted
  const [state, setState] = useState({ data: null, loading: true });

  const latestData = useRef(); // stores the latest click url data
  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: null, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        latestData.current = y;
        setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: latestData.current, loading: false });
          }
        }, 2000);
      });
  }, [url, setState]);

  return state;
};

export default useFetch;
