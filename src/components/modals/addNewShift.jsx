import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ForwardArrow from "../../assets/svg/forwardArrow.svg";
import BackArrow from "../../assets/svg/backArrow+Circle.svg";
import axios from "../../lib/axiosInterceptor";
import Show from "../../assets/svg/showEye.svg";
import { TimePicker } from "antd";

import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const NewShift = ({ shift, setTime, Details }) => {
  const [searchParams] = useSearchParams();

  const [showPassword, setShowPassword] = useState(false);

  const [inputType, setInputType] = useState("password");

  const [isLoading, setIsLoading] = useState(false);

  const [openTime, setOpenTime] = useState()

  const [closeTime, setCloseTime] = useState()



  let chargerId = searchParams.get("chargerId");

  let stationId = searchParams.get("stationId");

  let companyId = searchParams.get("companyId");

  useEffect(() => {
    showPassword ? setInputType("text") : setInputType("password");
  }, [showPassword]);

  const EditHours = (password, OperationHours) => {
  

    let data = {
      id: chargerId,
      companyId,
      stationId,
      operationalHours: OperationHours,
    };

    axios
      .post(`/Chargers/update-operational-hour?password=${password}`, data)
      .then((res) => {
        Details();

        toast.success("Operation Hours updated successfully");
        
        shift(false);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsLoading(true);
    let password = e.target.password?.value;

    // let from = e.target.from?.value;

    // let to = e.target.to?.value;

    let time = openTime + " " + closeTime;

    // let ChosenTime = openTime + " " + "-" + " " + closeTime;

    let OperationHours = time.toString();

    console.log(OperationHours)

    // if (!from) {
    //   toast.error("Please enter start time");
    //   // setIsLoading(false);
    //   return;
    // }

    // if (!to) {
    //   toast.error("Please enter end time");
    //   // setIsLoading(false);
    //   return;
    // }

    if (!password) {
      toast.error("Please enter your password");
      // setIsLoading(false);
      return;
    }

    EditHours(password, OperationHours);
    // setTime(ChosenTime);
  
  };


const format = 'HH:mm';

  return (
    <div>
      <div className="flex text-[#101828]">
        <h3 className="text-lg font-bold leading-6 mr-[1rem]">
          Operation Hours
        </h3>
        <img src={ForwardArrow} alt="" />
        <h3 className="text-lg font-bold leading-6 ml-[0.75rem]">
          Change Hours
        </h3>
      </div>

      <div className="mt-[0.5rem]">
        <p className="text-sm font-normal leading-5 text-[#667084]">
          Add a custom shift that suits your Operation
        </p>
      </div>

      <div className="my-[1rem]">
        {/* //back arrow */}
        <img src={BackArrow} alt="" onClick={() => shift(false)} />
      </div>


      <div>

        <form onSubmit={handleSubmit}>
          <div className="mt-[1.5rem] mb-[2rem] flex justify-between">
            <div>
              <label className="block text-base text-[#344054] font-semibold leading-5 py-[0.25rem]">
                Opening hours
              </label>
              {/* <input
                type="time"
                placeholder=""
                name="from"
                required
                className="w-[10rem] h-[3rem] border border-solid border-1 border-[#D0D5DD] px-[1rem] py-[0.75rem] rounded-lg"
              /> */}
              <TimePicker onChange={(time, timeString)=>{setOpenTime(timeString)}} format={format}/>
            </div>

            <div>
              <label className="block text-base text-[#344054] font-semibold leading-5 py-[0.25rem]">
                Closing hours
              </label>
              {/* <input
                type="time"
                placeholder=""
                name="to"
                required
                className="w-[10rem] h-[3rem] border border-solid border-1 border-[#D0D5DD] px-[1rem] py-[0.75rem] rounded-lg"
              /> */}
               <TimePicker onChange={(time, timeString)=>{setCloseTime(timeString)}}format={format}/>
            </div>
          </div>

          <label className="block text-base font-semibold leading-5 text-[#344054] py-[0.5rem]">
            Password
          </label>

          <div
          className=" flex items-center justify-between mt-1 p-3 bg-white border
          shadow-sm border-slate-300
           placeholder-slate-400
            focus:outline-none focus:border-
             sky-500 focus:ring-sky-500 block
              w-[100%] rounded-md sm:text-sm
               focus:ring-1 "
          >
            <input
              type={inputType}
              placeholder="Enter Password"
              name="password"
              required
              className="w-[100%] outline-none"
            />

            <img
              className=" flex justify-end cursor-pointer w-[1.5rem]"
              src={Show}
              alt="view password"
              onClick={() => {
                setShowPassword((showPassword) => !showPassword);
                console.log(showPassword);
              }}
            />
          </div>

          <button
            type="submit"
            className={ `w-[100%] mt-[1.5rem]  h-[3rem] bg-[#101828] text-white rounded-md  ${
                isLoading
                    ? "bg-slate-500 cursor-not-allowed"
                    : "bg-black cursor-pointer"
            } `}
            disabled={isLoading ? true : false}
          >
            {isLoading ? <ClipLoader color="white" size={15} /> : " Create Shift"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewShift;
