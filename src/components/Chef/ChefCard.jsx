import React from "react";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import pan from "../../assets/icons8-pan-60.png";

const ChefCard = ({ chef }) => {
  const {
    id,
    img,
    chef_name,
    year_of_experience,
    number_of_recipe,
    number_of_likes,
  } = chef;
  console.log(id);
  return (
    <div className="">
      <div className="w-[320px] mb-9 mx-auto shadow-md hover:shadow-2xl h-[490px] bg-black rounded-xl ">
        <LazyLoad
          height={300}
          offset={300}
          threshold={0.95}
          onContentVisible={() => {
            console.log("loaded!");
          }}
        >
          <img
            className="rounded-b-2xl mb-10 w-80 mx-auto border-2 border-black rounded-xl"
            src={img}
            alt=""
          />
        </LazyLoad>

        <div className="mb-2 mt-5 w-[90%] mx-auto text-yellow-500 gap-3  border-2 bg-yellow bg-opacity-50 border-yellow-600 rounded-lg p-2 ">
          <p className="text-4xl text-yellow-400 mb-3">{chef_name}</p>
          <div className="flex items-center justify-between">
            <div>
              <p>{year_of_experience}+ years of exp...</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-6 h-6" src={pan} alt="" />
              <p>{number_of_recipe}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaHeart></FaHeart>
              <p>{number_of_likes}</p>
            </div>
          </div>
        </div>
        <div className="">
          <Link
            to={`/chef/${id}`}
            className="btn bg-orange-400 mt-1 ml-44 hover:bg-orange-500"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
