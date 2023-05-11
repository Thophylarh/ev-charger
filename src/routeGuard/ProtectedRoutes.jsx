
import { Navigate, Outlet } from "react-router";
import { getToken } from "../utils/getToken";

export default function ProtectedRoutes() {
	let token = getToken();


	return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
}
