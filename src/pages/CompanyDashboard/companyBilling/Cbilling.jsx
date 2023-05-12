import React, {useState} from 'react';

import dropDown from "../../../assets/svg/dropDownArrow.svg";
import changeprice from "../../../assets/svg/changePrice.svg"
import grid from "../../../assets/svg/grid.svg"
import utility from "../../../assets/svg/utility.svg"
import nextArrow from "../../../assets/svg/next-arrow.svg";
import greenEnergy from "../../../assets/svg/greenEnergy.svg"
import Modal from "../../../components/modals/modal"
import PriceModal from "../../../components/modals/changePrice";

 const Cbilling = () => {
    const [popUp, setpopup] = useState(false)

    const handleClick  = () =>{
        setpopup(true)
    }
  return (
    <>
    <div className='h-[100vh] overflow-y-scroll'>
    <div className='flex justify-between items-center mt-[1.5rem] mx-[1.5rem] ' >
        <div className=''>
        <h4 className='font-bold text-2xl leading-7 pb-[0.75rem]'>Billing</h4>
        <p className='leading-5 text-base font-medium'>Set your charger billing and price</p>
        </div>
        <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-5 py-1">
            <p className=" text-black font-light text-base ">This month</p>
            <img src={dropDown} alt=""/>
            
          </div>
    </div>
    <div className='border border-[1px] border-[#E5E7EB] rounded-lg bg-white mt-[1.25rem] mx-[1.25rem]'>
    <div className="flex justify-between py-[2.5rem] px-[2.5rem]">
        <h1 className='font-normal text-xl text-[#667084]'>Current Billing summary</h1>
        <button onClick={handleClick} className='flex bg-[#101828] text-white py-[0.5rem] px-[1rem] w-[10rem] rounded-md'><img src={changeprice} alt='' className="mr-[0.5rem] mt-[0.25rem]"/> <p>change price</p></button>
    </div>
    <div className='flex  px-[2.5rem] mb-[2.5rem]'>
        <div className='flex mr-[3.5rem]'>
        <img src={grid} ></img>
        <div className='ml-[1rem]'>
        <p className='font-normal text-base text-black/[.38]'>When on grid</p>
        <h5 className='font-bold text-xl'>NGN120.00/kWh</h5>
        </div>
        </div>

        <div className='flex mr-[2.5rem]'>
        <img src={utility} ></img>
        <div className='ml-[1rem]'>
        <p className='font-normal text-base text-black/[.38]'>When on Utility</p>
        <h5 className='font-bold text-xl'>NGN160.00/kWh</h5>
        </div>
        </div>

        <div className='flex mr-[2.5rem]'>
        <img src={greenEnergy} className='w-[20px]' ></img>
        <div className='ml-[1rem]'>
        <p className='font-normal text-base text-black/[.38]'>When on Green energy</p>
        <h5 className='font-bold text-xl'>NGN180.00/kWh</h5>
        </div>
        </div>
        
    </div>
    
    </div>
    
    <div className='mx-[1.5rem]'>
            <h3 className="text-[#667085] leading-5 text-base font-normal py-[2rem]">Price change history</h3>
            <div className="bg-white py-[0.5rem]  px-[1.5rem]">
            <table className=" text-left  w-[100%] ">
                <tr className=" h-[1.25rem] bg-[#FCFCFD]  py-[1.25rem]  border border-x-0 border-[0.5px] border-solid border-gray-200 text-gray-600 text-base font-semibold ">
                    
                    
                    <th className="w-[20%]  py-[1.25rem]">Date</th>
                    <th className="w-[12%]">Previous price</th>
                    <th  className="w-[12%]">Changed to</th>
                    <th  className="w-[18%]">Changed By</th>
                    <th className="w-[12%]">Bill type</th>
                   
                </tr>
                <tr className='border border-x-0 border-[0.5px] border-solid border-gray-200'>
                    <td className='py-[1rem]'>September 24, 2017</td>
                    <td>NGN500.00</td>
                    <td>NGN600.00</td>
                    <td>fuelmetrics.com.ng</td>
                    <td><button className='border border-[2px] border-[#8A2BE2] bg-[#9E77ED]/[.10] rounded-lg text-[#8A2BE2] w-[6rem] py-[6px] px-[12px]'>Utility</button></td>
                </tr>
                <tr className='border border-x-0 border-[0.5px] border-solid border-gray-200'>
                    <td className='py-[1rem]'>September 24, 2017</td>
                    <td>NGN500.00</td>
                    <td>NGN600.00</td>
                    <td>fuelmetrics.com.ng</td>
                    <td><button className='border border-[2px] border-[#68D08C] bg-[#E8F8EE] rounded-lg text-[#68D08C] w-[8rem] py-[6px] px-[12px]'>Green house</button></td>
                </tr>
                <tr className='border border-x-0 border-[0.5px] border-solid border-gray-200'>
                    <td className='py-[1rem]'>September 24, 2017</td>
                    <td>NGN500.00</td>
                    <td>NGN600.00</td>
                    <td>fuelmetrics.com.ng</td>
                    <td><button className='border border-[2px] border-[#1E429F] bg-[#E1EFFE] rounded-lg text-[#1E429F] w-[6rem] py-[6px] px-[12px]'>Grid</button></td>
                </tr>
               
            </table>
            <div className="flex justify-between py-[4rem]">
            <p>1-50 of 2,500</p>
           
            <p className="pl-[45rem]">1-10 </p>
            <img className="" src={nextArrow} />
           
            </div>
            </div>
            </div>
            {popUp &&
        <Modal closeModal={setpopup}>
            <PriceModal></PriceModal>
        </Modal>
        }
    </div>
    </>
  )
}

export default Cbilling