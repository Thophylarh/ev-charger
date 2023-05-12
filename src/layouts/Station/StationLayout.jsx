import React from "react";
import { Outlet } from "react-router";
import StationNavBar from "./NavBar";

export default function StationLayout() {
	return (
		<>
			<StationNavBar />
			<section className="w-[90%] mx-auto my-[7.5rem]">
				<Outlet />
			</section>
		</>
	);
}
