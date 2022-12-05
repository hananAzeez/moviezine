import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { useState } from "react";

const Rating = ({ voteCount, rating }) => {
  // const [fullStar, setFullStar] = useState(0);
  // const [halfStar, setHalfStar] = useState(0);

  const starRating = (rating) => {
    let movieRating = rating;
    let ogRating = rating + "";
    ogRating[2] && ogRating[2] <= 5
      ? (movieRating = Math.floor(movieRating))
      : (movieRating = Math.ceil(movieRating));
    const fullStar = Math.floor(movieRating / 2);
    movieRating = movieRating - fullStar * 2;
    const halfStar = movieRating / 1;

    // setFullStar(fullStarD);
    // setHalfStar(halfStarD);
    return { fullStar, halfStar };
  };

  // const fullStarDisplay = () => {
  //   const { fullStar } = starRating(rating);
  //   // console.log("fullStar", fs);
  //   // for (let i = 0; i <= fullStar; i++) {
  //   //   return <BsStarFill />;
  //   // }
  // };
  const { fullStar, halfStar } = starRating(rating);
  return (
    <div className="flex items-center justify-start gap-6 mb-6 ">
      {/* <img src={starRating} alt="start rating" className="w-20" /> */}
      {/* {fullStarDisplay()} */}
      <div className="flex gap-1">
        {Array.apply(null, { length: fullStar }).map((e, i) => (
          <BsStarFill key={i} />
        ))}
        {Array.apply(null, { length: halfStar }).map((e, i) => (
          <BsStarHalf key={i} />
        ))}
      </div>
      <p className="text-[#b6b7b9] text-lg">{voteCount} voters</p>
    </div>
  );
};

export default Rating;
