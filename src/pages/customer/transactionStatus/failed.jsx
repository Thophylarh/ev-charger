import React from "react";
import logo from "../../../assets/svg/logo.svg";
import tickSquare from "../../../assets/svg/tickSquare.svg"

const Failed = () => {
    return (  <section className=" h-[100vh] bg-black  py-[1rem]">
    <section
      className={`w-[90%]  mx-auto mb-[var(--marginBtwSection)]  h-[15%]`}
    >
      <div>
        <img src={logo} className={`mb-[var(--marginBtwElements)] `}></img>
        <p className="desc">Fund your Ev wallet to get you on board</p>
      </div>
    </section>

    <section className="bg-white h-[85%] rounded-3xl pt-[1.5rem]">

        <div className="w-[90%] mx-auto text-center">
      
        <h3 className="font-medium text-[#344054] text-[1rem] mt-[1.5rem]">Transaction Failed</h3>

        <div className="flex justify-center mt-[1.5rem]">
        <p className="text-[10rem]">X</p>
        </div>

        <h6 className="text-[#15833C] text-[1rem] font-medium mt-[1.5rem]">NGN 5,000.00</h6>

        <p className="font-normal text-[#475467] font-[0.75rem] mt-[1rem]">Your Top up has been added to your wallet </p>

        <button className="w-[100%] bg-black text-white py-[16px] rounded-lg mt-[2.25rem]">Continue to dashboard</button>

        </div>

      
    </section>
  </section> );
}
 
export default Failed;