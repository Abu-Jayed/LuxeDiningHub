import React from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

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
    <div>
      <div className="w-[350px] mb-9 mx-auto h-[550px] bg-black border-4 border-red-700 ">
        <LazyLoad height={300} offset={300} threshold={.95} onContentVisible={() => {console.log('loaded!')}}>
          <img
            className="mb-10 border-2 border-black rounded-lg"
            src={img}
            alt=""
          />
        </LazyLoad>

        <div className=" text-yellow-500 gap-3  border-4 border-purple-700 bg-yellow-50">
          <p className="text-4xl text-yellow-400">{chef_name}</p>
          <p>{year_of_experience}</p>
          <p>{number_of_recipe}</p>
          <p>{number_of_likes}</p>
        </div>
        <Link to={`/chef/${id}`} className="btn btn-primary">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
