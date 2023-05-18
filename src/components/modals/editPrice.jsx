import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "../../lib/axiosInterceptor";
import check from "../../assets/svg/check.svg";

import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const EditPrice = ({ closeModal, details, setReloadPage }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams] = useSearchParams();

	let stationId = searchParams.get("stationId");
	let companyId = searchParams.get("companyId");

	const setBilling = (pass, price) => {
		let data = {
			billingType: details.billingType,
			chargerType: details.type,
			costPerUnitCharge: price,
			companyId,
			stationId,
		};

		axios
			.post(`/Billings/create?password=${pass}`, data)
			.then((res) => {
				toast.success("Price updated successfully");
				closeModal(false);
			})
			.catch((err) => {
				toast.error(err.response.data);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		const password = e.target.password?.value;
		const price = e.target.price?.value;
		if (!price) {
			toast.error("Please enter a price");
			setIsLoading(false);
			return;
		}
		if (!password) {
			toast.error("Please enter your password");
			setIsLoading(false);
			return;
		}

		setBilling(password, price);
		setReloadPage(true);

		// setBmsGreen(price);
		// setOldPrice(0);
	};

	return (
		<>
			<div className="mb-[20px]">
				<div className="flex justify-center">
					<img src={check} alt="Check" />
				</div>
				<div className="flex justify-center">
					<p className="text-[#101828] font-semibold text-[18px]">Edit price</p>
				</div>
			</div>

			<div>
				<h2 className="text-[#C9A464] font-semibold text-[12px] mb-[20px]">
					{details.type} {details.billingType} PRICE
				</h2>

				{/* <h3 className="text-[#667085] font-semibold text-[12px] mb-[20px]">WHEN ON GRID</h3>

        <h4 className="text-[#101828] font-medium text-[20px] mb-[20px]">NGN 120.90/KW</h4> */}
			</div>

			<form onSubmit={handleSubmit}>
				<div>
					<label className="block font-semibold text-[#344054] text-[0.875rem] mb-[8px]">
						CURRENT PRICE
					</label>
					<input
						defaultValue={details.prevPrice}
						className="w-[100%] p-[0.875rem] border border-[#D0D5DD] rounded-lg mb-[20px]"
						readOnly
						disabled
					/>
				</div>

				<div>
					<label className="block font-semibold text-[#344054] text-[0.875rem] mb-[8px]">
						NEW PRICE
					</label>
					<input
						name="price"
						type="number"
						step='any'
						placeholder="Enter new price"
						className="w-[100%] p-[0.875rem] border border-[#D0D5DD] rounded-lg mb-[20px]"
						required
					/>
				</div>

				<div>
					<label className="block font-semibold text-[#344054] text-[0.875rem] mb-[8px]">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="Enter password"
						className="w-[100%] p-[0.875rem] border border-[#D0D5DD] rounded-lg mb-[20px]"
						required
					/>
				</div>

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
					{isLoading ? <ClipLoader color="white" size={15} /> : "Change Price"}
				</button>
			</form>
		</>
	);
};

export default EditPrice;
