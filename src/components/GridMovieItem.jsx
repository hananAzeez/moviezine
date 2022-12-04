import Rating from "./Rating";

const getPosterUrl = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};
const GridMovieItem = ({ poster_path, title, vote_count }) => {
  return (
    <div className="w-60 flex flex-col">
      <img
        src={getPosterUrl(poster_path)}
        alt="movie image"
        className="shadow-lg rounded-md mb-6"
      />
      <div>
        <h2 className="mb-2 text-2xl">{title}</h2>
        <Rating voteCount={vote_count} />
      </div>
    </div>
  );
};

export default GridMovieItem;
