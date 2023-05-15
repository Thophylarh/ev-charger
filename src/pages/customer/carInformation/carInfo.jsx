import React from "react";
import logo from "../../../assets/svg/logo.svg";


const CarInfo = () =>{
return (
   
       
       <section className="bg-black h-[100vh]  py-[1rem]">
        <section className="w-[90%] mx-auto mb-[2.5rem] h-[15%]">
        <div>
        <img src={logo} className="mb-[24px]"></img>
        <p className="text-white text-[16px]">
        Just few more steps to go, kindly fill in your car infomation
        </p>
        </div>
        </section>

        <section className="bg-white h-[85%] rounded-3xl">

            <form className="pt-[44px] mx-[28px]">

                <div className="mb-[20px]">
                <label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]"><p>Vehicle Make  </p> <p className="text-[#EB3540]">*</p></label>

                <input type="text" placeholder="Enter your Vehicle Make " className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg" required></input>
                </div>

                <div className="mb-[20px]">
                <label className=" flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]"><p>Vehicle Model</p> <p className="text-[#EB3540]">*</p> </label>

                <input type="text" placeholder="Enter your vehicle model" className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg" required></input>
                </div>

                <div className="mb-[20px]">
                <label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">Plate Number <p className="text-[#EB3540]">*</p> </label>

                <input type="text" placeholder="Enter your Plate Number " className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg" required></input>
                </div>

                <button className="bg-black w-[100%] py-[16px] text-white rounded-lg mb-[4rem]">Continue</button>
            </form>
        </section>
				
		</section>

   
)
}

export default CarInfo;

