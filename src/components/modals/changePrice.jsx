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
        <h1>Change Price</h1>
        <p>Change the billing price of your station</p>
       </div>

       <form className="mt-[1.5rem]" onSubmit={handleSubmit}>
        <label className="block mb-[0.5rem]">Current price</label>
        <input type="text" alt=""  className="border w-[23rem] h-[2.5rem] px-[1rem]" />

        <label className="block mt-[1.5rem] mb-[0.5rem]">New price</label>
        <input type="text" alt="" placeholder="Enter Price" 
        className="border w-[23rem] h-[2.5rem] px-[1rem]"
        value={costPerUnitCharge}
        onChange={
            (event) => {
                setcostPerUnitCharge(event.target.value)
              }
        }
        />

        <label className="block mt-[1.5rem] mb-[0.5rem]">Password</label>
        <input type="password" name="password" alt="" 
            placeholder="Enter password"  
            className="border w-[23rem] h-[2.5rem] px-[1rem]" 
            value={password}
            onChange={(event) => {
                setPassWord(event.target.value)
              }}
        />

        <button className="block border bg-black text-white mt-[2rem] w-[23rem] py-[1rem]" type="submit"> Change Price </button>
       </form>
       
       </>
    )
}


export default ChangePrice;