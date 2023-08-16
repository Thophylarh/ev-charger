import React from "react";
import "./secondStyle.css";
import logo from "../../assets/svg/logo.svg";

export default function SecondLoader() {
	let style = {
		left: "85% !important",

	};
	return (
		<div className="pulse-wrapperr" style={style}>
			<div className="pulse">
				<img src={logo} alt="EVcharger logo" />
			</div>
		</div>
	);
}
