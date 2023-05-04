import React from "react";
import { FaBolt } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div>
        <h1 className="text-yellow-500 font-semibold mt-20 mb-5 text-center text-6xl">
          Our Service's
        </h1>
        <p className="md:w-[900px] w-[300px] text-center mx-auto mb-16 font-semibold text-gray-600 tracking-widest ">
          Our restaurant company is{" "}
          <span className="text-red-300 font-bold">committed</span> to providing{" "}
          <span className="text-red-300 font-bold">exceptional service</span> to
          our customers, offering a diverse menu of{" "}
          <span className="text-black font-extrabold text-lg">
            high-quality
          </span>{" "}
          dishes made with the{" "}
          <span className="text-green-600">freshest ingredients</span>. From our
          attentive waitstaff to our{" "}
          <span className="text-red-300">skilled chefs</span> , we strive to
          exceed your expectations and make your dining experience
          unforgettable.
        </p>
      </div>

      <div className="w-370px mb-28 md:w-[1111px] mx-auto rounded-lg grid md:grid-cols-4 grid-cols-1 md:gap-4 md:ml-44 ml-20 ">
        <div className="bg-green-50 w-64 rounded-xl mt-4 mb-5 h-56 hover:shadow-xl">
          <img
            className="mx-auto h-32 mt-4 rounded-xl w-32 "
            src="https://chef-hero-src.netlify.app/order/delevery.jpg"
            alt="not found"
          />
          <h1 className="text-red-600 text-center text-2xl mt-3">To your house</h1>
          <div className="ml-7 flex items-center ">
            <FaBolt></FaBolt>
            <p className="">Within 30 minutes</p>
          </div>
        </div>
        <div className="bg-green-50 w-64 rounded-xl mt-4 h-56 mb-8 hover:shadow-xl">
          <img
            className="mx-auto h-32 mt-4 rounded-xl w-32 "
            src="https://chef-hero-src.netlify.app/img/1131009_OQ5CLB0.jpg"
            alt="not found"
          />
          <h1 className="text-red-600 text-center text-2xl mt-3"> Experienced Chef</h1>
          <div className="ml-7 flex items-center ">
            <FaBolt></FaBolt>
            <p className="">people with uniqueness</p>
          </div>
        </div>
        <div className="bg-green-50 w-64 rounded-xl mt-4 mb-5 h-56 hover:shadow-xl">
          <img
            className=" mx-auto mt-4 h-32 rounded-xl w-32 "
            src="https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg?w=740&t=st=1683205751~exp=1683206351~hmac=77da87bc7508a7950b463372d3561ae07d77e3c76cb9019ce961496be7948500"
            alt="not found"
          />
          <h1 className="text-red-600 text-center mt-3 text-2xl">Online Support </h1>
          <div className="ml-7 flex items-center ">
            <FaBolt></FaBolt>
            <p className="">24/7 support in any situation</p>
          </div>
        </div>
        <div className="bg-green-50 w-64 rounded-xl mt-4 h-56 mb-5  hover:shadow-xl">
          <img
            className="h-32 mt-4 rounded-xl w-32 mx-auto "
            src="https://chef-hero-src.netlify.app/order/food.jpg"
            alt="not found"
          />
          <h1 className="text-red-600 text-center mt-3 text-2xl">Fresh & Organic</h1>
          <div className="ml-7 flex items-center ">
            <FaBolt></FaBolt>
            <p className="">From self source</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
