import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const SingleChef = () => {
  const data = useLoaderData();
  const [btnDisable1, setBtnDisable1] = useState(false);
  const [btnDisable2, setBtnDisable2] = useState(false);
  const [btnDisable3, setBtnDisable3] = useState(false);
  const disableBtn1 = `${btnDisable1? 'btn-disabled': ''}`
  const disableBtn2 = `${btnDisable2? 'btn-disabled': ''}`
  const disableBtn3 = `${btnDisable3? 'btn-disabled': ''}`
  const disable1 = () => {
    toast.success('Added to you favourite page')
    setBtnDisable1(true);
  };
  const disable2 = () => {
    toast.success('Added to you favourite page')
    setBtnDisable2(true);
  };
  const disable3 = () => {
    toast.success('Added to you favourite page')
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
  } = data;
  console.log(data);
  return (
    <div>
<Navbar></Navbar>

    <div className=" flex gap-10 bg-cyan-200 mx-auto mt-5">
      <div>
        <div className="w-[350px] ml-6 mb-9 mx-auto h-[550px] bg-black border-4 border-red-700 ">
          <img
            className="mb-10 border-2 border-black rounded-lg"
            src={img}
            alt=""
          />
          <div className=" text-yellow-500 gap-3  border-4 border-purple-700 bg-yellow-50">
            <p className="text-4xl text-yellow-400">{chef_name}</p>
            <p>{year_of_experience} years of experience</p>
            <p>Total recepy:{number_of_recipe}</p>
            <p>Like:{number_of_likes}</p>
          </div>
        </div>
      </div>

      {/* tabular */}
      <div className=" overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th className="font-bold text-lg">no:</th>
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
              <th>1</th>
              <td>{recipe_names[0]}</td>
              <td>
                <ul>
                  <li>1.{ingredients[0]}</li>
                  <li>2.{ingredients[1]}</li>
                  <li>3.{ingredients[2]}</li>
                  <li>4.{ingredients[3]}</li>
                  <li>5.{ingredients[4]}</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>{cooking_methods[0]} </li>
                  <li>{cooking_methods[1]} </li>
                  <li>{cooking_methods[2]} </li>
                </ul>
              </td>
              <td><button onClick={disable1} className={`btn-warning btn ${disableBtn1}`}>Favarite</button></td>
              <td>{rating[2]}</td>
            </tr>
            {/* row 2 */}
            <tr className="active">
              <th>2</th>
              <td>{recipe_names[1]}</td>
              <td>
                <ul>
                  <li>1.{ingredients2[0]}</li>
                  <li>2.{ingredients2[1]}</li>
                  <li>3.{ingredients2[2]}</li>
                  <li>4.{ingredients2[3]}</li>
                  <li>5.{ingredients2[4]}</li>
                </ul>{" "}
              </td>
              <td>
                <ul>
                  <li>{cooking_methods[0]} </li>
                  <li>{cooking_methods[1]} </li>
                  <li>{cooking_methods[2]} </li>
                </ul>
              </td>
              <td><button onClick={disable2} className={`btn btn-warning ${disableBtn2}`}>Favarite</button></td>
              <td>{rating[1]}</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>{recipe_names[2]}</td>
              <td>
                <ul>
                  <li>1.{ingredients3[0]}</li>
                  <li>2.{ingredients3[1]}</li>
                  <li>3.{ingredients3[2]}</li>
                  <li>4.{ingredients3[3]}</li>
                  <li>5.{ingredients3[4]}</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>{cooking_methods[1]}</li>
                  <li>{cooking_methods[4]}</li>
                  <li>{cooking_methods[3]}</li>
                </ul>
              </td>
              <td><button onClick={disable3} className={`btn btn-warning ${disableBtn3}`}>Favarite</button></td>
              <td>{rating[0]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Toaster></Toaster>
    </div>
    </div>

  );
};

export default SingleChef;
