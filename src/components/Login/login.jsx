import React, { useState } from "react";
import StationCharge from "../../assets/images/station-charge.png";
import Star from "../../assets/svg/star.svg";
import Padlock from "../../assets/svg/padlock.svg";
import Email from "../../assets/svg/email.svg";
import Dot from "../../assets/svg/activeDot.svg";
import GreyDot from "../../assets/svg/greyDot.svg";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const Navigate = useNavigate();
  const [emailAddress, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [user, setUser] = useState("");
  const [inputType, setInputType] = useState("password");

  // toggle password
  const toggle = () => {
    if (inputType === "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
  };

  // login function
  const url = "http://evapi.estations.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        url +
          "/Companies/login?emailAddress=" +
          emailAddress +
          "&password=" +
          password,
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      )
      .then((res) => {
        const response = res.data;
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("id", res.data.id);
        setEmail("");
        setPassWord("");
        Navigate("/dash");
        
      })
      .catch((err)=>{
        console.log(err.response.data.status)
        if(err.response.data.status === 400){
          alert("Missing username or password")
        }else if (err.response.data.status === 401){
          alert("Wrong username or password entered")
        }
      })
      ;
  };
  //end of login function

  return (
    <div className="overflow-hidden flex">
      {/* login side */}
      <section className="w-[50%] pt-[4rem] bg-white pl-[5rem]">
        <div>
          <img src={Star} alt=""></img>
          <h3 className="text-black font-medium text-4xl mt-[3rem] pb-[0.75rem]">
            Welcome back!
          </h3>
          <p className="w-[80%] font-normal text-lg text-gray-500">
            Log in to your account to access all of your charging station data
            and manage your settings
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-[3.5rem]">
            <label
              htmlFor="email"
              className="block text-sm font-medium 
                 text-gray-700"
            >
              Email
            </label>
            <div
              className="flex flex-col items- 
               start input-icons "
            >
              <img className=" icon" src={Email}></img>
              <input
                type="email"
                name="email"
                placeholder="akinromade@example.com"
                className="mt-1 mb-4 p-3 bg-white 
                   border shadow-sm border-slate-300 
                    placeholder-slate-400 
                     focus:outline-none focus:border- 
                      sky-500 focus:ring-sky-500 block 
                       w-96 rounded-md sm:text-sm 
                        focus:ring-1 input-field"
                value={emailAddress}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="mt-[4rem]">
            <label
              htmlFor="password"
              className="block text-sm font-medium 
                 text-gray-700 undefined"
            >
              Password
            </label>
            <div
              className="flex flex-col items- 
               start input-icons"
            >
              <img className="w-[1rem] icon" src={Padlock}></img>
              <input
                type={inputType}
                name="password"
                placeholder="enter your password"
                className="mt-1 p-3 bg-white border 
                   shadow-sm border-slate-300 
                    placeholder-slate-400 
                     focus:outline-none focus:border- 
                      sky-500 focus:ring-sky-500 block 
                       w-96 rounded-md sm:text-sm 
                        focus:ring-1 input-field"
                onChange={(event) => {
                  setPassWord(event.target.value);
                }}
                value={password}
              />
            </div>
          </div>
          {/* //toggle checkbox */}
          <div
            className="mt-[3.5rem] ml-[3rem] flex items-center 
                 justify-center text-sm text-gray-400  
                  hover:text-gray-900"
          >
            <input type="Checkbox" onClick={toggle} />
            <label>show password</label>
          </div>
          <div className="">
            <a
              className="mt-[3.5rem] ml-[3rem] flex items-center 
                 justify-center text-sm text-gray-400  
                  hover:text-gray-900"
              href="#"
            >
              Forgot password?
            </a>
            <button
              type="submit"
              className="mt-8 p-4 flex w-96 text- 
                 center text-white rounded-md text- 
                  normal text-xs 
                  font-semibold tracking-widest text- 
                   white uppercase transition ease-in- 
                    out bg-gray-900 border border- 
                     transparent active:bg-gray-900 
                      false justify-center 
                       hover:scale-105 duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </section>

      {/* image side */}
      <section className="w-[50%] bg-[#FCFCFD]">
        <div>
          <img
            className="mt-[4rem] mb-[4rem] px-[10rem]"
            src={StationCharge}
            alt=""
          />
        </div>
        <div className="pl-[6rem] pr-[0.5rem]">
          <h3 className="font-semibold text-2xl text-gray-900 text-center">
            Monitor your station charge
          </h3>
          <p className="font-normal text-base text-grey-700 text-center pt-[0.75rem] pb-[3rem]">
            Manage and monitor your EV charging stations from one central
            location. Get real-time data on charging usage, set pricing and
            payment options, and customize user settings to fit your unique
            needs.{" "}
          </p>
        </div>
        <div className=" w-[8rem] py-[0.75rem] px-[2.5rem] rounded-2xl flex justify-between bg-gray-100 mb-[1rem] mx-[20rem]">
          <img className="w-[0.5rem]" src={Dot}></img>
          <img className="" src={GreyDot}></img>
          <img src={GreyDot}></img>
        </div>
      </section>
    </div>
  );
};

export default Login;
