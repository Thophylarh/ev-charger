import React from "react";
import StationCharge from "../../assets/images/station-charge.png";
import Star from "../../assets/svg/star.svg";
import Padlock from "../../assets/svg/padlock.svg"
import Email from "../../assets/svg/email.svg"
import "./style.css"



function login() {
  return (
    <div className="w-full h-screen py-[10rem] px-4 begin">
      
      <div className="max-w-[1240px] mx-auto grid 
        md:grid-cols-2 relative">
        <div className="">
          <div className="absolute left-0 top-[-20%]">
          <img className="w-[40px] mx-auto my-4" src= 
            {Star} alt="" />
          </div>
        
          <div className="">
            <h1 className="font-bold text-2xl my- 
             2">Welcome Back!</h1>
            <p className="text-[#667085]">
              Log in to your account to access all of 
               your charging station data{" "}
              <br />
              and manage your settings
            </p>
          </div>
          <form>
            <div className="mt-20">
              <label
                htmlFor="email"
                className="block text-sm font-medium 
                 text-gray-700 undefined "
              >
                Email
              </label>
              <div className="flex flex-col items- 
               start input-icons ">
                <img className="w-[1rem] icon" src={Email}></img>
                <input
                  type="email"
                  name="email"
                  placeholder="akinromade@example.com"
                  className="mt-1 mb-4 p-3 bg-white 
                   border shadow-sm border-slate-300 
                    placeholder-slate-400 
                     focus:outline-none focus:border- 
                      sky-500 focus:ring-sky-500 block 
                       w-96 rounded-md sm:text-sm 
                        focus:ring-1 input-field"
                      
                />
                
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium 
                 text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items- 
               start input-icons">
                <img className="w-[1rem] icon" src={Padlock}></img>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  className="mt-1 p-3 bg-white border 
                   shadow-sm border-slate-300 
                    placeholder-slate-400 
                     focus:outline-none focus:border- 
                      sky-500 focus:ring-sky-500 block 
                       w-96 rounded-md sm:text-sm 
                        focus:ring-1 input-field"
                />
               
              </div>
            </div>

            <div className="">
              <a
                className="mt-1 flex items-center 
                 justify-center text-sm text-gray-400  
                  hover:text-gray-900"
                href="#"
              >
                Forgot password?
              </a>
              <button
                type="submit"
                className="mt-8 p-4 flex w-96 text- 
                 center text-white rounded-md text- 
                  normal text-xs 
                  font-semibold tracking-widest text- 
                   white uppercase transition ease-in- 
                    out bg-gray-900 border border- 
                     transparent active:bg-gray-900 
                      false justify-center 
                       hover:scale-105 duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <div>
          <img className="w-[500px] mx-auto my-4" src= 
            {StationCharge} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-center font-medium mb-2 mt-10">Monitor Your Station Charge</h4>
            <p className="text-gray-700 text-sm">Manage and monitor your EV charging stations from one central location. Get real-<br/> time  data on charging usage, set pricing and payment options, and customize user <br/> <span className="ml-[12rem] text-center">settings to fit your unique needs.</span>  </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default login;
