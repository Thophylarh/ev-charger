import axios from "axios";
import { getToken } from "../utils/getToken";

const instance = axios.create({
	baseURL: "https://evapi.estations.com",
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
		let token = getToken();
		config.headers["Authorization"] = `Bearer ${token}`;
		

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

		if (error.response.status === 401) {
			localStorage.clear();
			window.location.href = "/";
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
