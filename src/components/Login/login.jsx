import React from "react";
import StationCharge from "../../assets/images/station-charge.png";
import Star from "../../assets/svg/star.svg";
import Padlock from "../../assets/svg/padlock.svg"
import Email from "../../assets/svg/email.svg"
import "./style.css"

const login = () => {
    return ( <div className="flex">
        {/* login side */}
        <section className="w-[50%] pt-[5rem] pl-[5rem] bg-white">
            <img src={Star} alt=""></img>
            <h3 className="text-black font-medium text-4xl mt-[3rem] pb-[0.75rem]">Welcome back!</h3>
            <p className="pr-[10rem] font-normal text-lg text-gray-500">Log in to your account to access all of your charging station data and manage your settings</p>
       
            {/* <form className="mt-[5rem]">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 undefined">Email</label>
                <img className="w-[1rem] icon mr-[2rem]" src={Email}></img>
                <div className="
                input-icons">
                <input type="email" name="email" placeholder="akinromade@example.com"
                 className=" mt-1 mb-4 p-3 bg-white 
                 border shadow-sm border-slate-300 
                  placeholder-slate-400 
                   focus:outline-none focus:border- 
                    sky-500 focus:ring-sky-500 block 
                     w-96 rounded-md sm:text-sm 
                      focus:ring-1 input-field
                      "
                 />
                 </div>

                <label
                htmlFor="password"
                className="block text-lg font-medium 
                 text-gray-700 undefined"
              >
                Password
              </label>
              
                <img className="w-[1rem] icon" src={Padlock}></img>
                <div className=" 
              input-icons">
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
            </form> */}
       
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
            <div className="mt-[5rem]">
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
                className="mt-20 flex items-center 
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
        
        </section>

        {/* image side */}
        <section className="w-[50%] bg-[#FCFCFD]">
            <div><img className="" src= 
            {StationCharge} alt="" /></div>
        </section>

    </div> );
}
 
export default login;