import React from "react";
import { Outlet } from "react-router";
import CompanyNavBar from "./NavBar";

export default function CompanyLayout() {
	return (
		<>
			<CompanyNavBar />
			<section className="w-[90%] mx-auto my-[2rem]">
				<Outlet />
			</section>
		</>
	);
}
