import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import Navbar from "../Shared/Navbar";

const Chef = () => {
  const [allChef,setAllChef] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/allChef')
    .then(res => res.json())
    .then(data => setAllChef(data))
  },[])
  console.log(allChef);
  return (
    <div className="mb-14">
      <div className="text-center w-[60%] mx-auto">
        <h1 className="text-5xl">Member's We Proude Of</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat aliquam
          amet, cursus tellus non consequat laoreet eget ornare. Tellus
          vulputate tellus a, lobortis et nisl. Quisque vulputate eget et,
          aliquet libero, porttitor luctus placerat. Neque, blandit neque proin
          at ultrices odio.
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
