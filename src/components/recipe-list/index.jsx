import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const RecipeItem = ({ item }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="Recipe Item" className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {item?.title}
        </h3>
        <div className="flex">
          {[...Array(5)].map((_, index) => {
            index += 1;
            return (
              <FaStar
                key={index}
                className={`cursor-pointer text-xl ${index <= (hover || rating) ? "text-yellow-400" : ""}`}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
              />
            );
          })}
        </div>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
