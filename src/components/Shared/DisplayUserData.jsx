import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const DisplayUserData = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-slate-100">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mb-[230px] ">
        <div className="card w-96 bg-orange-200 shadow-2xl  mt-20 mx-auto">
          <div className="card-body">
            <h2 className="card-title">Welcome, {user?.displayName}</h2>
            <p className="ml-14">Your Email: {user?.email}</p>
          </div>
          <figure>
            <img
            className="mb-5 rounded-lg"
              src={user?.photoURL}
              alt="your img not found"
            />
          </figure>
          <small className="">this img is beautiful</small>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DisplayUserData;
