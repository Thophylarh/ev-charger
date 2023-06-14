import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import logo from "../../../assets/svg/logo.svg";


const PhoneNumber = () => {
    const Navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [PhoneNumber, setPhoneNumber] = useState();

    const phone = (e) =>{
        e.preventDefault();

        let Number = e.target?.PhoneNumber?.value;

        Navigate({
            pathname: "/reg/" + Number,
            
          });
    }

    return ( <section className="bg-black h-[100vh] py-[1rem]">
         <section
        className={`w-[90%] mx-auto mb-[var(--marginBtwSection)] h-[15%]`}
      >
        <div>
          <img
            src={logo}
            alt="Logo"
            className={`mb-[var(--marginBtwElements)]`}
          ></img>
          <p className="text-white text-[1rem]">
            Hi there, enter your phone number to proceed to signup
          </p>
        </div>
      </section>

      <section className="bg-white h-[85%] rounded-3xl">
        <form className="pt-[44px] mx-[28px]" onSubmit={phone}>
          

          <div className="mb-[20px]">
            <label className="flex block text-[#344054] text-[0.875rem]  font-semibold mb-[0.25rem]">
              <p>Phone number</p> <p className="text-[#EB3540]">*</p>
            </label>

            <input
              placeholder="Phone number"
              className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
              name="PhoneNumber"

             
            ></input>
          </div>

            <button className="w-[100%] bg-black text-white p-4">Proceed</button>
        </form>
      </section>
    </section> );
}
 
export default PhoneNumber;