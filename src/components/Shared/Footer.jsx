import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <section className="p-4 bg-black bg-opacity-95 grid lg:grid-cols-4 grid-cols-1 text-white md:text-left text-center gap-3">
      <div>
        <div className="flex items-center md:ml-0 ml-24">
        <img className="w-20" src={logo} alt="" />
        <h1 className="text-gray-200 text-3xl mb-2">Hero Chef</h1>
        </div>
        <p className="text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id proin purus, tempus facilisi ut viverra. Nunc adipiscing
        </p>
      </div>
      <div>
        <h1 className="text-gray-200 text-3xl mb-2 md:mt-0 mt-8">Get to know us</h1>
        <div className="text-gray-300  flex flex-col gap-2">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact us</Link>
        </div>
      </div>
      <div>
        <h1 className="text-gray-200 text-3xl mb-2 md:mt-0 mt-8">Get in touch</h1>
        <div className="text-gray-300  flex flex-col gap-2">
          <Link>01406199567</Link>
          <Link>mdabujayed2006@gmail.com</Link>
          <Link>demo@email.com</Link>
        </div>
      </div>
      <div>
        <h1 className="text-gray-200 md:mt-0 mt-8 text-3xl mb-2">Follow us</h1>
        <div className="text-gray-300  flex flex-col gap-2">
          <Link to="/">Facebook</Link>
          <Link>Linkedin</Link>
          <Link>Twittwer</Link>
          <Link>YouTube</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
