import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";

const CustomersReview = () => {
  const images = [
    "https://assets.website-files.com/6230285868f0fb5be2ef42be/623d60afa817df436f415875_Team1.png",

    "https://assets.website-files.com/6230285868f0fb5be2ef42be/623d605f9163fb8b16edd942_Team3.png",

    "https://assets.website-files.com/6230285868f0fb5be2ef42be/623d607dfcf0c6a8537ebb8c_Team7.png",
  ];
  return (
    <div>
      <div className="hover:shadow-md  border-red-300 mt-10 mb-20 md:w-[90%] mx-auto">
        <div className="w-96 md:w-[1000px]">
          <Fade>
            <div className="p-10 each-slide">
              <div className="w-10">
                <img className=" rounded-lg" src={images[1]} />
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl">
                  “Thanks to vinovest I can now invest in something i am
                  passionate ”
                  <small className="text-2xl">Makenna Weinstein</small>
                </h1>
              </div>
            </div>
            <div className="p-10 each-slide">
              <div className="w-10">
                <img className=" rounded-lg" src={images[0]} />
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl">
                  “Thanks to vinovest I can now invest in something i am
                  passionate ”
                  <small className="text-2xl">Makenna Weinstein</small>
                </h1>
              </div>
            </div>
            <div className="p-10 each-slide">
              <div className="w-10">
                <img className=" rounded-lg" src={images[2]} />
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl">
                  “Thanks to vinovest I can now invest in something i am
                  passionate ”
                  <small className="text-2xl">Makenna Weinstein</small>
                </h1>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CustomersReview;
