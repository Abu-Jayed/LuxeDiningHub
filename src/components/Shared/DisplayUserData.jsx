import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const DisplayUserData = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gray-50">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mb-[230px] ">
        <div className="card w-96 bg-orange-200 shadow-xl  mt-20 mx-auto">
          <div className="card-body">
            <h2 className="card-title">Welcome, {user?.displayName}</h2>
            <p className="ml-14">
              Your Email: <br />
              {user ? user?.email : "please login"}
            </p>
          </div>
          <figure>
            <img
              className="mb-5 w-20 rounded-lg"
              src={user?.photoURL}
              alt="your img not found"
            />
          </figure>
          {user && <small className="">this img is beautiful</small>}
        </div>
        <div className="flex justify-center mt-5">
          <Link to='/updateProfile'>
            <button className="btn btn-warning mt-5 ">Update Profile</button>
          </Link>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DisplayUserData;
