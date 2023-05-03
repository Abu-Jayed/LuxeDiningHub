import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { FaInfo } from "react-icons/fa";

const SingleChef = () => {
  const data = useLoaderData();
  const [btnDisable1, setBtnDisable1] = useState(false);
  const [btnDisable2, setBtnDisable2] = useState(false);
  const [btnDisable3, setBtnDisable3] = useState(false);
  const disableBtn1 = `${btnDisable1 ? "btn-disabled" : ""}`;
  const disableBtn2 = `${btnDisable2 ? "btn-disabled" : ""}`;
  const disableBtn3 = `${btnDisable3 ? "btn-disabled" : ""}`;
  const disable1 = () => {
    toast.success("Added to you favourite page");
    setBtnDisable1(true);
  };
  const disable2 = () => {
    toast.success("Added to you favourite page");
    setBtnDisable2(true);
  };
  const disable3 = () => {
    toast.success("Added to you favourite page");
    setBtnDisable3(true);
  };

  const {
    id,
    chef_name,
    cooking_methods,
    img,
    ingredients,
    number_of_likes,
    number_of_recipe,
    recipe_names,
    short_bio,
    year_of_experience,
    ingredients2,
    ingredients3,
    rating,
    recipe_img1,
    recipe_img2,
    recipe_img3,
  } = data;
  console.log(data);
  return (
    <div>
      <Navbar></Navbar>

      <div className=" flex justify-center items-center gap-5 mx-auto mt-20 bg-opacity-50 bg-red-50 w-[95%] py-6 rounded-xl">
        <div className="rounded-lg ">
          <div className="grid grid-cols-2 w-[520px] mb-9 mx-auto shadow-md hover:shadow-2xl h-[400px] bg-black rounded-xl">
            <div>
              <img
                className="rounded-b-2xl mb-3 w-80 mx-auto border-2 border-black rounded-xl"
                src={img}
                alt=""
              />
              <p className="ml-2 text-4xl text-yellow-500">{chef_name}</p>
              <p className="ml-2 text-red-700 text-xl">
                {year_of_experience} years of experience
              </p>
            </div>
            <div className="p-5 text-yellow-500 gap-3  bg-yellow-50 rounded-lg">
              <p className="text-black">
                <span className="font-bold">Bio:</span> {short_bio}
              </p>
              <div className="flex gap-5 ml-3 font-bold text-red-600 mt-2">
                <p>Total recepy: {number_of_recipe}</p>
                <p>Like: {number_of_likes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* tabular */}
        <div className=" hover:shadow-2xl rounded-xl overflow-x-auto">
          <table className="table w-full">
            {/* head*/}
            <thead>
              <tr>
                {/* <th className="font-bold text-lg">no:</th> */}
                <th className="font-bold text-lg">recipy</th>
                <th className="font-bold text-lg">ingredients</th>
                <th className="font-bold text-lg">cooking_methods</th>
                <th className="font-bold text-lg">add</th>
                <th className="font-bold text-lg">Rating</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                {/* <th>1</th> */}
                <td className="text-2xl font-semibold bg-orange-50 rounded-2xl  ">
                  <div className="bg-orange-200 py-10 px-1 bg-opacity-70 rounded-xl">{recipe_names[0]}</div>
                </td>
                <td>
                  <ol className="ml-5 list-disc">
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                    <li>{ingredients[4]}</li>
                  </ol>
                </td>
                <td>
                  <ul>
                    <li>{cooking_methods[0]} </li>
                    <li>{cooking_methods[2]} </li>
                    <li>{cooking_methods[3]} </li>
                  </ul>
                </td>
                <td>
                  <button
                    onClick={disable1}
                    className={`btn-warning btn ${disableBtn1}`}
                  >
                    Favarite
                  </button>
                </td>
                <td>{rating[2]}</td>
              </tr>
              {/* row 2 */}
              <tr className="active">
                {/* <th>2</th> */}
                {/* <td>{recipe_names[1]}</td> */}
                <td className="text-2xl font-semibold ">
                  <div className="bg-orange-200 py-10 px-1 bg-opacity-70 rounded-xl">{recipe_names[1]}</div>
                </td>
                <td>
                  <ol className="list-disc">
                    <li>{ingredients2[0]}</li>
                    <li>{ingredients2[1]}</li>
                    <li>{ingredients2[2]}</li>
                    <li>{ingredients2[3]}</li>
                    <li>{ingredients2[4]}</li>
                  </ol>{" "}
                </td>
                <td>
                  <ul>
                    <li>{cooking_methods[0]} </li>
                    <li>{cooking_methods[1]} </li>
                    <li>{cooking_methods[2]} </li>
                  </ul>
                </td>
                <td>
                  <button
                    onClick={disable2}
                    className={`btn btn-warning ${disableBtn2}`}
                  >
                    Favarite
                  </button>
                </td>
                <td>{rating[1]}</td>
              </tr>
              {/* row 3 */}
              <tr>
                {/* <th>3</th> */}
                <td className="text-2xl font-semibold bg-orange-50 rounded-2xl  ">
                  <div className="bg-orange-200 py-10 px-1 bg-opacity-70 rounded-xl">{recipe_names[2]}</div>
                </td>
                <td>
                  <ol className="list-disc">
                    <li>{ingredients3[0]}</li>
                    <li>{ingredients3[1]}</li>
                    <li>{ingredients3[2]}</li>
                    <li>{ingredients3[3]}</li>
                    <li>{ingredients3[4]}</li>
                  </ol>
                </td>
                <td>
                  <ol>
                    <li>{cooking_methods[1]}</li>
                    <li>{cooking_methods[4]}</li>
                    <li>{cooking_methods[3]}</li>
                  </ol>
                </td>
                <td>
                  <button
                    onClick={disable3}
                    className={`btn btn-warning ${disableBtn3}`}
                  >
                    Favarite
                  </button>
                </td>
                <td>{rating[0]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Toaster></Toaster>
      </div>
      <div className="mt-16">
        <div>
          <h1 className="text-center text-5xl font-bold">
            {chef_name}'s Famous Recipe_
          </h1>
          {/* slider start  */}

          <div className="hover:shadow-xl  border-red-300 md:mt-10 mb-20 md:w-[70%] mx-auto">
            <div className="w-96  md:w-[1000px]">
              <Fade>
                <div className="p-10 each-slide">
                  <div className="w-10">
                    <img className=" rounded-lg" src={recipe_img1} />
                  </div>
                  <div className="my-auto">
                    <h1 className="text-2xl lg:text-7xl bg-orange-50 w-[444px] mx-auto text-center py-28 font-bold text-yellow-700 rounded-3xl">{recipe_names[0]}</h1>
                  </div>
                </div>
                <div className="p-10 each-slide">
                  <div className="w-10">
                    <img className=" rounded-lg" src={recipe_img2} />
                  </div>
                  <div className="my-auto">
                    <h1 className="text-2xl lg:text-7xl bg-orange-50 w-[444px] mx-auto text-center py-28 font-bold text-yellow-700 rounded-3xl">{recipe_names[1]}</h1>
                  </div>
                </div>
                <div className="p-10 each-slide">
                  <div className="w-10">
                    <img
                      className=" rounded-lg"
                      src={recipe_img3}
                      alt="img not found"
                    />
                  </div>
                  <div className="my-auto">
                    <h1 className="text-2xl lg:text-7xl bg-orange-50 w-[444px] mx-auto text-center py-28 font-bold text-yellow-700 rounded-3xl">{recipe_names[2]}</h1>
                  </div>
                </div>
              </Fade>
            </div>
          </div>

          {/* slider end */}
        </div>
      </div>
      <div className="mt-16">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SingleChef;
