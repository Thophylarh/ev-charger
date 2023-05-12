import axios from "axios";
import { getToken } from "../utils/getToken";

let token = getToken();
const instance = axios.create({
	baseURL: "http://evapi.estations.com",
	headers: {
		// "Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		// Accept: "application/json",
		// Authorization: `Bearer ${token}`,
	},
	// crossDomain: true,
	// withCredentials: true,
});

instance.interceptors.request.use(
	(config) => {
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const originalRequest = error.config;

		if (
			originalRequest.url === "/Stations/get-station-by-company/null" &&
			error.response.status === 400
		) {
			// window.location.href = "/";
			return Promise.reject(error);
		}

		if (error.response.status === 401) {
		
			// window.location.href = "/";
			return Promise.reject(error);
		}

		//REFRESH TOKEN

		// if (error.response.status === 401 && !originalRequest._retry) {
		//       originalRequest._retry = true
		//       const refreshToken = localStorageService.getRefreshToken()
		//       return axios
		//         .post('/auth/token', {
		//           refresh_token: refreshToken
		//         })
		//         .then(res => {
		//           if (res.status === 201) {
		//             localStorageService.setToken(res.data)
		//             axios.defaults.headers.common['Authorization'] =
		//               'Bearer ' + localStorageService.getAccessToken()
		//             return axios(originalRequest)
		//           }
		//         })
		//     }

		return Promise.reject(error);
	}
);

export default instance;
