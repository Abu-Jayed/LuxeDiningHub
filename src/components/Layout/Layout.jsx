import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { Toaster } from 'react-hot-toast';
import Slider from '../Slider/Slider';
import Chef from '../Chef/Chef';
import CustomersReview from '../CustomersReview/CustomersReview';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Slider></Slider>
      <Chef></Chef>
      <Outlet></Outlet>
      <CustomersReview></CustomersReview>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Layout;