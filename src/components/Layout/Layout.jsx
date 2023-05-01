import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { Toaster } from 'react-hot-toast';
import Slider from '../Slider/Slider';

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;