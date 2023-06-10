import React from "react";


const popUp = ({closeModal, children}) => {



    return (
      <div onClick={()=>{closeModal(false)}} className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs text-center  z-[20] " >
        <div className="bg-white w-[30%] h-[20%] inline-block align-middle pt-[2.5rem] px-[1.25rem] transition ease-in-out duration-300  rounded-lg" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
  
  export default popUp;