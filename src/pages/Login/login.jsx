import React, { useEffect, useState } from "react";
import StationCharge from "../../assets/images/station-charge.png";
import Star from "../../assets/svg/star.svg";
import Padlock from "../../assets/svg/padlock.svg";
import loginScreen from "../../assets/svg/loginScreen.svg";
import Email from "../../assets/svg/email.svg";
import Dot from "../../assets/svg/activeDot.svg";
import GreyDot from "../../assets/svg/greyDot.svg";
import Logo from "../../assets/svg/logo.svg";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { getToken } from "../../utils/getToken";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Login = () => {
	const Navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [emailAddress, setEmail] = useState("");
	const [password, setPassWord] = useState("");
	const [user, setUser] = useState("");
	const [inputType, setInputType] = useState("password");
	let token = getToken();

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

		if (!emailAddress) {
			toast.error("Enter email address");
			return;
		}

		if (!password) {
			toast.error("Enter password");

			return;
		}

		setIsLoading(true);

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
				setIsLoading(false);

				const response = res.data;
				console.log(response);
				window.localStorage.setItem("user-token", res.data.token);
				window.localStorage.setItem("id", res.data.id);
				const passwordFirstLoginStatus = res.data.passwordFirstLoginStatus;
				setEmail("");
				setPassWord("");
				if (passwordFirstLoginStatus == 0) {
					Navigate("/changePassword");
				} else {
					Navigate("/company");
				}
				toast.success("Welcome");
			})
			.catch((err) => {
				console.log(err);

				toast.error(err.message);
				setIsLoading(false);
				// if (err.response.data.status === 400) {

				// } else if (err.response.data.status === 401) {
				// 	alert("Wrong username or password entered");
				// }
			});
	};
	//end of login function

	const style = {
		background: `linear-gradient(0deg, rgba(16, 24, 40, 0.89), rgba(16, 24, 40, 0.89)), url(${loginScreen})`,
    
	};
	return (
		<section className=" h-[100vh] flex " style={style}>
			<div className="w-[40%] bg-white h-[90%] my-auto mx-auto py-[2.5rem] px-[2rem] ">
				<div className=" flex flex-col justify-center">
					<div className="text-center mb-[var(--marginBtwSection)] ">
						<div className="flex justify-center w-[100%]">
							<img src={Logo} alt="Logo" />
						</div>

						<h3 className="text-black font-medium text-3xl mt-[2rem] pb-[0.75rem]">
							Welcome back!
						</h3>
						<p className="w-[80%] mx-auto font-normal text-base text-gray-500">
							Log in to your account to access all of your charging station data
							and manage your settings
						</p>
					</div>

					<div className="flex justify-center w-[100%] mb-[var(--marginBtwSection)] ">
						<form onSubmit={handleSubmit}>
							<div className="mt-[2rem] mb-[6rem] ">
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
										required
										type="email"
										name="email"
										placeholder="example@address.com"
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

							<div className="">
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
										required
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
							<div className=" ">
								<div className="h-[30px] w-[380px] mt-[3.5rem]  flex items-right justify-end">
									<a
										className=" text-sm text-gray-400   hover:text-gray-900"
										href="#"
									>
										Forgot password?
									</a>
								</div>
								<div>
									<button
										type="submit"
										className={`mt-5 p-4 flex w-96 text- 
                 center text-white rounded-md text- 
                  normal text-xs 
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
										{isLoading ? (
											<ClipLoader color="white" size={15} />
										) : (
											"Login"
										)}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);

	{
		/* // return (
  // <div className="overflow-hidden flex h-[100vh] w-[100%]">
  // 	{/* login side */
	}
	{
		/* // 	<section className="w-[50%] h-[100%] pt-[2rem] bg-white pl-[5rem]">
  // 		<div>
  // 			<img src={Star} alt=""></img>
  // 			<h3 className="text-black font-medium text-3xl mt-[2rem] pb-[0.75rem]">
  // 				Welcome back!
  // 			</h3>
  // 			<p className="w-[80%] font-normal text-base text-gray-500">
  // 				Log in to your account to access all of your charging station data
  // 				and manage your settings
  // 			</p>
  // 		</div>

  // 		<form onSubmit={handleSubmit}>
  // 			<div className="mt-[2rem]">
  // 				<label */
		/* // 					htmlFor="email"
  // 					className="block text-sm font-medium
  //          text-gray-700"
  // 				>
  // 					Email */
	}
	{
		/* // 				</label> */
	}
	// 			<div
	// 					className="flex flex-col items-
	//        start input-icons "
	// 				>
	// 					<img className=" icon" src={Email}></img>
	// 					<input
	// 						required
	// 						type="email"
	// 						name="email"
	// 						placeholder="example@address.com"
	// 						className="mt-1 mb-4 p-3 bg-white
	//            border shadow-sm border-slate-300
	//             placeholder-slate-400
	//              focus:outline-none focus:border-
	//               sky-500 focus:ring-sky-500 block
	//                w-96 rounded-md sm:text-sm
	//                 focus:ring-1 input-field"
	// 						value={emailAddress}
	// 						onChange={(event) => {
	// 							setEmail(event.target.value);
	// 						}}
	// 					/>
	// 				</div>
	// 			</div>
	// 			<div className="mt-[4rem]">
	// 				<label
	// 					htmlFor="password"
	// 					className="block text-sm font-medium
	//          text-gray-700 undefined"
	// 				>
	// 					Password
	// 				</label>
	// 				<div
	// 					className="flex flex-col items-
	//        start input-icons"
	// 				>
	// 					<img className="w-[1rem] icon" src={Padlock}></img>
	// 					<input
	// 						required
	// 						type={inputType}
	// 						name="password"
	// 						placeholder="enter your password"
	// 						className="mt-1 p-3 bg-white border
	//            shadow-sm border-slate-300
	//             placeholder-slate-400
	//              focus:outline-none focus:border-
	//               sky-500 focus:ring-sky-500 block
	//                w-96 rounded-md sm:text-sm
	//                 focus:ring-1 input-field"
	// 						onChange={(event) => {
	// 							setPassWord(event.target.value);
	// 						}}
	// 						value={password}
	// 					/>
	// 				</div>
	// 			</div>
	{
		/* //toggle checkbox */
	}
	{
		/* <div
            className="mt-[3.5rem] ml-[3rem] flex items-center 
                 justify-center text-sm text-gray-400  
                  hover:text-gray-900"
          > mt-[3.5rem] ml-[3rem] flex items-center 
                 justify-center
            <input type="Checkbox" onClick={toggle} />
            <label>show password</label>
            mt-[3.5rem] ml-[3rem] flex items-center 
                 justify-center
          </div> */
	}
	{
		/* <div className=" ">
						<div className="h-[30px] w-[380px] mt-[3.5rem]  flex items-right justify-end">
							<a
								className=" text-sm text-gray-400   hover:text-gray-900"
								href="#"
							>
								Forgot password?
							</a>
						</div>
						<div>
							<button
								type="submit"
								className={`mt-5 p-4 flex w-96 text- 
                 center text-white rounded-md text- 
                  normal text-xs 
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
								{isLoading ? <ClipLoader color="white" size={15} /> : "Login"}
							</button>
						</div>
					</div>
				</form>
			</section> */
	}

	{
		/* image side */
	}
	{
		/* <section className="w-[50%] bg-[#101828]">
				<div className="stationCharge h-[20rem] ml-[3rem]">
					<img
						className="mt-[4rem] pt-[1.5rem] mb-[4rem] px-[9rem] w-[40rem]"
						src={StationCharge}
						alt=""
					/>
				</div>
				<div>
					<div className="pt-[1.5rem] flex justify-center align-center">
						<div className="pl-[6rem] pr-[0.5rem]">
							<h3 className="font-semibold text-lg text-white text-center">
								Monitor your station charge
							</h3>
							<p className="font-normal text-sm text-white text-center pt-[0.75rem] pb-[3rem]">
								Manage and monitor your EV charging stations from one central
								location. Get real-time data on charging usage, set pricing and
								payment options, and customize user settings to fit your unique
								needs.
							</p>
						</div>
					</div>
					<div className="flex justify-center align-center pl-[3rem]">
						<div className=" w-[8rem] py-[0.75rem] px-[2.5rem] rounded-2xl flex justify-between bg-[#344054]    mb-[1.5rem]">
							<img className="w-[0.5rem]" src={Dot}></img>
							<img className="" src={GreyDot}></img>
							<img src={GreyDot}></img>
						</div>
					</div>
				</div>
			</section> */
	}
	// </div>
	// );
};

export default Login;
