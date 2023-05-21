import React from "react";

import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Authentication
import SignUp from "./pages/Customer/signup/signup";
import Login from "./pages/Authentication/Login/login";
import ChangePassword from "./pages/Authentication/changePassword/changePassword";

//Station
import StationLayout from "./layouts/Station/StationLayout";
import Dashboardd from "./pages/Branch/Dashboard/dashboard";
import EvChargers from "./pages/Branch/EvChargers/evchargers";
import StationBilling from "./pages/Branch/Billing";
import CustomerList from "./pages/Branch/Customers";
import CustomerDetails from "./pages/Branch/Customers/CustomerDetails";
import Details from "./pages/Branch/ChargerDetails/chargerDetails";
import ReportSales from "./pages/Branch/ReportSales/reportSales";
import Camera from "./pages/Branch/LiveFeed/camera";

//Company
import Station from "./components/station/station";
import ListOfStations from "./pages/CompanyDashboard/StationList/listOfStations";
import CompanyDash from "./pages/CompanyDashboard/Dashboad/companyDash";
import CompanySideBar from "./components/Company/companySidebar/companySidebar";
import CompanyReport from "./pages/CompanyDashboard/Report/report";
import Billing from "./pages/CompanyDashboard/companyBilling/Cbilling";

//Components
import ProtectedRoutes from "./routeGuard/ProtectedRoutes";
import AuthRoutes from "./routeGuard/AuthRoutes";
import Sidebar from "./components/Sidebar/sidebar";

//Customer
import CarInfo from "./pages/Customer/carInformation/carInfo";
import Wallet from "./pages/Customer/Wallet/wallet";
import CusLogin from "./pages/Customer/customerLogin/CLogin";

function App() {
	return (
		<div>
			<BrowserRouter>
				<ToastContainer />
				<Routes>
					<Route
						path="/"
						element={
							<AuthRoutes>
								<Login />
							</AuthRoutes>
						}
					/>

					{/* PROTECTED ROUTES */}

					{/* COMPANY ROUTES */}
					<Route element={<LayoutsWithCompanyNavbar />}>
						<Route element={<ProtectedRoutes />}>
							<Route element={<CompanyDash />} path="/company" index />
						</Route>

						<Route element={<ProtectedRoutes />}>
							<Route element={<ListOfStations />} path="/company/myStations" />
						</Route>

						<Route element={<ProtectedRoutes />}>
							{" "}
							<Route element={<CompanyReport />} path="/company/report" />{" "}
						</Route>

						<Route element={<ProtectedRoutes />}>
							<Route element={<Billing />} path="/company/billing" />
						</Route>
					</Route>

					{/* STATION ROUTES */}

					<Route path="/station" element={<StationLayout />}>
						<Route element={<ProtectedRoutes />}>
							<Route element={<Dashboardd />} path="" />
						</Route>
						<Route element={<ProtectedRoutes />}>
							<Route path="evChargers" element={<EvChargers />} />
						</Route>

						<Route element={<ProtectedRoutes />}>
							<Route path="billing" element={<StationBilling />} />
						</Route>
						<Route element={<ProtectedRoutes />}>
							<Route path="details" element={<Details />} />
						</Route>
						<Route element={<ProtectedRoutes />}>
							<Route path="report" element={<ReportSales />} />
						</Route>

						<Route element={<ProtectedRoutes />}>
							<Route path="customer/details" element={<CustomerDetails />} />
						</Route>

						<Route element={<ProtectedRoutes />}>
							<Route path="customers" element={<CustomerList />} />
						</Route>

						<Route element={<ProtectedRoutes />}>
							<Route path="camera" element={<Camera />} />
						</Route>
					</Route>

					<Route path="/station" element={<Station />}></Route>
					<Route
						path="/changePassword"
						element={
							<AuthRoutes>
								<ChangePassword />
							</AuthRoutes>
						}
					></Route>

					{/* CUSTOMER ROUTES */}
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/carInformation" element={<CarInfo />}></Route>
					<Route path="/wallet" element={<Wallet />}></Route>
					<Route path="/Login" element={<CusLogin />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

function LayoutsWithNavbar() {
	return (
		<div
			className="flex flex-row bg-neutral-100 h- 
    screen w-screen top-0 left-0 fixed "
		>
			<div
				className="bg-black h-screen w-[15%]  left- 
    0 top-0 "
			>
				<Sidebar />
			</div>
			<div
				className="mx-2 h-screen w-[85%] overflow-y- 
    scroll"
			>
				<Outlet />
			</div>
		</div>
	);
}

function LayoutsWithCompanyNavbar() {
	return (
		<div
			className="flex flex-row bg-neutral-100 h- 
    screen w-screen top-0 left-0 fixed "
		>
			<div
				className="bg-black h-screen w-[15%]  left- 
    0 top-0 "
			>
				<CompanySideBar />
			</div>
			<div
				className="mx-2 h-screen w-[85%] overflow-y- 
    scroll"
			>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
