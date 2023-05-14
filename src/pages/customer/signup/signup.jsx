import React from "react";
import logo from "../../../assets/svg/logo.svg";
import "../signup/style.css";


const SignUp = () =>{
return (
   
       
       <section className="bg-black h-[100vh]  py-[1rem]" >
        <section className={`w-[90%] mx-auto mb-[var(--marginBtwSection)] h-[15%]`}>
        <div>
        <img src={logo} className={`mb-[var(--marginBtwElements)]`}></img>
        <p className="text-white text-[1rem]">Hi there, complete your EV sign up journey</p>
        </div>
        </section>

        <section className="bg-white h-[85%] rounded-3xl">

            <form className="pt-[44px] mx-[28px]">

                <div className="mb-[20px]">
                <label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]"><p>First Name </p> <p className="text-[#EB3540]">*</p></label>

                <input type="text" placeholder="Enter your first name" className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg" required></input>
                </div>

                <div className="mb-[20px]">
                <label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]"><p>Last Name</p> <p className="text-[#EB3540]">*</p></label>

                <input type="text" placeholder="Enter your last name" className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg" required></input>
                </div>

                <div className="mb-[20px]">
                <label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]"><p>Email address</p> <p className="text-[#EB3540]">*</p></label>

                <input type="text" placeholder="youremail@email.com" className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg" required></input>
                </div>

                <div className="mb-[20px]">
                <label className="block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">DOB</label>

                <input type="text" placeholder="youremail@email.com" className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"></input>
                </div>

                <div className="mb-[20px]">
                <label className="block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">Password</label>

                <input type="text" placeholder="Enter your password" className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"></input>
                </div>

                <button className="bg-black w-[100%] py-[16px] text-white rounded-lg mb-[4rem]">Sign up</button>
            </form>
        </section>
				
		</section>

   
)
}

export default SignUp;

