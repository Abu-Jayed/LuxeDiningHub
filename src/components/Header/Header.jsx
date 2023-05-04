import React from "react";
import { useNavigation } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-72 md:mt-0">
      <img
        className="relative"
        src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/622b2a4012adfa5120f0b0fa_Hero%20Bg.png"
        alt=""
      />

      <h1 className="absolute top-[384px] md:top-44 w-48 md:w-[610px] md:h-[370] text-black font-bold md:ml-28 md:text-8xl text-2xl">
        THE FINEST QUALITY NATRULE FOOD.
      </h1>

      <p className="absolute md:w-[550px] text-sm top-[473px] w-[285px] md:font-semibold md:top-[560px] md:left-[110px] md:text-xl md:mt-2 ">
      Our commitment to exceptional service and quality ingredients will make your visit an unforgettable one.Exquisite Dining Experience: Our Restaurant's Target to Delight Your Taste Buds and Satisfy Your Cravings
      </p>

      <img
        className="md:left-[420px] w-7 md:w-[70px] rotate md:top-[480px] top-320 left-36 absolute"
        src="https://chef-hero-src.netlify.app/img_2/leaf.png"
        alt=""
      />

      <img
        className="md:left-[60px] w-6 md:w-20 rotate md:top-[100px] top-308 left-10 absolute"
        src="https://chef-hero-src.netlify.app/img_2/leaf.png"
        alt=""
      />
    </div>
  );
};

export default Header;
