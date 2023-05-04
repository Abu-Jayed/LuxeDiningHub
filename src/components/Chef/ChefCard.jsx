import React from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link, useNavigation } from "react-router-dom";
import pan from "../../assets/icons8-pan-60.png";

const ChefCard = ({ chef }) => {
  const navigatation = useNavigation()
  if(navigatation.state === 'loading'){
    return <div
    className="  mx-auto ml-[46%] mt-[16%] radial-progress bg-primary text-primary-content border-4 border-primary h-32 w-32"
    style={{ "--value": 70 }}
  >
    Loading 70%
  </div>
  }
  const {
    id,
    img,
    chef_name,
    year_of_experience,
    number_of_recipe,
    number_of_likes,
  } = chef;
  // console.log(id);
  return (
    <div className="mb-24">
      <div className="w-[320px] mx-auto shadow-md hover:shadow-2xl h-[490px] rounded-xl bg-black bg-opacity-[0.87]">
        <LazyLoad
          height={300}
          offset={300}
          threshold={0.95}
          onContentVisible={() => {
            console.log("loaded!");
          }}
        >
          <img
            className="rounded-b-2xl w-80 border-2 border-black rounded-xl"
            src={img}
            alt=""
          />
        </LazyLoad>

        <div className="mb-2 mt-5 w-[90%] mx-auto text-yellow-500 gap-3  border-2 bg-yellow bg-opacity-50 border-yellow-600 rounded-lg p-2 ">
          <p className="text-4xl font-bold  mb-3">{chef_name}</p>
          <div className="text-orange-400 font-semibold text-lg flex items-center justify-between">
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
        <div className=" bg-gray-600 bg-opacity-[0.16] rounded-xl pb-3">
          <Link
            to={`/chef/${id}`}
            className=" btn text-gray-100 font-semibold bg-yellow-500 mt-1 ml-20  hover:bg-yellow-400 hover:text-gray-50"
          >
            View Recipe&nbsp;&nbsp; <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
