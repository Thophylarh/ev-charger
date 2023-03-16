import React, {useState} from "react";
import Dshboard from "../../assets/svg/dshboard.svg";
import Document from "../../assets/svg/document.png";
import Sales from "../../assets/svg/sales.svg";
import Arrow from "../../assets/svg/arrow.svg";
import { NavLink } from "react-router-dom";



const Sidebar = () => {

 
 
  return (
    <div>
      <div className="link-cover mt-[6rem]">
        <div>
        <NavLink to="/dash"  end> 
        {({isActive}) => (
           <div className="flex items-center m-4"  >
           <div>
             <img className="w-[18px] h-[18px] mr-3 fill-white" src={Dshboard} alt="" />
           </div>
           <div>
           
             <p className={isActive ? "text-[#1DB954] text-sm": "text-sm text-white"} >
               Overview
             </p>
           
           </div>
         </div>
        )}
           
       </NavLink>
        </div>
        <div>
        <NavLink to="/dash/evChargers"  end>
        {({isActive}) => (
            <div className="flex items-center mx-4 my-8 text-white" >
              <div>
                <img className="w-[18px] h-[18px] mr-3" src={Document} alt="" />
              </div>
              <div>
              
                <p className={isActive ? "text-[#1DB954] text-sm": "text-sm text-white"}  >Ev Chargers</p>
               
              </div>
            </div>
        )}
            </NavLink>
        </div>
        <div>
          <NavLink to="#">
          {({isActive}) => (
            <div className="flex items-center mx-4 mt-6  text-white">
              <div>
                <img className="w-[18px] h-[18px] mr-3" src={Sales} alt="" />
              </div>
              <div className="flex justify-between items-center w-[10rem]">
                <p className="text-white text-sm">Sales</p>
                
                  <img className="w-[14px] mr-3 " src={Arrow} alt="" />
                
              </div>
            </div>
          )}
          </NavLink>
          <NavLink to="#" >
          {({isActive}) => (
            <div className="flex items-center mx-4  mt-6">
              <div
                className="flex justify-between ml-6 
         items-center"
              >
                <p className="text-white text-sm">Product List</p>
              </div>
            </div>
          )}
          </NavLink>
          <NavLink to="#" >
          {({isActive}) => (
            <div className="flex items-center m-4 mt-6 ">
              <div
                className="flex justify-between ml-6 
         items-center"
              >
                <p className="text-white text-sm">Billing</p>
              </div>
            </div>
          )}
          </NavLink>
        
          <NavLink to="#" >
          {({isActive}) => (
            <div className="flex items-center m-4  mt-6">
              <div
                className="flex justify-between ml-6 
         items-center"
              >
                <p className="text-white text-sm">Invoice</p>
              </div>
            </div>
          )}
          </NavLink>
          <NavLink to="#" >
          {({isActive}) => (
            <div className="flex items-center m-4  mt-6">
              <div
                className="flex justify-between ml-6 
         items-center"
              >
                <p className="text-white text-sm">Settings</p>
              </div>
            </div>
          )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
