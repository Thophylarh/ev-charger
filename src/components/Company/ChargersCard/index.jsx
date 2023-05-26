import React from "react";
import ChargerImg from "../../../assets/svg/Charger.svg";

import activeStatusImg from "../../../assets/svg/activeStatus.svg";
import DeactivatedStatus from "../../../assets/svg/deactivatedStatus.svg"
import moment from "moment/moment";
import { useNavigate } from "react-router";

export default function ChargersCard({charger, station, company}) {
	const Navigate = useNavigate();
	


	const viewCharger = (id, e) =>{
      
        // window.localStorage.setItem("stationId", id);
      
        // Navigate("/station")
        Navigate({
          pathname: '/station/details',
          search: `?stationId=${station}&companyId=${company}&chargerId=${id}`,
        });
      }
	
	return (
		<div className={`cursor-pointer bg-white py-[1.5rem] px-[1.75rem]  border border-[1px] border-[var(--grey100)]`} onClick={(e)=>{viewCharger(charger.Id, e)}}>
			<div className="flex ">
				<div className="mr-[1rem]">
					<img
						src={ChargerImg}
						alt="EV charger"
						className="w-[2.8125rem]  mt-[1.25rem]"
					/>
				</div>

				<div className="w-full ">
					<div className="flex justify-between items-center mb-[1rem] border-b-[1px] border-grey-100 pb-[0.75rem]">
						<h3> {charger.ChargerName?.toUpperCase()}</h3>

						{charger.ActiveStatus === "1" ? 
						<img src={activeStatusImg} alt="Charger is active" />
						 : 
						 <img src={DeactivatedStatus} alt="Charger is disconnected" />
						 }
						
					</div>

					<div>
						<div className="flex justify-between items-center mb-[0.75rem] ">
							<h3>Revenue:</h3>

							<h5 className="text-sm">
								NGN {charger.Revenue?.toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}
							{/* .<sup>00</sup> */}
							</h5>
						</div>

						<div className="flex justify-between items-center mb-[0.75rem] ">
							<h3>Last charge: </h3>

							<h5 className="text-sm">{  moment(new Date(charger.LastCharged)).fromNow()}</h5>
						</div>

						<div className="flex justify-between items-center mb-[0.75rem] ">
							<h3>Energy consumed: </h3>

							<h5 className="text-sm">
								{charger.EnergyConsumed?.toLocaleString(undefined, {
								minimumFractionDigits: 2,
								maximumFractionDigits: 2,
							})}<sup>Kw</sup>
							</h5>
						</div>

		

						<div className="flex justify-between items-center mb-[0.75rem] ">
							<h3>Type: </h3>

							<h5 className="text-[0.875rem]">CICE</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
