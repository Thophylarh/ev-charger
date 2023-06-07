import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import axios from "axios";

import logo from "../../../assets/svg/logo.svg";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const CarInfo = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  let customerCode = searchParams.get("cus");
  let carrCode = searchParams.get("vehicleCode");

  const createVA = () => {
    let data = JSON.parse(localStorage.getItem("VA"));
    data.walletId = localStorage.getItem("wall");
    data.isPermanent = true;

    console.log(data, "va data");
    axios
      .post(
        `https://evapi.estations.com/customers/create-virtual-account`,
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      )
      .then((res) => {
        console.log(res.data, "va success");
        setIsLoading(false);
        toast.success("Account created successfully");

        localStorage.setItem("wallet", JSON.stringify(res.data));
        navigate({
          pathname: "/wallet",
          // search: `?walletId=${res.data?.walletId}`,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error(err.message);
      });
  };

  const registerCar = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let carMake = e.target.carMake?.value;
    let plateNumber = e.target.plateNumber?.value;
    let carModel = e.target.carModel?.value;

    if (!carMake) {
      toast.error("Enter your vehicle make");
      setIsLoading(false);
      return;
    }

    if (!carModel) {
      toast.error("Enter your vehicle model");
      setIsLoading(false);
      return;
    }

    if (!plateNumber) {
      toast.error("Enter your vehicle platenumber");
      setIsLoading(false);
      return;
    }

    if (!carModel) {
      toast.error("Enter your carModel");
      setIsLoading(false);
      return;
    }

    let data = {
      vehicleName: carMake,
      plateNumber: plateNumber,
      vehicleType: carModel,
      customerCode,
      vehicleCode: carrCode,
    };

    axios
      .post(`https://evapi.estations.com/customers/add-customer-vehicle`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      })
      .then((res) => {
        console.log(res.data, "vehicle success");

        createVA();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <section className="bg-black h-[100vh]  py-[1rem]">
      <section className="w-[90%] mx-auto mb-[2.5rem] h-[15%]">
        <div>
          <img src={logo} className="mb-[24px]" alt="logo"></img>
          <p className="text-white text-[16px]">
            Just few more steps to go, kindly fill in your car infomation
          </p>
        </div>
      </section>

      <section className="bg-white h-[85%] rounded-3xl">
        <form className="pt-[44px] mx-[28px]" onSubmit={registerCar}>
          <div className="mb-[20px]">
            <label className="flex block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              <p>Vehicle Name </p> <p className="text-[#EB3540]">*</p>
            </label>

            <input
              type="text"
              name="carMake"
              placeholder="Enter your Vehicle Make "
              className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
              required
            ></input>
          </div>

          <div className="mb-[20px]">
            <label className=" flex block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              <p>Vehicle Model</p> <p className="text-[#EB3540]">*</p>{" "}
            </label>

            <input
              type="text"
              name="carModel"
              placeholder="Enter your vehicle model"
              className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
              required
            ></input>
          </div>

          <div className="mb-[20px]">
            <label className="flex block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              Plate Number <p className="text-[#EB3540]">*</p>{" "}
            </label>

            <input
              type="text"
              name="plateNumber"
              placeholder="Enter your plate number "
              className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
              required
            ></input>
          </div>

          <button
            type="submit"
            className={` p-4 rounded-lg mb-[4rem] flex  w-[100%] text- 
                 center text-white  text- 
                  normal text-sm 
                  font-semibold tracking-widest text- 
                   white uppercase transition ease-in- 
                    out  ${
                      isLoading
                        ? "bg-slate-500 cursor-not-allowed"
                        : "bg-black cursor-pointer"
                    } border border- 
                     transparent active:bg-gray-900 
                      false justify-center 
                       hover:scale-105 duration-300`}
            disabled={isLoading ? true : false}
          >
            {" "}
            {isLoading ? <ClipLoader color="white" size={15} /> : "Continue"}
          </button>
        </form>
      </section>
    </section>
  );
};

export default CarInfo;
