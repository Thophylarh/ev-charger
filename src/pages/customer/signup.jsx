import React from "react";
import logo from "../../assets/svg/logo.svg";


const SignUp = () =>{
return (
   
       
       <section className="bg-black h-[100vh]  py-[1rem]">
        <section className="w-[90%] mx-auto mb-[2.5rem] h-[15%]">
        <div>
        <img src={logo} className="mb-[24px]"></img>
        <p className="text-white text-[16px]">Hi there, complete your EV sign up journey</p>
        </div>
        </section>

        <section className="bg-white h-[85%] rounded-3xl">

            <form className="pt-[44px] mx-[28px]">

                <div className="mb-[20px]">
                <label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]"><p>First Name </p> <p className="text-[#EB3540]">*</p></label>

                <input type="text" placeholder="Enter your first name" className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg" required></input>
                </div>

                <div className="mb-[20px]">
                <label className="block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">Last Name *</label>

                <input type="text" placeholder="Enter your last name" className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg" required></input>
                </div>

                <div className="mb-[20px]">
                <label className="block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">Email address *</label>

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

{/* <section className="w-[90%] mx-auto mb-[2.5rem] ">
        <div>
        <img src={logo} className="mb-[24px]"></img>
        <p className="text-white text-[16px]">Hi there, complete your EV sign up journey</p>
        </div>
       </section>

       <section className="bg-white py-[4rem] rounded-lg">
        <div className=" w-[90%] mx-auto ">
        <form >
            <div>
            <label className="block">First Name</label>
            <input type="text" placeholder="Enter your first name" className="border" required />
            </div>
            <div>
            <label className="block">First Name</label>
            <input type="text" placeholder="Enter your first name" className="border" required />
            </div>
            <div>
            <label className="block">First Name</label>
            <input type="text" placeholder="Enter your first name" className="border" required />
            </div>
            <div>
            <label className="block">First Name</label>
            <input type="text" placeholder="Enter your first name" className="border" required />
            </div>
            <div>
            <label className="block">First Name</label>
            <input type="text" placeholder="Enter your first name" className="border" required />
            </div>
        </form>
        </div>
       </section> */}