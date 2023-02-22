import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import Dashboard from '../Dashboard/dashboard'

const index = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h- 
     screen w-screen top-0 left-0 fixed ">
    <div className="bg-black h-screen w-[15%]  left- 
     0 top-0 ">
      <Sidebar />
    </div>
    <div className="mx-2 h-screen w-[85%] overflow-y- 
     scroll">
      <Dashboard />
    </div>
    {/* <div className="w-[25%] h-[100%]  bg-[#f1f2f7] overflow-y-scroll">
      <Rightbar />
    </div> */}
  </div>
  
  )
}

export default index