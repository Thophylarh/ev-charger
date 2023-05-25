import React from "react";

import logo from "../../assets/svg/logo.svg";
import homeIcon from "../../assets/svg/Home.svg";

export default function CustomerLayout({ children, title }) {
	return (
		<section className="mobileBody top h-[100vh]  ">
			<section className="h-[91vh] ">
				<div className="w-[89%] mx-auto py-5">
					<div className="flex items-center">
						<img src={logo} alt="ev logo" className="w-[3.125rem] h-[3rem]" />
						<p className=" mt-2 text-[1.125rem] text-white w-[100%] ml-[20%] font-semibold">
							{title}
						</p>
					</div>
				</div>

				<section className="h-[100%] bg-white rounded-tl-lg rounded-tr-lg relative">
					<section className=" bg-white rounded-tl-lg rounded-tr-lg  overflow-auto">
						{children}
					</section>
				</section>
			</section>

			<section className="bg-black h-[10vh] absolute bottom-0 w-[100%] pt-4">
				<div className="w-[90%] mx-auto flex justify-between ">
					<div>
						<img
							src={homeIcon}
							alt="Home Icon"
							className="flex justify-center mx-3"
						/>
						<p className=" text-center text-white">Home</p>
					</div>

					<div>
						<img
							src={homeIcon}
							alt="Home Icon"
							className="flex justify-center mx-3"
						/>
						<p className=" text-center text-white">Wallet</p>
					</div>

					<div>
						<img
							src={homeIcon}
							alt="Home Icon"
							className="flex justify-center mx-3"
						/>
						<p className=" text-center text-white">Vehicles</p>
					</div>
				</div>
			</section>
		</section>
	);
}
