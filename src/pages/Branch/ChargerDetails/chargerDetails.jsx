import React from "react";
import ForwardArrow from "../../../assets/svg/forwardArrow.svg";
import PowerButton from "../../../assets/svg/power.svg";
import BarChart from "../../../Graphs/Chart/barChart";
import ActiveCharger from "../../../assets/svg/activeCharger.svg";
import energyConsumed from "../../../assets/svg/energyConsumed.svg";
import OperationHours from "../../../assets/svg/operationHours.svg";
import BillingType from "../../../assets/svg/billingType.svg"
import RunningTime from   "../../../assets/svg/runningTime.svg";
import Column from "../../../utils/columns";
import { Table } from "antd";

export default function Details() {
  return (
    <section>

      <section className="mb-[var(--marginBtwSection)]">
        <div className="flex justify-between mb-[0.5rem]">
          <div className="flex justify-between ">

            <h4 className="pr-[12px]">EV Chargers</h4>

            <img
              src={ForwardArrow}
              alt="next arrow"
              className="pr-[12px]"
            ></img>

            <h4 className="pr-[12px]">Keke Charger</h4>

          </div>

          <div className="flex justify-between">

            <button className="flex">
              <img src={PowerButton} alt="Power Button" />

              <p className=" text-[var(--error500)]">Turn off charger</p>
            </button>

            <button className="border border-[1px] border-solid border-[var(--grey900)] text--[var(--grey900)] ml-[1rem]">
              Charger settings
            </button>

          </div>
        </div>

        <p className="subHeader">
          Monitor your charger revenue, status, and energy consumption
        </p>

      </section>

        <section className="mb-[var(--marginBtwSection)]">
            <div className="grid grid-cols-5 ">
                <div className="revenueBlock ">
                    <p>CHARGER REVENUE</p>
                    <h5>NGN 300,000.<sup>00</sup></h5>
                </div>

                <div className="revenueBlock">
                    <p>CHARGE COUNT</p>
                    <h5>16</h5>
                </div>

                <div className="revenueBlock ">
                    <p>LAST CHARGE</p>
                    <h5>20mins ago</h5>
                </div>

                <div className="revenueBlock">
                    <p>CHARGER TYPE</p>
                    <h5>CICE</h5>
                </div>

                <div className="totalRevenueBlock ">
                    <h3>ENERGY CONSUMPTION</h3>
                    <h5>500,000 <sup>kw</sup> </h5>
                </div>

            </div>
        </section>

        <section className={`mb-[var(--marginBtwSection)] max-h-[257.5rem]`}>
				<div className="grid grid-cols-12 gap-4 h-[100%]">
					<div className="col-span-9">
						<BarChart />
					</div>
					<div className="col-span-3">
						<div className={`mb-[var(--marginBtwElements)]`}>
							<h3>CHARGERS OPERATION INFO</h3>
						</div>

						<div
							className={`flex justify-between bg-[var(--grey50)] py-[1.5rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
						>
                            <div>
							<h3 className="text-[0.875rem] mb-[1rem]">
								OPERATION HOURS
							</h3>

							<h6 className="mb-[var(--marginBtwElements)]">12:00am - 8:00pm</h6>

                            <h3 className="text-[#007EF2]">EDIT</h3>
                            </div>
                            <div>
                                <img src={OperationHours} alt="Operation Hours" />
                            </div>
						</div>

						<div
							className={` flex justify-between items-center bg-[var(--grey50)] py-[1.5rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
						>
							<div>
								<h3 className="text-[0.875rem] mb-[1.25rem]">
                                Billing type
								</h3>

								<h6 className="text-[var(--grey600)] text-2xl">Default (energy)</h6>
							</div>
                            <div>
							<img src={BillingType} alt="Billing Type" />
                            </div>
						</div>

						<div
							className={`flex justify-between items-center  bg-[var(--grey50)] py-[1.5rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
						>
							<div>
								<h3 className="text-[0.875rem] mb-[1.25rem]">
                                Running time
								</h3>

								<h6 className="text-[var(--grey600)] text-2xl">21hrs</h6>
							</div> 

							<img src={RunningTime} alt="Running Time"  />
						</div>
					</div>
				</div>
			</section>

            <section>
            <div className={`mb-[var(--marginBtwElements)] `}>
					<h3>LAST 10 TRANSACTIONS</h3>
				</div>

				<div>
					{/* <Table
						columns={Column}
						pagination={false}
						dataSource={transaction}
					/> */}
				</div>
            </section>


    </section>
  );
}
