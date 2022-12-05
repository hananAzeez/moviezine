import { useState } from "react";

//components
import GridMovieItem from "../GridMovieItem";
import spotlightImg from "../../images/spotlight.png";
import { useFetch } from "../../hooks/useFetch";

const MovieGrid = () => {
  // const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState("popular");
  const { data, isPending, error } = useFetch(currentPage);
  console.log(data);

  return (
    <div className="container">
      <div className="spotlightTitle flex justify-between items-center border-b border-[rgba(255,255,255,0.1)] pb-7">
        <div className="flex items-center gap-4">
          <img src={spotlightImg} alt="" className="w-16" />
          <h1 className="text-4xl">Spotlight This month</h1>
        </div>
        <ul className="flex gap-6 cursor-pointer">
          <li
            onClick={() => setCurrentPage("latest")}
            className={
              currentPage === "latest" && "border-b-2 border-[#eb315a] "
            }
          >
            Latest
          </li>
          <li
            onClick={() => setCurrentPage("top-rated")}
            className={
              currentPage === "top-rated" && "border-b-2 border-[#eb315a]"
            }
          >
            Top Rated
          </li>
          <li
            onClick={() => setCurrentPage("popular")}
            className={
              currentPage === "popular" && "border-b-2 border-[#eb315a]"
            }
          >
            Popular
          </li>
          <li
            onClick={() => setCurrentPage("upcoming")}
            className={
              currentPage === "upcoming" && "border-b-2 border-[#eb315a]"
            }
          >
            Coming Soon
          </li>
        </ul>
      </div>
      <div className="mt-14 flex flex-wrap overflow-auto gap-8 mx-10 ">
        {error && <p>{error}</p>}
        {data &&
          data.map((movie) => <GridMovieItem {...movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default MovieGrid;
