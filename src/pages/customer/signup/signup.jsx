import React, { useState } from "react";

import { DatePicker } from "antd";
import axios from "axios";

import { toast } from "react-toastify";
import logo from "../../../assets/svg/logo.svg";
import "../signup/style.css";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";

const SignUp = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [DOB, setDOB] = useState();

	const onDateChange = async (date, dateString) => {
		console.log(dateString);
		setDOB(dateString);
	};

	const customerSignUp = (e) => {
		e.preventDefault();
		setIsLoading(true);

		let firstName = e.target.firstName?.value;
		let lastName = e.target.lastName?.value;
		let email = e.target.email?.value;
		let phone = e.target.phone?.value;
		let password = e.target.password?.value;

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
		};
		

		axios
			.post(`http://evapi.estations.com/Customers/create-customer`, data, {
				headers: { "Content-Type": "application/json" },
				withCredentials: false,
			})
			.then((res) => {
				console.log(res.data);
				setIsLoading(false);
				let cusCode =  res?.data?.customerCode
				navigate({
					pathname: '/carInformation',
					search: `?cus=${cusCode}&vehicleCode=abcdef12345`,
				    });
			
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err);
				toast.error(err.response.data);
			});
	};

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
						<label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
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
						<label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
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
						<label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
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
						<label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
							<p>Phone number</p> <p className="text-[#EB3540]">*</p>
						</label>

						<input
							type="phone"
							name="phone"
							placeholder="Phone number"
							className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
						></input>
					</div>

					<div className="mb-[20px]">
						<label className="block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
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
						<label className="block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
							Password
						</label>

						<input
							type="text"
							name="password"
							placeholder="Enter your password"
							className=" w-[100%] border border-[1px] border-[#D0D5DD] p-[16px] rounded-lg"
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
						{isLoading ? <ClipLoader color="white" size={15} /> : "Sign up"}
					</button>
				</form>
			</section>
		</section>
	);
};

export default SignUp;
