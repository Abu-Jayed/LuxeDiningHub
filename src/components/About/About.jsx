import React, { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import CustomersReview from "../CustomersReview/CustomersReview";
import Footer from "../Shared/Footer";

import { Link, NavLink, useNavigate, useNavigation } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const About = () => {
  const [member,setMember] = useState([])
  const navigatation = useNavigation()
  if(navigatation.state === 'loading'){
    console.log('loadin from about page line 13');
  }

  useEffect(()=>{
    fetch('../../../public/member.json')
    .then(res =>res.json())
    .then(data => setMember(data))
  },[])
  return (
    <section>
      <Navbar></Navbar>
      <div>
        <img
          className="relative"
          src="https://chef-hero-src.netlify.app/img_3/about_bg.png"
          alt=""
        />
        <div className="absolute top-[170px] left-[630px]">
          <h1 className=" text-4xl text-yellow-500">About page</h1>
          <p className="absolute font-sebold left-[40px] text-white">
            <NavLink to='/'>
            Home &gt; 
            </NavLink>
            <NavLink to='/about' className='text-warning'>
            About
            </NavLink>
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-6xl text-center  font-bold mt-20">
          High Service for all <br /> customer
        </h1>
        <div className="">
          <p className="w-[900px] ml-80 mt-10">
            At our restaurant, we strive to provide an exceptional dining
            experience that is unmatched in quality and service. Our team of
            dedicated professionals is committed to ensuring that every guest
            receives personalized attention and leaves with a smile."From the
            moment you step in, our warm and welcoming staff will cater to your
            every need, making your visit a memorable one. We offer a range of
            services including catering, private dining, and event hosting,
            ensuring that your special occasions are unforgettable.
          </p>
        </div>
      </div>
      <div className="mt-20 ">
        <img
          className="ml-40"
          src="https://chef-hero-src.netlify.app/img_3/group.png"
          alt=""
        />
        <img
          className="ml-40 relative"
          src="https://chef-hero-src.netlify.app/img_3/bg-yellow.png"
          alt=""
        />
        <div className="absolute grid grid-cols-4 text-4xl text-center top-[1400px] left-[140px] font-bold ">
          <h1>
            30 <br /> Resturents
          </h1>
          <h1>
            12 <br /> Years Experience
          </h1>
          <h1>
            87+ <br /> Menu Dishes
          </h1>
          <h1>
            2K+ <br /> Event Organize
          </h1>
        </div>
      </div>
      <div>
        <h1 className="mt-20 text-5xl text-center">Our Vision & Mission</h1>
        <p className="w-[900px] mx-auto text-center mb-20 mt-5">
          Our mission and vision is to be recognized as a leading culinary
          destination, offering a menu that showcases the finest flavors from
          around the world. We aim to create a warm and welcoming atmosphere
          that fosters community and celebrates the art of dining. By staying
          true to our values of quality, creativity, and hospitality, we hope to
          inspire and delight our guests, one dish at a time.
        </p>
      </div>
      <div className="flex max-w-[90%] mx-auto mb-24">
        <div className="flex flex-col gap-10 justify-center">
          <div className="flex items-center">
            <img
              src="https://chef-hero-src.netlify.app/img_2/burger.png"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-4xl">Delicious Cuisine</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vulputate
                eget et, aliquet libero,
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://chef-hero-src.netlify.app/img_2/truck.png"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-4xl">Fast Delivery</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vulputate
                eget et, aliquet libero,
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="https://chef-hero-src.netlify.app/img_2/hat.png" alt="" />
            <div className="flex flex-col">
              <h1 className="text-4xl">Professional Chef</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vulputate
                eget et, aliquet libero,
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/6231a9ba6f2e1e85035283fa_Video%20Bg.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-5xl">Meet Our Team Members</h1>
        <div>
          <p className="ml-72 mt-5 mb-20 text-center w-[800px]">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Erat aliquam
            amet, cursus tellus non consequat laoreet eget ornare. Tellus
            vulputate tellus a, lobortis et nisl. Quisque vulputate eget et,
            aliquet libero, porttitor luctus placerat. Neque, blandit neque
            proin at ultrices odio.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mx-auto ml-10">
        {
          member.map(person => {
            return <div className="w-[320px] mb-9 mx-auto shadow-md hover:shadow-2xl h-[400px] bg-black rounded-xl" key={person.id}>
              <img className="rounded-b-2xl mb-3 w-80 mx-auto border-2 border-black rounded-xl" src={person.image} alt="" />
              <p className="text-yellow-400 text-4xl ml-8">{person.name}</p>
              <p className="text-yellow-400 ml-8">{person.job_title}</p>
            </div>
          })
        }
      </div>
      <div>
        <h1 className="text-5xl text-center mb-4 mt-24">Review_</h1>
        <CustomersReview></CustomersReview>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default About;
