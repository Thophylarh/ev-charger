import React from "react";
import logo from "../../assets/svg/logo.svg";

import DshboardB from "../../assets/svg/dshboardb.svg";
import DropdownIcon from "../../assets/svg/dropdown.svg";
import blackDropdownIcon from "../../assets/svg/blackDropdown.svg";
import CompanyLogo from "../../assets/svg/companyLogo.svg";

export default function CompanyNavBar() {
	return (
		<nav className={`bg-black h-[5rem]`}>
			<div
				className={`w-[90%] m-auto py-[1rem] flex  items-center justify-between`}
			>
				<div className={`flex `}>
					<div className="mr-[var(--horizontalMargin)]">
						<img src={logo} alt="EVcharger logo" />
					</div>

					<div className="flex">
						<div className="mr-[var(--horizontalMargin)] text-center font-[var(--fontSize)] flex items-center py-[0.5rem]  px-[0.75rem] bg-[var(--bgGrey)] text-[var(--greenTextColor)] rounded-[var(--borderRadius)]">
							<img
								className="mr-[0.5rem] "
								src={DshboardB}
								alt="Dashboard Overview"
							/>{" "}
							<p className=""> Overview</p>
						</div>

						<div className=" mr-[var(--horizontalMargin)] text-center font-[var(--fontSize)] flex align-middle py-[0.5rem]  px-[0.75rem] text-[var(--navTextColor)] rounded-[var(--borderRadius)] ">
							{/* <img
								className="mr-[0.5rem] "
								src={DshboardB}
								alt="Dashboard Overview"
							/> */}
							<p>EV chargers</p>
						</div>

						<div className=" mr-[var(--horizontalMargin)] text-center font-[var(--fontSize)] flex align-middle py-[0.5rem]  px-[0.75rem] text-[var(--navTextColor)] rounded-[var(--borderRadius)] ">
							{/* <img
								className="mr-[0.5rem] "
								src={DshboardB}
								alt="Dashboard Overview"
							/> */}
							<p>Billing & pricing </p>
						</div>

						<div className=" mr-[var(--horizontalMargin)] text-center font-[var(--fontSize)] flex align-middle py-[0.5rem]  px-[0.75rem] text-[var(--navTextColor)] rounded-[var(--borderRadius)] ">
							<p className="mr-[0.5rem] ">Report </p>

							<img src={DropdownIcon} alt="Dropdown Icon" />
						</div>

						<div className=" mr-[var(--horizontalMargin)] text-center font-[var(--fontSize)] flex align-middle py-[0.5rem]  px-[0.75rem] text-[var(--navTextColor)] rounded-[var(--borderRadius)] ">
							{/* <img
								className="mr-[0.5rem] "
								src={DshboardB}
								alt="Dashboard Overview"
							/> */}
							<p>Live Camera</p>
						</div>
					</div>
				</div>

				<div>
					<div
						className={`bg-white flex align-middle px-[1rem] py-[0.5rem] w-full  rounded-[var(--borderRadius)] `}
					>
						<img
							src={CompanyLogo}
							alt="Company logo"
							className="w-[1.5rem] h-[1.5rem] mr-[0.75rem]"
						/>
						<p 	className=" mr-[0.75rem]">Sterling HQ</p>
						<img src={blackDropdownIcon} alt="Dropdown Icon" />
					</div>
				</div>
			</div>
		</nav>
	);
}
