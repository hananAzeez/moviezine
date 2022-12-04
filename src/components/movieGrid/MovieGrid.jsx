import GridMovieItem from "../GridMovieItem";

const MovieGrid = () => {
  return (
    <div>
      <div className="spotlightTitle flex justify-between items-center border-b border-[rgba(255,255,255,0.1)] pb-10">
        <h1 className="text-3xl">Spotlight This month</h1>
        <ul className="flex gap-6">
          <li>Latest</li>
          <li>Coming Soon</li>
          <li>Top Rated</li>
          <li>Recently Released</li>
        </ul>
      </div>
      <div className="mt-14">
        <GridMovieItem />
      </div>
    </div>
  );
};

export default MovieGrid;
