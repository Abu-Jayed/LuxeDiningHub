import React from "react";
import { FaBolt } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div>
        <h1 className="text-yellow-500 font-semibold text-center text-6xl">
          Our Service's
        </h1>
        <p className="w-[900px] text-center mx-auto font-semibold text-gray-600 tracking-widest ">
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

      <div className="w-[1111px] mx-auto rounded-lg grid grid-cols-4 gap-4">
        <div className="bg-green-50 w-56 rounded-xl mt-4 mb-5">
          <img
            className="ml-10 mt-4 rounded-xl w-32 "
            src="https://chef-hero-src.netlify.app/order/delevery.jpg"
            alt="not found"
          />
          <h1 className="text-red-600 text-center text-2xl">To your house</h1>
          <div className="ml-7 flex items-center ">
            <FaBolt></FaBolt>
            <p className="mb-4">Within 30 minutes</p>
          </div>
        </div>
        <div className="bg-green-50 w-56 rounded-xl mt-4 mb-5">
          <img
            className="ml-10 mt-4 rounded-xl w-32 "
            src="https://chef-hero-src.netlify.app/img/1131009_OQ5CLB0.jpg"
            alt="not found"
          />
          <h1 className="text-red-600 text-center text-2xl">To your house</h1>
          <div className="ml-7 flex items-center ">
            <FaBolt></FaBolt>
            <p className="">Within 30 minutes</p>
          </div>
        </div>
        <div className="bg-green-50 w-56 rounded-xl mt-4 mb-5">
          <img
            className="ml-10 mt-4 rounded-xl w-32 "
            src="https://chef-hero-src.netlify.app/order/hotel.jpg"
            alt="not found"
          />
          <h1 className="text-red-600 text-center text-2xl">To your house</h1>
          <div className="ml-7 flex items-center ">
            <FaBolt></FaBolt>
            <p className="">Within 30 minutes</p>
          </div>
        </div>
        <div className="bg-green-50 w-56 rounded-xl mt-4 mb-5">
          <img
            className="ml-10 mt-4 rounded-xl w-32 "
            src="https://chef-hero-src.netlify.app/order/food.jpg"
            alt="not found"
          />
          <h1 className="text-red-600 text-center text-2xl">To your house</h1>
          <div className="ml-7 flex items-center ">
            <FaBolt></FaBolt>
            <p className="">Within 30 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
