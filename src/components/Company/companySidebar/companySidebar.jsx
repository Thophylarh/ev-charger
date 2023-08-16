import React, {useState} from "react";
import Dshboard from "../../../assets/svg/dshboardA.svg";
import DshboardB from "../../../assets/svg/dshboardb.svg";
import Document from "../../../assets/svg/document.png";
import DocumentB from "../../../assets/svg/documentB.svg"
import Sales from "../../../assets/svg/sales.svg";
// import Arrow from "../../../assets/svg/arrow.svg";
import { NavLink } from "react-router-dom";



const CompanySidebar = () => {

 
 
  return (
    <div>
      <div className="link-cover mt-[6rem] ">
        <div>
        <NavLink to="/company"  end> 
        {({isActive}) => 
          (isActive ? 
            <div className="flex items-center m-4 bg-[#101828] h-[2.5rem] w-[11rem] pl-[0.5rem] rounded-xl"  >
            <div>
             <img className="w-[18px] h-[18px] mr-3 " src={Dshboard} alt="" /> 
              
            </div>
            <div>
            
              <p className= "text-[#1DB954] text-sm" >
                Overview
              </p>
            
            </div>
          </div>
          : 
          <div className="flex items-center m-4"  >
          <div>
            <img className="w-[18px] h-[18px] mr-3 " src={DshboardB} alt="" /> 
            
          </div>
          <div>
            <p className= "text-sm text-white" >
              Overview
            </p>
          
          </div>
        </div>
          
          
           
          )
      }  
       </NavLink>
        </div>
        <div>
        <NavLink to="/company/myStations"  end>
        {({isActive}) => (

         isActive ?
          
            <div className="flex items-center mx-4 my-8 text-white bg-[#101828] h-[2.5rem] w-[11rem] pl-[0.5rem] rounded-xl" >
              <div>
               
                <img className="w-[18px] h-[18px] mr-3" src={DocumentB} alt="" />
              </div>
              <div>
              
                <p className="text-[#1DB954] text-sm">My stations</p>
               
              </div>
            </div>
            : 
            <div className="flex items-center mx-4 my-8 text-white" >
            <div>
             
              <img className="w-[18px] h-[18px] mr-3" src={Document} alt="" /> 
            </div>
            <div>
            
              <p className= "text-sm text-white">My stations</p>
             
            </div>
          </div>
        )}
            </NavLink>
        </div>
        <div>
         
          
          <NavLink to="/company/billing" >
          {({isActive}) => (
            isActive?
            <div className="flex items-center m-4 mt-6 ">
              <div
               className="flex items-center mx-4 text-white bg-[#101828] h-[2.5rem] w-[11rem] pl-[0.5rem] rounded-xl"
              >
                <p className="text-[#1DB954] text-sm">Billing</p>
              </div>
            </div>
            : 
            <div className="flex items-center m-4 mt-6 ">
            <div
              className="flex justify-between ml-6  items-center" >
              <p className="text-white text-sm">Billing</p>
            </div>
          </div>
          )}
          </NavLink>
        

          <NavLink to="/company/report" >
          {({isActive}) => (
            isActive?
            <div className="flex items-center m-4  ">
              <div
                className="flex items-center mx-4 text-white bg-[#101828] h-[2.5rem] w-[11rem] pl-[0.5rem] rounded-xl"
              >
                <p className="text-[#1DB954] text-sm">Report</p>
              </div>
            </div>
            :
            <div className="flex items-center m-4  mt-6">
            <div
              className="flex justify-between ml-6 items-center" >
              <p className="text-white text-sm">Report</p>
            </div>
          </div>
            

          )}
          </NavLink>
         

        </div>
      </div>
      
    </div>
  );
};

export default CompanySidebar;
