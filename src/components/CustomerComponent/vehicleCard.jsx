import React from "react";
import ActiveCar from "../../assets/svg/activeCar.svg";
import { useNavigate } from "react-router";

const VehicleCard = ({vehicle}) => {
	const Navigate = useNavigate();

	const Cid = localStorage.getItem("customerId");

	const viewVehicle = ( e, id , code) =>{
		
		Navigate({
			pathname: '/vehicleDetails',
			search: `?vehicleCode=${code}&vehicleId=${id}`,
		  });
	}

	return (
		<section className=" mb-[20px] " onClick={(e)=>{viewVehicle(e, vehicle.Id, vehicle.VehicleCode
			)}}>
			<div className="p-[1px] border-2 border-[#6DDCFF]  rounded-lg">
				<section className="w-full h-full p-[16px] bg-white ">
					<img src={ActiveCar} alt="Car" />

					<div className="mt-[12px] flex justify-between mb-[12px]">
						<h2 className="text-[#667085] font-semibold text-xs">{vehicle?.VehicleName?.toUpperCase()}</h2>
						<h2 className="text-[#667085] font-semibold text-xs">
							{vehicle?.PlateNumber}
						</h2>
					</div>
					<hr />
					<div className="mt-[20px] flex justify-between">
						<h4 className="text-[#667085]font-normal text-xs">Money spent:</h4>
						<h3 className="text-[#475467] font-semibold text-sm">
							NGN {vehicle?.AmountSpent}.00
						</h3>
					</div>
					<div className="mt-[20px] flex justify-between">
						<h4 className="text-[#667085]font-normal text-xs">
							Energy consumed:
						</h4>
						<h3 className="text-[#475467] font-semibold text-sm">{vehicle?.EnergyConsumed}Kw</h3>
					</div>
				</section>
			</div>
		</section>
	);
};

export default VehicleCard;
