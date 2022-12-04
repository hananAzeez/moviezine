import starRating from "../images/rating.png";

const Rating = ({ voteCount }) => {
  return (
    <div className="flex items-center justify-start gap-6 mb-6 ">
      <img src={starRating} alt="start rating" className="w-20" />
      <p className="text-[#b6b7b9] text-lg">{voteCount} voters</p>
    </div>
  );
};

export default Rating;
