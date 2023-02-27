import React from "react";
import Dshboard from "../../assets/svg/dshboard.svg";
import Document from "../../assets/svg/document.png";
import Sales from "../../assets/svg/sales.svg";
import Arrow from "../../assets/svg/arrow.svg";
import { Link,Outlet } from "react-router-dom";

const sidebar = () => {
  return (
    <div>
      <div className="link-cover mt-[6rem]">
        <div>
          <Link to="/" className="">
            <div className="flex items-center m-4 ">
              <div>
                <img className="w-[14px] mr-3" src={Dshboard} alt="" />
              </div>
              <div>
                <p
                  className="text-[#1DB954] text- 
         sm"
                >
                  Overview
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/evChargers" className="">
            <div className="flex items-center m-4 ">
              <div>
                <img className="w-[14px] mr-3" src={Document} alt="" />
              </div>
              <div>
                <p className="text-white text-sm">Ev Chargers</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="#" className="">
            <div className="flex items-center m-4  ">
              <div>
                <img className="w-[14px] mr-3" src={Sales} alt="" />
              </div>
              <div className="flex justify-between items-center w-[10rem]">
                <p className="text-white text-sm">Sales</p>
                
                  <img className="w-[14px] mr-3 " src={Arrow} alt="" />
                
              </div>
            </div>
          </Link>
          <Link to="#" className="">
            <div className="flex items-center m-4  ">
              <div
                className="flex justify-between ml-6 
         items-center"
              >
                <p className="text-white text-sm">Product List</p>
              </div>
            </div>
          </Link>
          <Link to="#" className="">
            <div className="flex items-center m-4  ">
              <div
                className="flex justify-between ml-6 
         items-center"
              >
                <p className="text-white text-sm">Billing</p>
              </div>
            </div>
          </Link>
          <Link to="#" className="">
            <div className="flex items-center m-4  ">
              <div
                className="flex justify-between ml-6 
         items-center"
              >
                <p className="text-white text-sm">Invoice</p>
              </div>
            </div>
          </Link>
          <Link to="#" className="">
            <div className="flex items-center m-4  ">
              <div
                className="flex justify-between ml-6 
         items-center"
              >
                <p className="text-white text-sm">Settings</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
