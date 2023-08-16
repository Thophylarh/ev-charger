import { Navigate } from "react-router";
import { getToken } from "../utils/getToken";

export default function AuthRoutes({ children }) {
	let token = getToken();

	if (token) {
		return <Navigate to="/company" />;
	}

	return <> {children}</>;
}
