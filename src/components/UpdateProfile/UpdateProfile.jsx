import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { updateCurrentUser } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const UpdateProfile = () => {
  const { auth, updateUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const newName = form.name.value;
    const newImg = form.image.value;
    console.log(newName, newImg);
    updateUser(newName, newImg);
    setMessage("Profile update successfully, Reload for see change");
  };
  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleSubmitUpdate}>
        <div className="flex justify-center">
          <div className="mt-32">
            <label className="label">
              <span className="label-text">New Name</span>
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
              id="name"
            />
            <label className="label">
              <span className="label-text">New image link</span>
            </label>
            <input
              required
              name="image"
              id="image"
              type="text"
              placeholder="Type here"
              className=" input input-bordered input-accent w-full max-w-xs"
            />
          </div>
        </div>
        <button className="ml-[700px] mt-5 mb-10 btn btn-warning" type="submit">
          Submit
        </button>
      </form>
      <div className="ml-72 mb-10 text-green-700 text-4xl">{message}</div>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
