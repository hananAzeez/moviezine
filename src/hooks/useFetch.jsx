import { useState, useEffect } from "react";
import axios from "axios";

//99b56e9a2f47c290ca963bb2cb145576
export const useFetch = (page = "latest") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getPage = (page) => {
      switch (page) {
        case "latest":
          return "https://api.themoviedb.org/3/movie/now_playing?api_key=99b56e9a2f47c290ca963bb2cb145576&language=en-US&page=1";
        case "top-rated":
          return "https://api.themoviedb.org/3/movie/top_rated?api_key=99b56e9a2f47c290ca963bb2cb145576&language=en-US&page=1";
        case "popular":
          return "https://api.themoviedb.org/3/movie/popular?api_key=99b56e9a2f47c290ca963bb2cb145576&language=en-US&page=1";
        case "upcoming":
          return "https://api.themoviedb.org/3/movie/upcoming?api_key=99b56e9a2f47c290ca963bb2cb145576&language=en-US&page=1";
      }
    };
    const fetchData = async () => {
      setIsPending(true);
      try {
        await axios
          .get(getPage(page), { signal: controller.signal })
          .then((res) => setData(res.data.results));
      } catch (err) {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [page]);
  return { data, isPending, error };
};
