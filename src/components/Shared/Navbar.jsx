import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import DisplayUserData from "./DisplayUserData";
const Navbar = () => {
  const navRef = useRef();

  const { user, logOut, photo } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleLogOur = () => {
    logOut()
      .then(() => {
        return toast.success("User logout successfully");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  // let theme = document.getElementById("theme");

  const handleChange = (event) => {
    let type = event.target.value;
    console.log(type);
    let theme = document.getElementById("theme");
    theme.setAttribute("data-theme", type);
  };

  const handleDisplay = () => {
    navigate('/displayUser')
  }

  return (
    <header>
      <div>
        <Link to="/" className="flex items-center">
          <img className="w-12" src={logo} alt="" />
          <h3>Chef Hero</h3>
        </Link>
      </div>
      <nav id="sidebar" className=" bg-slate-50" ref={navRef}>
        <NavLink to="/" className="">
          Home
        </NavLink>

        <NavLink to="/order">
          Order Online
        </NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        {console.log(user)}

        {/* theme start  */}
        <select
          onChange={handleChange}
          className="select select-accent w-[20%] max-w-xs"
        >
          <option disabled>Dark mode or light mode?</option>
          <option value="light">Auto</option>
          <option value="cupcake">Cupcake</option>
          <option value="autumn">Autumn</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="valentine">Valentine</option>
          <option value="lemonade">Lemonade</option>
          <option value="aqua">Aqua</option>
          <option value="winter">Winter</option>
          <option value="retro">Retro</option>
        </select>
        {/* theme end */}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      {user ? (
          <Link onClick={handleLogOur} className="btn btn-info">
            <button>Logout</button>
          </Link>
        ) : (
          <Link to="/login" className="btn btn-info">
            <button>Login</button>
          </Link>
        )}
        {user?.photoURL ? (
          <div>
            <img
              title={user.displayName}
              className="rounded-full w-9 h-9"
              src={user.photoURL}
              alt=""
              onClick={handleDisplay}
            />
            <p>{user.displayName}</p>
          </div>
        ) : (
          <FaUser title="user" className="w-10 h-10"></FaUser>
        )}
      <div>
        <p className="text-red-600">{error}</p>
      </div>
      <Toaster></Toaster>
    </header>
  );
};

export default Navbar;
