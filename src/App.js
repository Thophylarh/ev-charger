import React from 'react';
import Login from './components/Login/login'
import Sidebar from './components/Sidebar/sidebar'


import Dashboard from "./components/Dashboard/dashboard";
import SpecificCharger from './components/specificCharger/specificCharger';
import EvCharger from "./components/evChargers/evCharger";

import {Outlet, Routes, Route} from 'react-router-dom';


function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<LayoutsWithNavbar/>}>
        
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/evChargers' element={<EvCharger/>}></Route>
        
        
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/chargerDetails' element={<SpecificCharger/>}></Route>
      </Routes>
    </div>
  )

}


function LayoutsWithNavbar() {
  return (
    <div className="flex flex-row bg-neutral-100 h- 
    screen w-screen top-0 left-0 fixed ">
   <div className="bg-black h-screen w-[15%]  left- 
    0 top-0 ">
     <Sidebar />
   </div>
   <div className="mx-2 h-screen w-[85%] overflow-y- 
    scroll">
       <Outlet/>
   </div>
    </div>
  );
}

export default App;
