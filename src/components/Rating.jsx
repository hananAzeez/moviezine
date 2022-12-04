import starRating from "../images/rating.png";

const Rating = () => {
  return (
    <div className="flex items-center justify-start gap-6 mb-6 ">
      <img src={starRating} alt="start rating" className="w-20" />
      <p className="text-[#b6b7b9] text-lg">180k voters</p>
    </div>
  );
};

export default Rating;
