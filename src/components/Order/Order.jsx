import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { FaBolt } from "react-icons/fa";
import Services from "../Shared/Services";
import Footer from "../Shared/Footer";
import { NavLink } from "react-router-dom";
import OrderCard from "./OrderCard";

const Order = () => {
  const [allChef, setAllChef] = useState([]);

  useEffect(() => {
    fetch(
      "https://hero-chef-server-ajwebdevlopment-gmailcom.vercel.app/allChef"
    )
      .then((res) => res.json())
      .then((data) => setAllChef(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <img
          className="relative"
          src="https://chef-hero-src.netlify.app/img_3/about_bg.png"
          alt=""
        />
        <div className="absolute top-[170px] left-[630px]">
          <h1 className=" text-4xl text-yellow-500">Online Order</h1>
          <p className="absolute font-sebold left-[40px] text-white">
            <NavLink to="/">Home &gt;</NavLink>
            <NavLink to="/about" className="text-warning">
              Order
            </NavLink>
          </p>
        </div>
      </div>

      <div className="mt-32">
        {allChef.map((chef) => (
          <OrderCard key={chef.id} chef={chef}></OrderCard>
        ))}
      </div>

      <div className="mt-24">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Order;
