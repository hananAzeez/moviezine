import Rating from "./Rating";
import poster from "../images/joker.jpg";

const GridMovieItem = () => {
  return (
    <div className="w-60 flex flex-col">
      <img
        src={poster}
        alt="movie image"
        className="shadow-lg rounded-md mb-6"
      />
      <div>
        <h2 className="mb-2 text-2xl">Joker</h2>
        <Rating />
      </div>
    </div>
  );
};

export default GridMovieItem;
