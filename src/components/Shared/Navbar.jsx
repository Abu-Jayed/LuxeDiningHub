import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
      <div>

      <Link to='/' className='flex items-center'>
      <img className='w-12' src={logo} alt="" />
			<h3>Chef Hero</h3>
      </Link>
      </div>
			<nav ref={navRef}>
				<Link to='/'>Home</Link>
				<Link to=''>Order Online</Link>
				<Link to=''>About Us</Link>
				<Link to=''>Blog</Link>
				<Link to=''>Contact Us</Link>
        <button className='btn btn-info'>Login</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default Navbar;