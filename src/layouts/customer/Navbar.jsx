import React, { useEffect, useState } from "react";
import Home from "../../assets/svg/home.svg";
import Wallet from "../../assets/svg/wallet.svg";
import Van from "../../assets/svg/van.svg";
import ActiveVan from "../../assets/svg/activeVan.svg";
import Profile from "../../assets/svg/profileNav.svg";
import ActiveProfile from "../../assets/svg/activeProfile.svg";
import Station from "../../assets/svg/stationLocation.svg";
import ActiveStation from "../../assets/svg/activeStation.svg";
import InactiveHome from "../../assets/svg/inActiveHome.svg" ; 
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

const CNav = () => {
	const [path, setPath] = useState("");

	const navigate = useNavigate();

	const location = useLocation();

	useEffect(() => {
		setPath(location.pathname);
	}, [location]);

	const Active = "text-white font-normal text-sm mt-[10px]";

	const notActive = "text-white opacity-40 font-normal text-sm mt-[10px]";

	return (
		<nav className="bg-[#111111] h-[5rem] fixed bottom-0 left-0 z-50 w-full">
			<section className="mx-auto py-[0.75rem] flex justify-around">
				<NavLink
					to={{
						pathname: "/home",
					}}
				>
					<div>
						<img
							src={` ${path === "/home" ? Home : InactiveHome}`}
							alt="home icon"
							className="w-[1.875rem] mx-auto"
						/>
						<h4 className={` ${path === "/home" ? Active : notActive}`}>
							Home
						</h4>
					</div>
				</NavLink>

				<NavLink
					to={{
						pathname: "/AWallet",
					}}
				>
					<div>
						<img
							src={Wallet}
							alt="home icon"
							className="w-[1.875rem] mx-auto"
						/>
						<h4 className={` ${path === "/AWallet" ? Active : notActive}`}>
							Wallet
						</h4>
					</div>
				</NavLink>

				<NavLink
					to={{
						pathname: "/myVehicles",
					}}
				>
					<div>
						<img
							src={` ${path === "/myVehicles" ? ActiveVan : Van}`}
							alt="home icon"
							className="w-[1.875rem] mx-auto"
						/>
						<h4 className={` ${path === "/myVehicles" ? Active : notActive}`}>
							Vehicles
						</h4>
					</div>
				</NavLink>

				<NavLink
					to={{
						pathname: "/station-locator",
					}}
				>
					<div>
						<img
							src={` ${path === "/station-locator" ? ActiveStation : Station}`}
							alt="home icon"
							className="w-[1.875rem] mx-auto"
						/>
						<h4
							className={` ${path === "/station-locator" ? Active : notActive}`}
						>
							Stations
						</h4>
					</div>
				</NavLink>

				<NavLink
					to={{
						pathname: "/profile",
					}}
				>
					<div>
						<img
							src={` ${path === "/profile" ? ActiveProfile : Profile}`}
							alt="home icon"
							className="w-[1.875rem] mx-auto"
						/>
						<h4 className={` ${path === "/profile" ? Active : notActive}`}>
							Profile
						</h4>
					</div>
				</NavLink>
			</section>
		</nav>
	);
};

export default CNav;
