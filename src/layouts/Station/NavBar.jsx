import React, { useEffect, useState } from "react";
import logo from "../../assets/svg/logo.svg";

import DshboardB from "../../assets/svg/dshboardb.svg";
import DropdownIcon from "../../assets/svg/dropdown.svg";
import blackDropdownIcon from "../../assets/svg/blackDropdown.svg";
import CompanyLogo from "../../assets/svg/companyLogo.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function StationNavBar() {
	const [path, setPath] = useState("");
	const id = localStorage.getItem("stationId");
	const compId = localStorage.getItem("id");

	const location = useLocation();

	let activeLink =
		" ease-in-out mr-[1.25rem] text-center text-sm  flex items-center py-[0.5rem]  px-[1rem] bg-[var(--grey900)] text-[var(--primaryGreen500)] rounded-[var(--borderRadius)]";

	let notActive =
		"ease-in-out mr-[1.25rem] text-center text-sm flex align-middle py-[0.5rem]  px-[0.75rem] text-[var(--grey300)] rounded-[var(--borderRadius)] ";
	useEffect(() => {
		setPath(location.pathname);
	}, [location]);

	return (
		<nav className={`bg-black h-[5rem] fixed w-full top-0 z-10  `}>
			<div
				className={`w-[90%] m-auto py-[1rem] flex  items-center justify-between`}
			>
				<div className={`flex `}>
					<NavLink
						to={{
							pathname: "/company",
						}}
					>
						<div className="mr-[1.5rem]">
							<img src={logo} alt="EVcharger logo" />
						</div>
					</NavLink>

					<div className="flex pt-1">
						<NavLink
							to={{
								pathname: "/station",
								search: `?stationId=${id}&companyId=${compId}`,
							}}
						>
							<div
								className={` ${path === "/station" ? activeLink : notActive}`}
							>
								{path === "/station" && (
									<img
										className="mr-[0.5rem] "
										src={DshboardB}
										alt="Dashboard Overview"
									/>
								)}
								<p className=""> Overview</p>
							</div>
						</NavLink>

						<NavLink
							to={{
								pathname: "/station/evChargers",
								search: `?stationId=${id}&companyId=${compId}`,
							}}
						>
							<div
								className={` ${
									path === "/station/evChargers" ? activeLink : notActive
								}`}
							>
								{path === "/station/evChargers" && (
									<img
										className="mr-[0.5rem] "
										src={DshboardB}
										alt="Dashboard Overview"
									/>
								)}
								<p>EV chargers</p>
							</div>
						</NavLink>

						<NavLink
							to={{
								pathname: "/station/billing",
								search: `?stationId=${id}&companyId=${compId}`,
							}}
						>
							<div
								className={` ${
									path === "/station/billing" ? activeLink : notActive
								}`}
							>
								{path === "/station/billing" && (
									<img
										className="mr-[0.5rem] "
										src={DshboardB}
										alt="Dashboard Overview"
									/>
								)}
								<p>Billing & pricing </p>
							</div>
						</NavLink>

						<NavLink
							to={{
								pathname: "/station/report",
								search: `?stationId=${id}&companyId=${compId}`,
							}}
						>
							<div
								className={` ${
									path === "/station/report" ? activeLink : notActive
								}`}
							>
								<p className="mr-[0.5rem] ">Report </p>
							</div>
						</NavLink>

						<NavLink
							to={{
								pathname: "/station/customers",
								search: `?stationId=${id}&companyId=${compId}`,
							}}
						>
							<div
								className={` ${
									path === "/station/customers" ? activeLink : notActive
								}`}
							>
								<p className="mr-[0.5rem] ">Customer </p>
							</div>
						</NavLink>

						<div
							className={` ${
								path === "/station/camera" ? activeLink : notActive
							}`}
						>
							{path === "/station/camera" && (
								<img
									className="mr-[0.5rem]  "
									src={DshboardB}
									alt="Dashboard Overview"
								/>
							)}
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
						<p className=" mr-[0.75rem]">Sterling HQ</p>
						<img src={blackDropdownIcon} alt="Dropdown Icon" />
					</div>
				</div>
			</div>
		</nav>
	);
}
