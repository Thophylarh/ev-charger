import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";
import { getToken } from "../utils/getToken";

export default function ProtectedRoutes () {
	let token =  getToken();


	

	
console.log(token)
	return token ? <Outlet /> : <Navigate to="/" />
}


// const [userToken, setUserToken] = useState(false);
	// const [loading, setloading] = useState(true);
	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			let token = await getToken("user_token");
	// 			if (!token) {
	// 				setUserToken(false);
	// 				setloading(false);
	// 				return;
	// 			}
	// 			setUserToken(true);
	// 			setloading(false);
	// 		} catch (err) {
	// 			toast.error(err.message);
	// 		}
	// 	})();
	// }, []);

	// if (loading) return <div className="">fetching resource....</div>;
	// return userToken ? <Outlet /> : <Navigate to="/" />;