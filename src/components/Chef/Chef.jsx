import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import Navbar from "../Shared/Navbar";

const Chef = () => {
  const [allChef,setAllChef] = useState([])

  useEffect(()=>{
    fetch('https://hero-chef-server-ajwebdevlopment-gmailcom.vercel.app/allChef')
    .then(res => res.json())
    .then(data => setAllChef(data))
  },[])
  console.log(allChef);
  return (
    <div className="mb-14 mt-28">
      <div className="text-center w-[60%] mx-auto">
        <h1 className="font-bold text-5xl">Member's We Proude Of</h1>
        <p className="mb-10 mt-2">
        Our chef has passion for food and dedication to excellence has earned them a reputation as a <span className="font-semibold">skilled and innovative chef</span>  in the industry.Our menu is crafted with <span className="font-semibold">passion and purpose,</span>  using only the freshest, locally-sourced ingredients
        </p>
      </div>
      <div className='grid md:grid-cols-3'>
        {
          allChef.map(chef => <ChefCard
          key={chef.id}
          chef={chef}
          ></ChefCard>)
        }
      </div>
    </div>
  );
};

export default Chef;
