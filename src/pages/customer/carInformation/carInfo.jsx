import React, { useState } from "react";

import axios from "axios";

import logo from "../../../assets/svg/logo.svg";
import { toast } from "react-toastify";

const CarInfo = () => {
	const [isLoading, setIsLoading] = useState(false);

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
			customerCode: "",
		};

		axios
			.post(`http://evapi.estations.com/customers/add-customer-vehicle`, data, {
				headers: { "Content-Type": "application/json" },
				withCredentials: false,
			})
			.then((res) => {
				console.log(res.data);
				setIsLoading(false);
				//  toast.success("Account created successfully, please fill out the next form");
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
						<label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
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
						<label className=" flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
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
						<label className="flex block text-[#344054] text-[14px] font-semibold mb-[0.25rem]">
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

					<button className="bg-black w-[100%] py-[16px] text-white rounded-lg mb-[4rem]">
						Continue
					</button>
				</form>
			</section>
		</section>
	);
};

export default CarInfo;
