import React from "react";
import Login from "./pages/Login/login";
import Sidebar from "./components/Sidebar/sidebar";
import Dashboard from "./pages/Branch/Dashboard/dashboard";
import SpecificCharger from "./pages/Branch/ChargerDetails/specificCharger";
import EvCharger from "./pages/Branch/EvChargers/evCharger";
import ChangePassword from "./pages/changePassword/changePassword";
import Station from "./components/station/station";
import ListOfStations from "./pages/CompanyDashboard/StationList/listOfStations";
import CompanyDash from "./pages/CompanyDashboard/Dashboad/companyDash";
import CompanySideBar from "./components/Company/companySidebar/companySidebar";
import CompanyReport from "./pages/CompanyDashboard/Report/report";
import Billing from "./pages/CompanyDashboard/companyBilling/Cbilling";
import StationBilling from "./components/stationBilling/stationBilling";
// import Chargers from "./components/Chargers/chargers";
import Camera from "./pages/Branch/LiveFeed/camera";
import Sales from "./pages/Branch/Sales/sales";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";

import ProtectedRoutes from "./routeGuard/ProtectedRoutes";
import AuthRoutes from "./routeGuard/AuthRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CompanyLayout from "./layouts/Station/StationLayout";
import Dashboardd from "./pages/Branch/Dashboard/dashboardd";
import StationLayout from "./layouts/Station/StationLayout";
import EvChargers from "./pages/Branch/EvChargers/evchargers";
import Details from "./pages/Branch/ChargerDetails/chargerDetails";

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
								<Login />{" "}
							</AuthRoutes>
						}
					/>

					{/* PROTECTED ROUTES */}

					{/* COMPANY ROUTES */}
					<Route element={<LayoutsWithCompanyNavbar />}>
						<Route element={<ProtectedRoutes />}>
							<Route element={<CompanyDash />} path="/company" />
						</Route>

						<Route element={<ProtectedRoutes />}>
							<Route element={<ListOfStations />} path="/company/myStations" />
						</Route>

						<Route element={<ProtectedRoutes />}>
							{" "}
							<Route element={<CompanyReport />} path="/company/report" />{" "}
						</Route>

						<Route element={<ProtectedRoutes />}>
							{" "}
							<Route element={<Billing />} path="/company/billing" />
						</Route>
					</Route>

					{/* STATION ROUTES */}

					{/* NEW */}

					<Route path="/station" element={<StationLayout />}>
						<Route element={<ProtectedRoutes />}>
							{" "}
							<Route element={<Dashboardd />} path="" />
						</Route>
						<Route element={<ProtectedRoutes />}>
							<Route path="evChargers" element={<EvChargers />} />
							<Route path="chargerDetails" element={<Details />} />
					</Route>
					</Route>

					{/* <Route path="/station" element={<LayoutsWithNavbar />}>
						<Route path="" element={<Dashboard />} />

						<Route path="evChargers" element={<EvCharger />} />
						<Route path="chargerDetails" element={<SpecificCharger />} />
						<Route path="billing" element={<StationBilling />} />
						<Route path="sales" element={<Sales />} />
						<Route path="camera" element={<Camera />} />
					</Route> */}

					<Route path="/station" element={<Station />}></Route>
					<Route path="/changePassword" element={<ChangePassword />}></Route>

					{/* station section */}
					{/* <Route path="/station" element={<LayoutsWithNavbar />}>
					<Route
						path="/station"
						element={
							<Protected>
								<Dashboard />
							</Protected>
						}
					></Route>

					<Route path="/station/evChargers" element={<EvCharger />}></Route>
					<Route
						path="/station/chargerDetails"
						element={<SpecificCharger />}
					></Route>
					<Route path="/station/billing" element={<StationBilling />}></Route>
					<Route path="/station/sales" element={<Sales />}></Route>
					<Route path="/station/chargers" element={<Chargers />}></Route>
					<Route path="/station/camera" element={<Camera />}></Route>
				</Route> */}

					{/* //company side */}
					{/* <Route path="/companyDash" element={<LayoutsWithCompanyNavbar/>}>
        <Route path="/companyDash" element={<CompanyDash/>}></Route>
        <Route path="/companyDash/myStations" element={<ListOfStations />}></Route>
        <Route path="/companyDash/report" element={<CompanyReport/>}></Route>
        <Route path="/companyDash/billing" element={<Billing/>}></Route>
        </Route> */}
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
