import React, { useState } from "react";
import "./styles.css"
import logo from "../../../assets/svg/logo.svg"
import Show from "../../../assets/svg/showEye.svg"


const Clogin = () =>{

return(
   <section className="top h-[100vh] p-[8px]">

    <section className=" h-[20%] flex justify-center align-center">

        <img src={logo} alt="ev logo" className="w-[20%]" />

    </section>


    <section className="bg-white h-[78%] rounded-lg py-[2.5rem] px-[1.25rem] ">

        <h1 className="Wheading">Welcome back</h1>

        <p className="text-[16px] font-normal text-grey-700">Login to access your ev account</p>

        <section className="mt-[4rem]">
        <form>
            <div className="mb-[20px]">
                <label className="block text-grey-700 text-[14px] font-semibold mb-[8px]" >Phone number:</label>
                <input type="text" placeholder="Enter your phone number " className="border p-[14px] rounded-lg w-[100%]"/>
            </div>

            <div className="mb-[12px]">
                <label className="block text-grey-700 text-[14px] font-semibold mb-[8px]" >Password:</label>
               <div>
                <div className="flex justify-end">
                <img src={Show} className="eye"></img>
                </div>
                <input type="password" placeholder="Enter your password" className="border p-[14px] rounded-lg w-[100%]"/>
                </div>
            </div>

            <p className="font-normal text-[12px] text-[#B27203] flex justify-end mb-[28px]">Forgot password?</p>

            <button className="border py-[16px] w-[100%] bg-black rounded-lg text-white">Sign in</button>
        </form>
    </section>
    </section>

   
    </section>
       
   
)
}


export default Clogin;