import React from "react";


export default function DCBilling({ openModal,  }) {


	

	return (
		<div className={`mb-[var(--marginBtwElements)]`}>
			<div>
				<h3 className={`text-[var(--primaryGreen500)] mb-[0.5rem]`}>
					DC PRICESUMMARY
				</h3>
			</div>
			<div>
				<div className=" grid grid-cols-3  ">
					<div className="revenueBlock">
						<h3>WHEN ON GRID</h3>

						<h5>
							200
						</h5>

						<button
							className="text-[var(--blueLink)]"
							onClick={(e) =>
								openModal("DC", "GRID" ,200)
							}
						>
							{" "}
							Edit price{" "}
						</button>
					</div>

					<div className="revenueBlock">
						<h3>WHEN ON UTILITY</h3>

						<h5>
							NGN{" "}
							
							/KWH
						</h5>

						<button
							className="text-[var(--blueLink)]"
							onClick={(e) =>
								openModal("DC", "UTILITY",200)
							}
						>
							{" "}
							Edit price{" "}
						</button>
					</div>

					<div className="revenueBlock">
						<h3>WHEN ON GREEN ENRGY</h3>

						<h5>
							NGN{" "}
						
							/KWH
						</h5>

						<button
							className="text-[var(--blueLink)]"
							onClick={(e) =>
								openModal("DC", "GREEN", 200)
							}
						>
							{" "}
							Edit price{" "}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
