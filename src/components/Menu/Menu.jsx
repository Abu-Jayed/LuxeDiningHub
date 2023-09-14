import menu_Img_1 from "../../assets/menu/menu_1.jpg";
import menu_Img_2 from "../../assets/menu/menu_2.jpg";
import menu_Img_3 from "../../assets/menu/menu_3.jpg";
import menu_Img_4 from "../../assets/menu/menu_4.jpg";
import menu_Img_5 from "../../assets/menu/menu_5.jpg";
import menu_Img_6 from "../../assets/menu/menu_6.jpg";
import "./menu.css";
import { BiLeaf } from "react-icons/bi"
import { CiPizza } from "react-icons/ci";
import { GiHamburger, GiFishCooked,GiCannedFish } from "react-icons/gi";
import { IoIceCreamOutline } from "react-icons/io5";
import {CiCoffeeCup} from "react-icons/ci"

const Menu = () => {
  const menuImg = [
    {
      img: menu_Img_1,
      name: "Salads",
      icon: <BiLeaf id="icon"></BiLeaf>
    },
    {
      img: menu_Img_2,
      name: "Pizzas",
      icon: <CiPizza id="icon"></CiPizza>
    },
    {
      img: menu_Img_3,
      name: "Burgers",
      icon: <GiHamburger id="icon"></GiHamburger>
    },
    {
      img: menu_Img_4,
      name: "Desserts",
      icon: <IoIceCreamOutline id="icon"></IoIceCreamOutline>
    },
    {
      img: menu_Img_5,
      name: "Drinks",
      icon: <CiCoffeeCup id="icon"></CiCoffeeCup>
    },
    {
      img: menu_Img_6,
      name: "Seafood",
      icon: <GiCannedFish id="icon"></GiCannedFish>
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 md:max-w-[80%] mx-auto">
      {menuImg.map((data, index) => (
        <div
          className="relative zoom icon_bg border-2 overflow-hidden"
          key={index}
        >
          <div>
            <img className="w-full h-full " src={data.img} alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>
            <div className=" text-center flex justify-center items-center">
              <div className=" absolute top-[50px] left-[110px] text-4xl text-white">
                <div className="rounded-full border-[5px] border-white border-opacity-40 p-[2px]">
                  <div
                    id="icon_bg"
                    className=" bg-[#6046b6] h-24 w-24 rounded-full  flex items-center justify-center   "
                  >
                    <div className="text-[44px] ">
                      {data.icon}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute text-white top-[68%] ml-[4%] " >
                <h1 className=" cursor-pointer text-4xl hover:text-[#ffe745]">
                  {data.name}
                </h1>
              </div>
            </div>
            {/* You can experiment with different blending modes here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
