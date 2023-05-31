import { Navigate, Outlet } from "react-router";
import { getToken } from "../utils/getToken";

export default function ProtectedCustomerRoutes() {
	let token = getToken();


	return token ? <Outlet/> : <Navigate to="/login" />;
}