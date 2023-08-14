import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { BiAccessibility } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  p-4 bg-[#38393b] bg-opacity-95 text-white md:text-left text-center gap-3 ff">

      <div className="footer_container grid grid-cols-3 ">

        <div className="border-2">
          <h1 className=" text-4xl">What We Offer</h1>
          <ul className="grid grid-cols-2 ">
            <li className=" ">Pizzas</li>
            <li className=" ">Burgers</li>
            <li className=" ">Salads</li>
            <li className=" ">Drinks</li>
            <li className=" ">Seafood</li>
            <li className=" ">Drinks</li>
          </ul>
        </div>

        <div className="border-2">
          <h1>What We Offer</h1>
          <ul className="grid grid-cols-2 ">
            <li className=" ">Pizzas</li>
            <li className=" ">Burgers</li>
            <li className=" ">Salads</li>
            <li className=" ">Drinks</li>
            <li className=" ">Seafood</li>
            <li className=" ">Drinks</li>
          </ul>
        </div>

        

        <div className="border-2">
          <h1>Newsletter</h1>
          <div>
          <input style={{ fontFamily: "'Poppins', sans-serif" }} className=" placeholder:text-slate-500 block bg-white w-[400px] h-[50px] border border-slate-300 rounded-md py-2 pl-4 pr-3 mb-4 shadow-sm focus:outline-none focus:border-sky-500 focus:border  focus:ring-1 cta_input " placeholder="Just add your email" type="text" name="search"/>
          </div>
        </div>

      </div>
      <hr />

      <div className="flex gap-10">

        <div>
          <h1 className="text-4xl cursor-pointer">LuxeDiningHub</h1>
        </div>

        <div>
          Subscribe
        </div>

        <div>
          +880 1406 199 567
        </div>

        <div>
          mdabujayed2006@gmail.com
        </div>

        <div className="flex">
          <a href="https://www.instagram.com/luxedininghub/?hl=en" target="_blank" rel="noreferrer">
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://www.instagram.com/luxedininghub/?hl=en" target="_blank" rel="noreferrer">
            <FaInstagram></FaInstagram>
          </a>
          <a href="https://www.instagram.com/luxedininghub/?hl=en" target="_blank" rel="noreferrer">
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="https://www.instagram.com/luxedininghub/?hl=en" target="_blank" rel="noreferrer">
            <FaTwitter></FaTwitter>
          </a>
        </div>


      </div>

      <div className="flex items-center justify-between px-10  ">
          <h1>514 S. Magnolia St. Orlando, FL 32806</h1>
          <h1>© 2023. All Rights Reserved. Design by AJ</h1>
        </div>
      
    </footer>
  );
};

export default Footer;
