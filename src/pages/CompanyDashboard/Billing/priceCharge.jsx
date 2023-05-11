import { useState } from "react";
import ChangePrice from "../../../assets/svg/changePrice.svg"
import Modal from "../../../components/modals/modal";
import PriceModal from "../../../components/modals/changePrice";
import moment from "moment";



const PriceCharge = (props) => {
    
   let  billinObj = props.billing;

 

    const [popUp, setpopup] = useState(false)

    const handleClick  = () =>{
        setpopup(true)
    }

    return ( <div className="bg-white w-[30rem] h-[25rem] pt-[1.25rem] border border-1 border-[#EAECF0] border-solid rounded-lg">
        <div className=" ">
        <div className="">
            <p className="mb-[1.25rem]  flex justify-center text-[#667085] text-base leading-5 font-medium">
                {props.title}
            </p>
            <div className="flex  justify-center">
            <img className="w-[2rem] h-[2rem]" src={props.icon}></img>
            </div>
        </div>
        </div>
        <div className="px-[1.5rem]">
            <div className="flex justify-between mt-[1.25rem] pb-[2rem]">
                <p className="text-[#667085] leading-5 text-base font-normal">Current price:</p>
                <p className="text-[#1DB954] leading-7 font-normal text-xl">{billinObj.costPerUnitCharge}/kw</p>
            </div>
            <div className="flex justify-between  pb-[2rem]">
                <p className="text-[#667085] leading-5 text-base font-normal">Previous price:</p>
                <p className="text-[#667085] leading-5 text-base font-normal">NGN {billinObj.previousCostPerUnitCharge}/kw</p>
            </div>
            <div className="flex justify-between space-between  pb-[2rem]">
                <p className="text-[#667085] leading-5 text-base font-normal">Last change date:</p>
                <p className="text-[#667085] leading-5 text-base font-normal">{moment(billinObj.updatedAt).format(' MMMM DD YYYY HH:mm')}</p>
            </div>
            <div className="flex justify-between  pb-[2rem]">
                <p className="text-[#667085] leading-5 text-base font-normal">Changed by:</p>
                <p className="text-[#667085] leading-5 text-base font-normal">Administrator</p>
            </div>
            <div className="flex justify-center"><button   onClick={handleClick}
             className="flex  w-[8.5rem] border border-1 border-[#667085] border-solid rounded-md p-[0.25rem]"> 
             <img className="pr-[0.25rem]" src={ChangePrice} alt="" /> 
             <p>Change Price</p>
             </button></div>
             
        </div>
        {popUp &&
        <Modal closeModal={setpopup}>
            <PriceModal></PriceModal>
        </Modal>
        }
    </div> );
}
 
export default PriceCharge;