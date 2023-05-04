import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";

const CustomersReview = () => {
  const images = [
    "https://chef-hero-src.netlify.app/img_2/review_1.png",

    "https://chef-hero-src.netlify.app/img_2/review_2.png",

    "https://assets.website-files.com/6230285868f0fb5be2ef42be/623d607dfcf0c6a8537ebb8c_Team7.png",
  ];
  return (
    <div>
      <div className="">
      <h1 className="mx-auto md:text-5xl font-semibold md:ml-52">What our customers and visitor are saying...</h1>
      </div>
      <div className="hover:shadow-2xl  border-red-300  md:mt-10 mb-20 md:w-[70%] mx-auto">
        <div className="w-96 md:w-[1000px]">
          <Fade>
            <div className="p-10 each-slide">
              <div className="w-10">
                <img className=" rounded-lg" src={images[1]} />
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl">
                  “This restaurant exceeded all my expectations - the food was outstanding and the service was top-notch. Highly recommend! ”
                  <small className="text-2xl">kang the conquror</small>
                </h1>
              </div>
            </div>
            <div className="p-10 each-slide">
              <div className="w-10">
                <img className=" rounded-lg" src={images[0]} />
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl">
                  “The service was exceptional and the atmosphere was cozy and inviting. I will definitely be returning to this restaurant soon! ”
                  <small className="text-2xl">Dan Scout</small>
                </h1>
              </div>
            </div>
            <div className="p-10 each-slide">
              <div className="w-10">
                <img className=" rounded-lg" src={images[2]} />
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl">
                  “The food at this restaurant is absolutely divine - every dish is bursting with flavor and expertly crafted. I cannot recommend it enough!”
                  <small className="text-2xl">Angelena Jole</small>
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
