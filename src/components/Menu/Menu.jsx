import menu_Img_1 from "../../assets/menu/menu_1.jpg"
import menu_Img_2 from "../../assets/menu/menu_2.jpg"
import menu_Img_3 from "../../assets/menu/menu_3.jpg"
import menu_Img_4 from "../../assets/menu/menu_4.jpg"
import menu_Img_5 from "../../assets/menu/menu_5.jpg"
import menu_Img_6 from "../../assets/menu/menu_6.jpg"
import './menu.css'
import { BiLeaf } from 'react-icons/bi';

const Menu = () => {
  const menuImg = [
    menu_Img_1,
    menu_Img_2,
    menu_Img_3,
    menu_Img_4,
    menu_Img_5,
    menu_Img_6
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 md:max-w-[80%] mx-auto">
      {menuImg.map((img, index) => (
        <div className="relative zoom icon_bg border-2 overflow-hidden" key={index}>
          <div>

          <img
            className="w-full h-full "
            src={img}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>
          <div className=" text-center flex justify-center items-center">

          <div className=" absolute top-[50px] left-[100px] text-4xl text-white">
            <div className="border-4 border-white border-opacity-40 rounded-full">
              <div id="icon_bg" className=" bg-[#6046b6] h-24 w-24 rounded-full">
                <div className="absolute top-[35px] left-[33px]  ">
                <BiLeaf id="icon"></BiLeaf>
                </div>
              </div>
            </div>
            <h1 className="cursor-pointer hover:text-[#ffe745]">Pizza</h1>
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