import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiAccessibility } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  p-4 bg-[#38393b] bg-opacity-95 text-white md:text-left text-center  ff">
      <div className=" footer_container grid grid-cols-11 justify-around gap-5 w-[95%] mx-auto pt-10 pb-5  ">
        <div className=" col-span-3  ">
          <h1 className="text-3xl pb-9 font-semibold">What We Offer</h1>
          <ul className="grid grid-cols-2 gap-3 ">
            <li className="tracking-wider ">Pizzas</li>
            <li className="tracking-wider ">Burgers</li>
            <li className="tracking-wider ">Salads</li>
            <li className="tracking-wider ">Drinks</li>
            <li className="tracking-wider ">Seafood</li>
            <li className="tracking-wider ">Drinks</li>
          </ul>
        </div>

        <div className=" col-span-3  ">
          <h1 className="text-3xl pb-9 font-semibold">What We Offer</h1>
          <ul className="grid grid-cols-2 gap-3  ">
            <li className="tracking-wider ">About US</li>
            <li className="tracking-wider ">FAQ</li>
            <li className="tracking-wider ">Latest News</li>
            <li className="tracking-wider ">Shop</li>
            <li className="tracking-wider ">Our Menu</li>
            <li className="tracking-wider ">Contact Us</li>
          </ul>
        </div>

        <div className=" col-span-5  ">
          <h1 className="text-3xl pb-9 font-semibold">Newsletter</h1>
          <div className="flex">
            <input
              style={{ fontFamily: "'Poppins', sans-serif" }}
              className=" placeholder:text-slate-500 block bg-white w-[400px] h-[50px] border border-slate-300 rounded-l-md py-2 pl-4 pr-3 mb-4 shadow-sm focus:outline-none focus:border-sky-500 focus:border  focus:ring-1 cta_input "
              placeholder="Just add your email"
              type="text"
              name="search"
            />
            <button className="rounded-r-md px-5 h-[50px] bg-[#ffe745] text-[#151515] font-semibold hover:bg-[#2d2c2a] hover:text-[#ffd51a] hover:font-bold  duration-500 transition   ">Submit</button>
          </div>
        </div>
      </div>
      <hr className="opacity-30 my-8" />

      <div className=" grid grid-cols-12 items-center ">
        <div className=" col-span-3  ">
          <h1 className="text-4xl cursor-pointer">LuxeDiningHub</h1>
        </div>

        <div className="col-span-1 " >
        <div className=" flex items-center ">
          <FaYoutube className="w-14 h-10" ></FaYoutube>
          <p className=" text-3xl ff ">14k+</p>
        </div>
        </div>

        <div className="col-span-3">
        <div className=" text-2xl flex items-center gap-1 ">
        <FaPhone></FaPhone>
          +880 1406 199 567
        </div>
        </div>

        <div className="col-span-3 ">
        <div className=" flex text-[22px] gap-2 items-center">
          <FaMailBulk></FaMailBulk>
          mdabujayed2006@gmail.com
        </div>
        </div>

        <div className="col-span-2">

        <div className=" flex justify-around">
          <a
            href="https://www.instagram.com/luxedininghub/?hl=en"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <FaFacebook className="w-10 h-10" ></FaFacebook>
          </a>
          <a
            href="https://www.instagram.com/luxedininghub/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="w-10 h-10"></FaInstagram>
          </a>
          <a
            href="https://www.instagram.com/luxedininghub/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="w-10 h-10"></FaLinkedin>
          </a>
          <a
            href="https://www.instagram.com/luxedininghub/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="w-10 h-10"></FaTwitter>
          </a>
          </div>
        </div>
          
      </div>

      <hr className="opacity-30 my-8  " />

      <div className="flex items-center justify-between px-10">
        <h1>514 S. Magnolia St. Orlando, FL 32806</h1>
        <h1>© 2023. All Rights Reserved. Design by AJ</h1>
      </div>
    </footer>
  );
};

export default Footer;
