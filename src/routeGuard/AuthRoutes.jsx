import { Navigate } from "react-router";
import { getToken } from "../utils/getToken";

export default function AuthRoutes({ children }) {
	const id = localStorage.getItem("id")

	let token = getToken();

	if (token) {
		return <Navigate
		 to={{
			pathname: "/company",
			search: `?companyid=${id}`
		  }}
		/>;
	}

	return <> {children}</>;
}
