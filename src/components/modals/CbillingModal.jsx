import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "../../lib/axiosInterceptor";
import check from "../../assets/svg/check.svg";

import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const EditPrice = ({closeModal, details, stations}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [selectValue, setSelectValue] = useState([])


	const companyId = localStorage.getItem("id");

	const handleChange = (e) =>{
		let va = e.target.value;
		console.log(va)
		let vas = [];
		vas.push(va)

		setSelectValue(vas)
		
	}

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
		// setReloadPage(true);

		// setBmsGreen(price);
		// setOldPrice(0);
	};

	const setBilling = (pass, price) => {
		let data = {
			billingType: details.billingType,
			chargerType: details.type,
			costPerUnitCharge: price,
			companyId,
			stationIds: selectValue,
			updatedBy: companyId
		};

		axios
			.post(`/Billings/create?requestType=company&password=${pass}`, data)
			.then((res) => {
				toast.success("Price updated successfully");
				closeModal(false);
			})
			.catch((err) => {
				toast.error(err.response.data);
			});
	};

	return (
		<>
			<div className="mb-[20px]">
				
					<h2 className="text-[#101828] font-semibold text-[18px]">Change Price</h2>
		
					<p className="text-[#667084] text-[14px] font-normal">change the billing price of your station</p>
				
			</div>

			<form onSubmit={handleSubmit}>
				<div>
					<label className="block font-semibold text-[#344054] text-[0.875rem] mb-[8px]">
					Old price on Grid
					</label>
					<input
						defaultValue={0}
						className="w-[100%] p-[0.875rem] border border-[#D0D5DD] rounded-lg mb-[20px]"
						readOnly
						disabled
					/>
				</div>

				<div>
					<label className="block font-semibold text-[#344054] text-[0.875rem] mb-[8px]">
					New price on Grid
					</label>
					<input
						name="price"
						type="number"
						step='any'
						placeholder="0.00"
						className="w-[100%] p-[0.875rem] border border-[#D0D5DD] rounded-lg mb-[20px]"
						required
					/>
				</div>

				<div>
					<label className="block font-semibold text-[#344054] text-[0.875rem] mb-[8px]">
					Select Stations
					</label>
					<select className="w-[100%] border p-[0.875rem] border-[#D0D5DD] rounded-lg mb-[10px]"
					  value={selectValue} 
					  onChange={handleChange} 
					> 
						
						<option>Select Stations</option>
						{stations?.map((station)=>(
							<option value={station.Id}>{station.StationName}</option>
						))}
						

					</select>
					<p className="border border-2 border-[#AFAFAF] p-[0.25rem] w-[40%] rounded-3xl mb-[20px]">Lagos Station</p>
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
