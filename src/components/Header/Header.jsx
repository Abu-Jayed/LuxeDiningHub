import React from "react";
import { useNavigation } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="hero-section">
      <h1 className="hero_title">
        THE FINEST QUALITY NATRULE FOOD.
      </h1>
<div className="text_align">
      <p className="head_paragraph mb-8 md:mb-0 md:ml-4">
      Our commitment to exceptional service and quality ingredients will make your visit an unforgettable one.Exquisite Dining Experience: Our Restaurant's Target to Delight Your Taste Buds and Satisfy Your Cravings
      </p>
</div>

      <img
        className="md:left-[420px] w-7 md:w-[70px] rotate md:top-[480px] top-[400px] left-[330px] absolute"
        src="https://chef-hero-src.netlify.app/img_2/leaf.png"
        alt=""
      />
      <button className="ml-[125px] md:ml-4 main_button ">
      See our Menus
      </button>
    </div>
  );
};

export default Header;
