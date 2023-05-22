import React from "react";
import InactiveCar from "../../../assets/svg/inactiveCar.svg";
import VehicleCard from "../../../components/CustomerComponent/vehicleCard";



const MyVehicles = () =>{

    let style2 = {
		backgroundImage: `url(${InactiveCar})`,
		backgroundPosition: "120% bottom",
	};

    return (
        <div className="w-[90%] mx-auto pt-[28px]">
            	<section className="grid grid-cols-12 gap-2 mb-[var(--marginBtwSection)]">
				<div
					style={style2}
					className={` bg-no-repeat col-span-5 bg-[var(--grey50)] w-[100%] rounded-2xl py-4 px-4`}
				>
					<p className="text-xs mb-3 text-[var(--grey900)] font-medium">
						My vehicles
					</p>

					<h5 className="text-[1.125rem]   mb-3">2</h5>
				</div>

				<div
					className={`col-span-7 bg-[var(--grey50)] w-[100%] rounded-lg py-4 px-4`}
				>
					<p className="text-xs mb-3 text-[var(--grey900)] font-medium">
						Money spent
					</p>

					<h5 className="text-[1.125rem]   mb-3">NGN 20,000.00</h5>

					<p className="text-xs text-[var(--grey600)] font-bold">3,000.00 KW</p>
				</div>
			</section>

          
                <VehicleCard/>
                <VehicleCard/>

            
            
        </div>
    )
}

export default MyVehicles;