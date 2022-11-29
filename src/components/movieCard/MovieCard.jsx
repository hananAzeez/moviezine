import styles from "./MovieCard.module.css";

const MovieCard = () => {
  return (
    <div className="flex w-3/5 h-4/6 gap-x-12 bg-[#13161f] p-12 mt-64 mx-auto relative rounded-xl">
      <img
        src="https://wallpapercave.com/wp/wp2203791.jpg"
        alt="movie card"
        className="cardImage"
      />
      <img
        src="https://wallpapercave.com/wp/wp2203791.jpg"
        alt="movie card"
        className="absolute bottom-12 left-12 w-2/5 cardImageAbsolute shadow-lg"
      />
      <div className="flex-1">
        <h1 className="font-medium text-3xl mb-3">Blade Runner 2049</h1>
        <p className="mb-6 text-[#b6b7b9] text-lg">180k voters</p>
        <p className="mb-6 text-[#b6b7b9] text-lg leading-10">
          she is a devil princess from the demon world. She grew up sheltered by
          her parents and doesn't really know how to be evil or any of the
          common actions, she is unable to cry due to Keita's accidental first
          wish, despite needed for him to wish for his...
        </p>

        <p>Cast: </p>
      </div>
    </div>
  );
};

export default MovieCard;
