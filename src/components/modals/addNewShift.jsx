import React, {useState, useEffect} from "react";
import ForwardArrow from "../../assets/svg/forwardArrow.svg"
import BackArrow from "../../assets/svg/backArrow+Circle.svg"

const NewShift = ({newShift}) => {
    return ( <div>
        <div className="flex text-[#101828]">
        <h3 className="text-lg font-bold leading-6 mr-[1rem]">Operation Hours</h3>
         <img src={ForwardArrow}  alt="" />
        <h3 className="text-lg font-bold leading-6 ml-[0.75rem]">Add Shift</h3>
        </div>

        <div className="mt-[0.5rem]">
            <p className="text-sm font-normal leading-5 text-[#667084]">Add a custom shift that suits your Operation</p>
        </div>

        <div className="my-[1rem]" >
            {/* //back arrow */}
            <img src={BackArrow} alt="" onClick={()=>(newShift(false))}/>
        </div>
        <div>
            <form>
                <label className="block text-base font-semibold leading-5 text-[#344054] py-[0.5rem]">Shift name</label>
                <input type="text" placeholder="Enter recipient phone number"
                className="w-[23rem] h-[3rem] border border-solid p-[1rem] rounded-lg border-1 border-[#D0D5DD]"
                />

                <div className="mt-[1.5rem] mb-[2rem] flex justify-between">
                <div>
                <label className="block text-base text-[#344054] font-semibold leading-5 py-[0.25rem]">Opening hours</label>
                <input type="time" placeholder=""
                className="w-[10rem] h-[3rem] border border-solid border-1 border-[#D0D5DD] px-[1rem] py-[0.75rem] rounded-lg"
                />
                </div>
                <div>
                <label className="block text-base text-[#344054] font-semibold leading-5 py-[0.25rem]">Closing hours</label>
                <input type="time" placeholder=""
                 className="w-[10rem] h-[3rem] border border-solid border-1 border-[#D0D5DD] px-[1rem] py-[0.75rem] rounded-lg"
                />
                </div>
                </div>
                <button className="w-[23rem] h-[3rem] bg-[#101828] text-white rounded-md">Create Shift</button>
            </form>

        </div>
    </div> );
}
 
export default NewShift;