import { useState, useEffect } from "react";
import axios from "axios";

const ChangePrice = () =>{
    const [price, setPrice] = useState("")
    const [costPerUnitCharge, setcostPerUnitCharge] = useState(0)
    const [password, setPassWord] = useState("")

    const url = "http://evapi.estations.com";
    const token = localStorage.getItem("user-token");

    //company id
    const id = localStorage.getItem("id")

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(url + "/Billings/create?password=" + password,
       {
        "costPerUnitCharge": costPerUnitCharge,
        "companyId": id
       }, 
       {
        headers: { "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
     },
        withCredentials: false,
      }
      )
      .then((res)=>{
        console.log(res)
        setPassWord("")
        setcostPerUnitCharge("")
      }
      )
    }

    return (
       <>
       <div>
        <h1 className="text-[#101828] font-bold text-lg">Change Price</h1>
        <p className="text-sm font-normal text-[#667084]">Change the billing price of your station</p>
       </div>

       <form className="mt-[1.5rem]" onSubmit={handleSubmit}>
        <label className="block mb-[0.5rem]">Price when on grid</label>
        <input type="text" alt=""  className="border w-[23rem] h-[2.5rem] px-[1rem]" placeholder="NGN200.00/kWh" />

        <label className="block mt-[1.5rem] mb-[0.5rem]">Price when on Utility </label>
        <input type="text" alt="" placeholder="NGN200.00/kWh" 
        className="border w-[23rem] h-[2.5rem] px-[1rem]"
      
        />

      <label className="block mt-[1.5rem] mb-[0.5rem]">Price when on Green energy </label>
        <input type="text" alt="" placeholder="NGN200.00/kWh" 
        className="border w-[23rem] h-[2.5rem] px-[1rem]"
        
        />

        <label className="block mt-[1.5rem] mb-[0.5rem]">Password</label>
        <input type="text" name="text" alt="" 
            placeholder="Enter password"  
            className="border w-[23rem] h-[2.5rem] px-[1rem]"
        />

       

        <button className="block border bg-black text-white mt-[2rem] w-[23rem] py-[1rem]" type="submit"> Change Price </button>
       </form>
       
       </>
    )
}


export default ChangePrice;