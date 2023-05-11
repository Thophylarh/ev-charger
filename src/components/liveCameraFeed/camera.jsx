import dropDown from "../../assets/svg/dropDownArrow.svg";
import React from "react";
import CameraImg from "../../assets/images/cameraImg.png"


const Camera = () => {
return(
    <>
    <div className="h-[100vh] overflow-y-scroll">
    <div className='flex justify-between items-center mt-[1.5rem] mx-[1.5rem] ' >
        <div className=''>
        <h4 className='font-bold text-2xl leading-7 pb-[0.75rem]'>Camera</h4>
        <p className='leading-5 text-base font-medium pb-[1rem]'>live view of what is happening in your station</p>
        </div>
        {/* <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-5 py-1">
            <p className=" text-black font-light text-base ">This month</p>
            <img src={dropDown} alt=""/>
            
          </div>     */}
    </div>
        <div className="mx-[1.5rem]">
            <img src={CameraImg} className="w-[1000px]"></img>
          </div>
    </div>
    
    </>
)
}

export default Camera;