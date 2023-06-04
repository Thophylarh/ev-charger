import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";

import axios from "axios";
import { DatePicker } from "antd";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

import "../signup/style.css";
import logo from "../../../assets/svg/logo.svg";
import Show from "../../../assets/svg/showEye.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [VehicleCode, setVehicleCode] = useState();
  const [DOB, setDOB] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [showBvn, setShowBvn] = useState(false);
  const [BvninputType, setBvnInputType] = useState("number");

  const { phone } = useParams();

  
  // const [searchParams] = useSearchParams();

  // let phone = searchParams.get("phoneNumber");
  // let VehicleCode = searchParams.get("VehicleCode");

  const onDateChange = async (date, dateString) => {
    console.log(dateString);
    setDOB(dateString);
  };

  const createVA = () => {
    let data = JSON.parse(localStorage.getItem("VA"));
    data.walletId = localStorage.getItem("wall");
    data.isPermanent = true;

    console.log(data, "va data");
    axios
      .post(
        `http://evapi.estations.com/customers/create-virtual-account`,
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

  const getVehicleCode = () => {
    axios
      .get(
        `http://evapi.estations.com/Customers/get-customer-vehicle-by-phonenumber/${phone}`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      )
      .then((res) => {
        setVehicleCode(res.data.vehicleCode);
        // setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);

        // toast.error(err.response.data);
      });
  };

  const customerSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let firstName = e.target.firstName?.value;
    let lastName = e.target.lastName?.value;
    let email = e.target.email?.value;
    let password = e.target.password?.value;
    let bvn = e.target.bvn?.value;

    localStorage.setItem("Refresh", password )
    localStorage.setItem("phone", phone)



    if (!firstName) {
      toast.error("Enter your first name");
      setIsLoading(false);
      return;
    }
    if (!lastName) {
      toast.error("Enter your last name");
      setIsLoading(false);
      return;
    }
    if (!email) {
      toast.error("Enter your email");
      setIsLoading(false);
      return;
    }

    // if (!phone) {
    // 	toast.error("Enter your phone number");
    // 	setIsLoading(false);
    // 	return;
    // }

    if (!bvn) {
      toast.error("Enter your BVN");
      setIsLoading(false);
      return;
    }

    if (!password) {
      toast.error("Enter password");
      setIsLoading(false);
      return;
    }

    let data = {
      firstname: firstName,
      lastname: lastName,
      emailAddress: email,
      phonenumber: phone,
      dateOfBirth: DOB,
      phonenumber: phone,
      password: password,
      numberOfVehiclesOnFile: 0,
      totalAmountSpent: 0,
      totalEnergyCharged: 0,
      bvn,
    };
    let va = {
      firstname: firstName,
      lastname: lastName,
      emailAddress: email,
      phonenumber: phone,
      bvn,
    };
    localStorage.setItem("VA", JSON.stringify(va));

    axios
      .post(`http://evapi.estations.com/Customers/create-customer`, data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        let cusCode = res?.data?.customerCode;
        localStorage.setItem("wall", res.data.walletId);

        if (VehicleCode) {
          navigate({
            pathname: "/carInformation",
            search: `?cus=${cusCode}&vehicleCode=${VehicleCode}`,
          });
        } else {
          createVA();
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error(err.response.data);
      });
  };

  useEffect(() => {
    showPassword ? setInputType("text") : setInputType("password");
  }, [showPassword]);

  useEffect(() => {
    showBvn ? setBvnInputType("number") : setBvnInputType("password");
  }, [showBvn]);

  useEffect(() => {
    getVehicleCode();
  }, []);

  return (
    <section className="bg-black h-[100vh]  py-[1rem]">
      <section
        className={`w-[90%] mx-auto mb-[var(--marginBtwSection)] h-[15%]`}
      >
        <div>
          <img
            src={logo}
            alt="Logo"
            className={`mb-[var(--marginBtwElements)]`}
          ></img>
          <p className="text-white text-[1rem]">
            Hi there, complete your EV sign up journey
          </p>
        </div>
      </section>

      <section className="bg-white h-[85%] rounded-3xl">
        <form className="pt-[44px] mx-[28px]" onSubmit={customerSignUp}>
          <div className="mb-[20px]">
            <label className="flex block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              <p>First Name </p> <p className="text-[#EB3540]">*</p>
            </label>

            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
            ></input>
          </div>

          <div className="mb-[20px]">
            <label className="flex block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              <p>Last Name</p> <p className="text-[#EB3540]">*</p>
            </label>

            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
            ></input>
          </div>

          <div className="mb-[20px]">
            <label className="flex block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              <p>Email address</p> <p className="text-[#EB3540]">*</p>
            </label>

            <input
              type="email"
              name="email"
              placeholder="youremail@email.com"
              className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
            ></input>
          </div>

          <div className="mb-[20px]">
            <label className="flex block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              <p>Phone number</p> <p className="text-[#EB3540]">*</p>
            </label>

            <input
              placeholder="Phone number"
              className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
              value={phone}
              readOnly={true}
              disabled
            ></input>
          </div>

          <div className="mb-[20px]">
            <label className="flex block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              <p>BVN</p> <p className="text-[#EB3540]">*</p>
            </label>

            <div>
              <div className="flex justify-end">
                <img
                  src={Show}
                  className="eye"
                  onClick={() => {
                    setShowBvn((showPassword) => !showPassword);
                  }}
                ></img>
              </div>
              <input
                type={BvninputType}
                name="bvn"
                placeholder="BVN"
                className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
              ></input>
            </div>
          </div>

          <div className="mb-[20px]">
            <label className="block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              DOB
            </label>

            <div>
              <DatePicker
                onChange={onDateChange}
                className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
              />
            </div>

            {/* <input
							type="text"
							placeholder="youremail@email.com"
							className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
						></input> */}
          </div>

          <div className="mb-[20px]">
            <label className="block text-[#344054] text-[0.875rem] font-semibold mb-[0.25rem]">
              Password
            </label>
            <div>
              <div className="flex justify-end">
                <img
                  src={Show}
                  className="eye"
                  onClick={() => {
                    setShowPassword((showPassword) => !showPassword);
                  }}
                ></img>
              </div>

              <input
                type={inputType}
                name="password"
                placeholder="Enter your password"
                className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
              ></input>
            </div>
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
            {isLoading ? <ClipLoader color="white" size={15} /> : "Sign up"}
          </button>
        </form>
      </section>
    </section>
  );
};

export default SignUp;
