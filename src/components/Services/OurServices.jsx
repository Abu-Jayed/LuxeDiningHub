import React from 'react';
import './OurServices.css'
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import chefImg from "../../assets/1131009_OQ5CLB0.jpg";

const OurServices = () => {
  const [selectedTitle, setSelectedTitle] = useState(0);

  const handleTitleClick = (index) => {
    setSelectedTitle(index);
  };

  const titles = [
    'Quality & Quantity Top Notch',
    'Fresh & Healthy Food',
    'Satisfying Taste',
    'On Demand Food Services',
    'Green & Safety Ingredient',
  ];

  const images = [
    "https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/625fe53ff747636a76639765_service1.png",
    'https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/625fe42911ff72cf6fc3e85f_service2.png',
    'https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/625fe427f771dca9285c6375_service3.png',
    'https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/625fe429a4752be57b9d5f30_service4.png',
    'https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/625fe427814e32fa8fd17363_service5.png',
  ];

  return (
    <div>
    <div className='md:pt-[125px] md:pb-[125px] pt-[80px] pb-[80px] bg-[#1b1e1f]'>
      <div className='container'>
      <div className='service-section-title'>
        <h2 className='service-heading font-extrabold'>Our service means Satisfy.</h2>
        <p className='service-paragraph'>
        Located in downtown Burlington near the shores of Lake Champlain, we give you space.
        </p>
        <section className='md:flex items-center'>
          <div className='md:w-[50%]'>
            <img src={images[selectedTitle]} alt="" />
          </div>
          <div className=' md:w-[50%]'>
          {titles.map((title, index) => (
          <h1
            key={index}
            onClick={() => handleTitleClick(index)}
            style={{ color: selectedTitle === index ? 'white' : 'gray' }}
            className={`cursor-pointer tab ${selectedTitle === index ? 'text-white': ''}`}
          >
            {title}
          </h1>
        ))}
          </div>
        </section>
      </div>
      </div>
    </div>
    <Marquee
        speed={100}
        className="bg-[#ffca0e] lg:h-48 lg:text-6xl text-5xl  font-extrabold ml-8 h-36 lg:ml-0 lg:rounded-none rounded-lg shadow-md  uppercase text-black "
      >
        self service{" "}
        <img
          className="rotate"
          src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/622c3bff414f267643d6fa83_Ticker1.png"
          alt=""
        />
        best food
        <img
          className="rotate"
          src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/622c3bff122fb63e435f4bff_Ticker2.png"
          alt=""
        />
        wrold wide
        <img
          className="rounded-2xl rotate w-14 mt-3 h-14"
          src={chefImg}
          alt=""
        />
        Best chef
        <img
          className="rotate"
          src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/622c3bff122fb63e435f4bff_Ticker2.png"
          alt=""
        />
      </Marquee>
    </div>
  );
};

export default OurServices;