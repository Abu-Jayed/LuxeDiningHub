import React from "react";
import Navbar from "../Shared/Navbar";
import { Link } from "react-router-dom";
import './contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <img
          className="relative"
          src="https://chef-hero-src.netlify.app/img_3/about_bg.png"
          alt=""
        />
        <div className="mt-16 absolute top-24 left-[630px]">
          <h1 className=" text-4xl text-yellow-500">Contact Us</h1>
          <p className="absolute font-sebold left-[33px] text-white mt-2">
            <Link to="/">Home</Link> &gt; Contact
          </p>
        </div>
      </div>

      {/* 2nd part start */}

      <div className="flex max-w-[90%] mt-36 mx-auto mb-24">
        <div className="flex flex-col gap-10 justify-center">
          <div>
            <h1 className="text-3xl text-yellow-600">Reach Us</h1>
            <h1 className="text-5xl font-bold mb-3">Get In Touch With Us</h1>
            <p className="w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              faucibus feugiat tempus ullamcorper quisque pharetra velit in at.
              Pulvinar nibh ut purus purus. Habitant mattis sit ultrices
              pulvinar sodales tellus. Hendrerit sed aliquam cursus sodales in
              purus aliquet orci feugiat.
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="https://chef-hero-src.netlify.app/img_2/contact_1.svg"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="font-serif text-4xl">+01406 199-567</h1>
              <p className="tracking-wider">Telephone</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://chef-hero-src.netlify.app/img_2/contact_2.svg"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-4xl">mdabujayed2006@gmail.com</h1>
              <p className="tracking-widest">Email</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://chef-hero-src.netlify.app/img_2/contact_3.svg"
              alt=""
            />
            <div className="flex flex-col">
              <h1 className="text-4xl">Rajshahi, Sirajgonj, Jamtoil</h1>
              <p>Location</p>
            </div>
          </div>
        </div>

        <div>
          {/* <img
            src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/6231a9ba6f2e1e85035283fa_Video%20Bg.png"
            alt=""
          /> */}
          <div
            className="mt-5 contact-form"
          >
            <h2 class="text-4xl mb-4">Contact Form</h2>
            <div class="contact-form-block w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                aria-label="Email Form"
              >
                <div class="grid grid-cols-2 gap-4">
                  <div class="">
                    <label for="name" class="font-bold">
                      Name
                    </label> <br />
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                  </div>

                  <div class="">
                    <label for="name-2" class="font-bold">
                      Email Address
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="">
                    <label for="name" class="font-bold">
                      Phone
                    </label> <br />
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                  </div>

                  <div class="">
                    <label for="name-2" class="font-bold">
                      Subject
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                  </div>
                </div>



                <div className="flex flex-col">

                <label for="field" class="font-bold">
                  Write Detail
                </label>
                <textarea className="textarea " placeholder="Describe your thought !!!"></textarea>
                <input
                  type="button"
                  value="Send Message"
                  data-wait="Please wait..."
                  className="btn w-[300px] mx-auto mt-5"
                />
                </div>

              </form>
              
            </div>
          </div>
        </div>
      </div>
      <img src="https://assets.website-files.com/622ae0dc1c5d7674e36a2e37/62348c76e036cbfdf87af969_Table%20Image.png" alt="" />
      {/* 2nd part end */}
    </div>
  );
};

export default Contact;
