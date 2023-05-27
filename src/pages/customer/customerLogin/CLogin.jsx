import React, { useState, useEffect } from "react";
import "./styles.css";
import logo from "../../../assets/svg/logo.svg";
import Show from "../../../assets/svg/showEye.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";

const Clogin = () => {
	const Navigate = useNavigate();

	const [phone, setPhone ] = useState()

	const [password, setPassWord] = useState()

	const [showPassword, setShowPassword] = useState(false);

	const [inputType, setInputType] = useState("password");

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		showPassword ? setInputType("text") : setInputType("password");
	  }, [showPassword]);

	const url = "http://evapi.estations.com";

	const handleSubmit = (e) =>{
		e.preventDefault();
		
		if (!phone) {
			toast.error("Enter phone number");
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
			  "/Customers/login?phoneNumber=" +
			  phone +
			  "&password=" +
			  password,
			{},
			{
			  headers: { "Content-Type": "application/json" },
			  withCredentials: false,
			}
		  )
		  .then((res)=>{
			localStorage.setItem("user-token", res.data.token);
			localStorage.setItem("customerId", res.data.id);
			setIsLoading(false);
			setPhone("");
			setPassWord("");
			Navigate("/home");
			Navigate({
				pathname: '/home',
				search: `?customerId=${res.data.id}`
			  })
			toast.success("Welcome");
		  }

		  )
		  .catch((err) => {
			console.log(err);
	
			toast.error(err.response.data.title);
			setIsLoading(false);
			
		  });
	}


	return (
	<section className="mobileBody">
        	<section className="top h-[100vh] p-[8px]">
			<section className=" h-[20%] flex justify-center align-center">
				<img src={logo} alt="ev logo" className="w-[20%]" />
			</section>

			<section className="bg-white h-[78%] rounded-lg py-[2.5rem] px-[1.25rem] ">
				<h1 className="Wheading">Welcome back</h1>

				<p className="text-[16px] font-normal text-grey-700">
					Login to access your ev account
				</p>

				<section className="mt-[4rem]">
					<form onSubmit={handleSubmit}>
						<div className="mb-[20px]">
							<label className="block text-grey-700 text-[14px] font-semibold mb-[8px]">
								Phone number:
							</label>
							<input
								type="text"
								name="phoneNo"
								placeholder="Enter your phone number "
								className="border p-[14px] rounded-lg w-[100%]"
								value={phone}
								onChange={(event)=>{setPhone(event.target.value)}}
							/>
						</div>

						<div className="mb-[12px]">
							<label className="block text-grey-700 text-[14px] font-semibold mb-[8px]">
								Password:
							</label>
							<div>
								<div className="flex justify-end">
									<img src={Show} className="eye"
									 onClick={() => {
										setShowPassword((showPassword) => !showPassword);
										
									  }}
									></img>
								</div>
								<input
									type={inputType}
									name="password"
									value={password}
									placeholder="Enter your password"
									className="border p-[14px] rounded-lg w-[100%]"
									onChange={(event)=>{setPassWord(event.target.value)}}
								/>
							</div>
						</div>

						<p className="font-normal text-[12px] text-[#B27203] flex justify-end mb-[28px]">
							Forgot password?
						</p>

						<button className="border py-[16px] w-[100%] bg-black rounded-lg text-white">
							Sign in
						</button>
					</form>
				</section>
			</section>
		</section>
    </section>
	);
};

export default Clogin;
