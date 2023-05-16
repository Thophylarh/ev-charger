import check from "../../assets/svg/check.svg"
import { useState } from "react";

const EditPrice = ({closeModal, setACGreen}) =>{
  const [price, setPrice] = useState(0)

  const handleSubmit = () =>{
    closeModal(false)
    setACGreen(price)
    
  }
    
    return (
        <>
          <div className="mb-[20px]">
      <div className="flex justify-center">
        <img src={check} alt="Check" />
      </div>
      <div className="flex justify-center">
        <p className="text-[#101828] font-semibold text-[18px]">Edit price</p>
      </div>
      </div>

      <div>
        <h2 className="text-[#C9A464] font-semibold text-[12px] mb-[20px]">AC PRICE</h2>

        {/* <h3 className="text-[#667085] font-semibold text-[12px] mb-[20px]">WHEN ON GRID</h3>

        <h4 className="text-[#101828] font-medium text-[20px] mb-[20px]">NGN 120.90/KW</h4> */}
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block font-semibold text-[#344054] text-[14px] mb-[8px]">NEW PRICE</label>
        <input type="number" placeholder="Enter new price" className="w-[100%] p-[14px] border border-[#D0D5DD] rounded-lg mb-[20px]"  
         
         value={price}
         onChange={(event) => {
          setPrice(event.target.value);
      }}
        />

        <label className="block font-semibold text-[#344054] text-[14px] mb-[8px]">Password</label>
        <input type="password" placeholder="Enter password"  className="w-[100%] p-[14px] border border-[#D0D5DD] rounded-lg mb-[20px]"  required/>

        <button className="w-[100%] bg-black rounded-lg text-white py-[16px] ">Change price</button>
      </form>
        </>
    )
}

export default EditPrice;