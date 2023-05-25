import React from "react";
import CustomerNav from "../../layouts/customer/Navbar";

import logo from "../../assets/svg/logo.svg";

export default function CustomerLayout({ children, title }) {
	
	return (
		<>
		<CustomerNav/>
		<section className="mobileBody top h-[100vh] ">
			<div className="w-[90%] mx-auto py-5">
				<div className="flex items-center">
					<img src={logo} alt="ev logo" className="w-[3.125rem] h-[3rem]" />
					<p className=" mt-2 text-[1.125rem] text-white w-[100%] ml-[20%] font-semibold">
						{title}
					</p>
				</div>
			</div>

			<section className="h-[100%] bg-white rounded-tl-lg rounded-tr-lg ">
				{children}
			</section>
		</section>
		</>
	);
}
