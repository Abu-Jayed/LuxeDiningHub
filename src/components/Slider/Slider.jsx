import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Marquee from "react-fast-marquee";
import "./Slider.css";
import Navbar from "../Shared/Navbar";

const Slider = () => {
  const images = [
    "https://assets.website-files.com/6230285868f0fb5be2ef42be/6234268ea897414790643e14_Blog%20Image5.png",

    "https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/625fe53ff747636a76639765_service1.png",

    "https://assets.website-files.com/6230285868f0fb5be2ef42be/6231d1734dfaca4f598962cc_Blog%20Image3.png",
  ];

  return (
    <div className="max-w-xs md:max-w-none">
      <div className="hover:shadow-md shadow-sm  border-red-300 mt-10 mb-20 bg-orange-00  w-[380px] md:w-[90%] md:mx-auto grid md:grid-cols-2 justify-between items-center ">
        <div className="w-[400px] md:w-[550px]">
          <Fade>
            <div className="each-slide">
              <div>
                <img className="ml-10 md:ml-0 w-[500px] md:w-[550px]" src={images[0]} />
              </div>
            </div>
            <div className="each-slide">
              <div className="w-[500px]">
                <img className="ml-10 md:ml-0 w-[500px] lg:w-[550px] h-[332px]" src={images[1]} />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img className="ml-10 md:ml-0 w-[500px] lg:w-[550px]" src={images[2]} />
              </div>
            </div>
          </Fade>
        </div>

        <div>
          <h1 className="text-3xl  md:text-6xl font-bold">
            We are a mexican restaurant makes delicious.
          </h1>
          <p className="w-80 lg:w-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit tempus id
            phasellus massa faucibus lectus in sapien ornare et leo egestas
            blandit amet nunc pharetra vitae id mattis ac sed.
          </p>
          <div>
            <Link>
              <button className=" border-2 hover:bg-yellow-500 hover:translate-x-1 hover:translate-y-1 hover:border-t-4 hover:border-l-4 hover:shadow-2xl transform btn bg-yellow-500 mb-5">
                About Us
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>


      <Marquee speed={120} className="bg-yellow-400 lg:h-48 lg:text-6xl text-5xl  font-bold ml-8 h-36 lg:ml-0 lg:rounded-none rounded-lg  ">
        I can be a React component,{" "}
        <img
          className="rotate"
          src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/622c3bff414f267643d6fa83_Ticker1.png"
          alt=""
        />{" "}
        multiple React{" "}
        <img
          className="rotate"
          src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/622c3bff122fb63e435f4bff_Ticker2.png"
          alt=""
        />{" "}
        components, or just some text.
      </Marquee>
    </div>
  );
};

export default Slider;
