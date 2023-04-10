import React from "react";
import Login from "./components/Login/login";
import Sidebar from "./components/Sidebar/sidebar";

import Dashboard from "./components/Dashboard/dashboard";
import SpecificCharger from "./components/specificCharger/specificCharger";
import EvCharger from "./components/evChargers/evCharger";
import ChangePassword from "./components/changePassword/changePassword";
import Station from "./components/station/station";
import ListOfStations from "./components/listOfStations/listOfStations";
import CompanyDash from "./components/companyDashboard/companyDash"
import CompanySideBar from "./components/companySidebar/companySidebar";
import { Outlet, Routes, Route } from "react-router-dom";
import Protected from "./protected";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/station" element={<Station />}></Route>
        <Route path="/changePassword" element={<ChangePassword />}></Route>
        <Route path="/dash" element={<LayoutsWithNavbar />}>
          <Route
            path="/dash"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          ></Route>
          
          <Route path="/dash/evChargers" element={<EvCharger />}></Route>
          <Route
            path="/dash/chargerDetails"
            element={<SpecificCharger />}
          ></Route>


        </Route>
        <Route path="/companyDash" element={<LayoutsWithCompanyNavbar/>}>
        <Route path="/companyDash" element={<CompanyDash/>}></Route>
        <Route path="/companyDash/myStations" element={<ListOfStations />}></Route>
        </Route>
       
      </Routes>
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
        <CompanySideBar/>
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
