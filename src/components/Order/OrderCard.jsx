import React, { useEffect, useState } from "react";

const OrderCard = ({ chef }) => {
  const { id, recipe_img1, recipe_img2, recipe_img3, recipe_names,detail,detail2,detail3, } = chef;
  const [recepiTitle,setRecepiTitle] = useState([])

  useEffect(()=>{
    fetch('../../../public/onlineOrder.json')
    .then(res =>res.json())
    .then(data => setRecepiTitle(data))
  },[])

  // console.log(recepiTitle[0]?.detail);
  // console.log(recepiTitle[1]?.detail);
  for(let i=1; i <18; i++){
  // console.log(recepiTitle[i]?.detail);
    var Hidetails = recepiTitle[i]?.detail;
  }
  


  return (
    <div className="">
      <div className="">
        <div className="mt-20  grid grid-cols-3 max-w-[1400px] ml-24">
          <div className="border-t-2  card w-96 bg-base-100 shadow-xl">
            <figure className="border-2 border-gray-100 h-52">
              <img src={recipe_img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe_names[0]}</h2>
              <p>
                {detail}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card border-t-2 w-96 bg-base-100 shadow-xl">
            <figure className="border-2 border-gray-100 h-52">
              <img src={recipe_img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe_names[1]}</h2>
              <p>{detail2}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card border-t-2 w-96 bg-base-100 shadow-xl">
            <figure className="border-2 border-gray-100 h-52">
              <img src={recipe_img3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe_names[2]}</h2>
              <p>{detail3}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
