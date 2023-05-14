import React from "react";

export default function StationBilling() {
	return (
		<section>
			<section className={`mb-[var(--marginBtwSection)]`}>
				<div className={`flex justify-between items-center `}>
					<div>
						<h4 className="mb-[8px]">Billing</h4>
						<p className="subHeader">Set your charger billing and price</p>
					</div>
					<div>
						<button className="border-2  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey900)]">
							General price change{" "}
						</button>
					</div>
				</div>
			</section>

			<section className={`mb-[var(--marginBtwSection)]`}>
				<div className=" grid grid-cols-12  gap-4  ">
					<div className="  col-span-9">
						<div className={`mb-[var(--marginBtwElements)]`}>
							<div>
								<h3 className={`text-[var(--goldColor)] mb-[0.5rem]`}>
									BMS PRICE/KW SUMMARY
								</h3>
							</div>
							<div>
								<div className=" grid grid-cols-3  ">
									<div className="revenueBlock">
										<h3>WHEN ON GRID</h3>

										<h5>NGN 252.00/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON UTILITY</h3>

										<h5>NGN 268.08/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON GREEN ENRGY</h3>

										<h5>NGN 243.02/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className={`mb-[var(--marginBtwElements)]`}>
							<div>
								<h3 className={`text-[var(--primaryGreen500)] mb-[0.5rem]`}>
									AC PRICESUMMARY
								</h3>
							</div>
							<div>
								<div className=" grid grid-cols-3  ">
									<div className="revenueBlock">
										<h3>WHEN ON GRID</h3>

										<h5>NGN 252.00/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON UTILITY</h3>

										<h5>NGN 268.08/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON GREEN ENRGY</h3>

										<h5>NGN 243.02/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className={`mb-[var(--marginBtwElements)]`}>
							<div>
								<h3 className={`mb-[0.5rem]`}>DC PRICE SUMMARY</h3>
							</div>
							<div>
								<div className=" grid grid-cols-3  ">
									<div className="revenueBlock">
										<h3>WHEN ON GRID</h3>

										<h5>NGN 252.00/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON UTILITY</h3>

										<h5>NGN 268.08/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON GREEN ENRGY</h3>

										<h5>NGN 243.02/KW</h5>

										<button className="text-[var(--blueLink)]">
											{" "}
											Edit price{" "}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="  col-span-3 items-start">
						<h3 className={`mb-[var(--marginBtwElements)]`}>
							PRICE CHANGE HISTORY
						</h3>

						<div>
							<div
								className={`w-full h-[9rem] bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
							>
								<div className={`flex justify-between items-center mb-4`}>
									<h6 className={`text-[var(--goldColor)] text-sm`}>BMS ON GRID</h6>

									<p className={`text-xs text-[var(--grey500)]`}>
										{" "}
										23- 06 - 2023
									</p>
								</div>

								<div className={`flex justify-between items-center`}>
									<div className="text-[var(--grey600)]">
										<h6 className={` font-medium text-base`}>NGN200.00kw</h6>
										<p className={`text-xs`}>old price</p>
									</div>

									<p
										className={`text-[1.25rem] mt-[-1.5rem]  text-[var(--grey500)]`}
									>
										{" "}
										-{" "}
									</p>

									<div className="text-[var(--primaryGreen500)]">
										<h6 className={` font-medium text-base`}>NGN210.50kw</h6>
										<p className={`text-xs`}>new price</p>
									</div>
								</div>
							</div>

							<div
								className={`w-full h-[9rem] bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
							>
								<div className={`flex justify-between items-center mb-4`}>
									<h6 className={`text-[var(--goldColor)] text-sm` }>BMS ON GREEN ENERGY</h6>

									<p className={`text-xs text-[var(--grey500)]`}>
										{" "}
										23- 06 - 2023
									</p>
								</div>

								<div className={`flex justify-between items-center`}>
									<div className="text-[var(--grey600)]">
										<h6 className={` font-medium text-base`}>NGN200.00kw</h6>
										<p className={`text-xs`}>old price</p>
									</div>

									<p
										className={`text-[1.25rem] mt-[-1.5rem]  text-[var(--grey500)]`}
									>
										{" "}
										-{" "}
									</p>

									<div className="text-[var(--primaryGreen500)]">
										<h6 className={` font-medium text-base`}>NGN250.00kw</h6>
										<p className={`text-xs`}>new price</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
