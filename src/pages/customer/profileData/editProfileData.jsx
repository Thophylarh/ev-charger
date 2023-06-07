import React, { useState, useEffect } from "react";
import axios from "../../../lib/axiosInterceptor";
import Loader from "../../../components/Loader";
import { ClipLoader } from "react-spinners";
import { DatePicker } from "antd";
import { toast } from "react-toastify";
import {
    Navigate,
    NavLink,
    useLocation,
    useNavigate,
    useSearchParams,
  } from "react-router-dom";
import { formatNumber } from "../../../utils/formatNumber";
import { formatDate } from "../../../utils/formatDate";

const EditProfileData = () => {
    const [CDetails, setCDetails] = useState();

    const [searchParams] = useSearchParams();

    const [userInput, setUserInput] = useState();

    let customerId = searchParams.get("customerId");

    const onDateChange = async (date, dateString) => {
        console.log(dateString);
        // setDOB(dateString);
      };

    
    const getDetails = () =>{
        axios.get(`/Customers/get-customer-by-id/${customerId}`).then((res) => {
          
          setCDetails(res.data.customerDetails)
          
        });
      }

      useEffect(() => {
        getDetails();
      }, []);

      const updateProfile = () =>{
        e.preventDefault();

        let firstName = e.target.firstName?.value;
        let lastName = e.target.lastName?.value;
        let email = e.target.email?.value;
        let DOB = e.target.DOB?.value;
        let phone = e.target.phone?.value;
        

        let data = {
            firstname: firstName,
            lastname: lastName,
            emailAddress: email,
            phonenumber: phone,
            dateOfBirth: DOB,
            phonenumber: phone,
            
            numberOfVehiclesOnFile: 0,
            totalAmountSpent: 0,
            totalEnergyCharged: 0,
            bvn,
          };
      }


    return ( <section className="w-[90%] mx-auto">
        <div className="mb-[20px]">
       <h3 className="text-[20px]">Edit Profile Data</h3>
       </div>

       <form>
        <div className="mb-[12px]">
            <label className="block mb-[8px]">First name</label>
            <input type="text"
             className="border border-2 py-[8px] pl-[4px] rounded-lg w-[100%]" 
             name="firstName"
            //  value={CDetails?.Firstname}   
             defaultValue={CDetails?.Firstname}        
             placeholder="First name"/>
        </div>

        <div className="mb-[12px] ">
            <label className="block mb-[8px]">Last name</label>
            <input type="text" 
             name="lastName"
            className="border border-2 py-[8px] pl-[4px] rounded-lg w-[100%]" 
            placeholder="Last name" 
            defaultValue={CDetails?.Lastname}
            />
        </div>

        <div className="mb-[12px]">
            <label className="block mb-[8px]">Email Address</label>
            <input type="email" 
            name="email"
            className="border border-2 py-[8px] pl-[4px] rounded-lg w-[100%]"
             placeholder="eg: johnDoe@gmail.com"
             defaultValue={CDetails?.EmailAddress}
             />
        </div>

        <div className="mb-[12px]">
            <label className="block mb-[8px]">Phone Number</label>
            <input type="text" 
            name="phone"
            className="border border-2 py-[8px] pl-[4px] rounded-lg w-[100%]" 
            placeholder="phone number"
            defaultValue={CDetails?.Phonenumber}
            />
        </div>

        <div className="mb-[20px]">
            <label className="block mb-[8px]">DOB</label>
            <input type="text"
            name="DOB"
             className="border border-2 py-[8px] pl-[4px] rounded-lg w-[100%]" 
            placeholder="DOB"
            defaultValue={formatDate( CDetails?.DateOfBirth)}
            />
        </div>


    

        <button className="w-[100%] py-[8px] bg-black text-white rounded-lg">Update Profile</button>
       </form>



       
    </section> );
}
 
export default EditProfileData;