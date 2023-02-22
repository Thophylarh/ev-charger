import React from 'react'
import Dshboard from "../../assets/svg/dshboard.svg"
import Document from "../../assets/svg/document.png"
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <div>
        <div className='link-cover mt-[6rem]'>
<div>
    <Link to ="#"  className="" >
    <div className='flex items-center m-4 '>
        <div>
        <img className="w-[14px] mr-3" src= 
            {Dshboard} alt="" />
        </div>
        <div>
        <p className='text-[#1DB954] text-sm'>Overview</p>
        </div>  
    </div>
    </Link>
</div>
<div>
    <Link to ="#"  className="" >
    <div className='flex items-center m-4 '>
        <div>
        <img className="w-[14px] mr-3" src= 
            {Document} alt="" />
        </div>
        <div>
        <p className='text-white text-sm'>Ev Chargers</p>
        </div>  
    </div>
    </Link>
</div>
        </div>
    </div>
  )
}

export default sidebar