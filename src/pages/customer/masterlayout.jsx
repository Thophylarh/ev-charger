import React from "react";
import CustomerNav from "../../layouts/customer/Navbar";

import logo from "../../assets/svg/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
// import homeIcon from "../../assets/svg/Home.svg";

export default function CustomerLayout({ children, title }) {
  let navigate = useNavigate();
  let customerId = localStorage.getItem("customerId");

  let goHome = () => {
    navigate({
      pathname: "/home",
      search: `?customerId=${customerId}`,
    });
  };
  return (
    <>
      <CustomerNav />
      <section className="mobileBody top h-[100vh] ">
        <div className="w-[90%] mx-auto py-5">
          <div className="flex items-center">
           
              <img
                src={logo}
                alt="ev logo"
                className="w-[3.125rem] h-[3rem]"
                onClick={goHome}
              />
            <p className=" mt-2 text-[1.125rem] text-white w-[100%] ml-[20%] font-semibold">
              {title}
            </p>
          </div>
        </div>

        <section className="h-[90%]  overflow-auto bg-white rounded-tl-lg rounded-tr-lg ">
          <div className="pb-20 pt-5 ">{children}</div>
        </section>
      </section>
    </>
  );
}
