import React, {useState, useEffect} from "react";
import Dot from "../../assets/svg/activeDot.svg";
import RedDot from "../../assets/svg/red-dot.svg";
import Station from "../../assets/images/charging-station.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import moment from "moment/moment";




  let activeTag = (
    <div className="flex justify-between w-[5rem] rounded-full py-[0.5rem]  bg-green-100 px-[0.75rem] font-semibold text-green-700 text-xs"><img className="w-[0.5rem]" src={Dot} alt=""/> Active</div>
  );
  let disconnected = (
    <div className="flex justify-between w-[8rem] rounded-full py-[0.5rem]  bg-[#FEF3F2] px-[0.75rem] font-semibold text-[#B42318] text-xs mr-[0.25rem]"><img className="w-[0.5rem]" src={RedDot} alt=""/> Disconnected</div>
  );
 


const ChargerCard = (props) => {
  const Navigate = useNavigate();
  const charger = props.charger;
  // console.log(charger.ActiveStatus)
// const [isActive, setIsActive] = useState(true)

  // const chargerActivity = () =>{
  //   if( charger.ActiveStatus === 1) {
  //       setIsActive(true)
  //   }else if(charger.ActiveStatus === 0){
  //     setIsActive(false)
  //   }
  // }

  const chargerDetails = () =>{
      
    window.localStorage.setItem("chargerid", charger.Id );
    //navigate
    Navigate("/station/chargerDetails")
  }

   
  // useEffect(()=>{
  //   chargerActivity();
  // }, [])


  return (
    <div >
      <div className=" bg-white p-[0.75rem] 2xl p-[2rem] w-[95%] ">
        <div className="flex justify-between">
          <h3 className="pt-[0.25rem] text-base font-semibold text-Gray-700">
            {charger.ChargerName}
          </h3>
          
        {charger.ActiveStatus=== "1" ? activeTag : disconnected}
        </div>
        <div className="flex justify-center pt-[3rem] pb-[1.5rem]">
          <img className="" src={Station} alt=""></img>
        </div>
        <div className="text-sm font-normal ">
          <div className="flex justify-between pb-[1rem]">
            <p>Energy Consumed:</p>
            <p>{charger.EnergyConsumed?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}kWh</p>
          </div>
          <div className="flex justify-between pb-[1rem]">
            <p>Revenue: </p>
            <p>₦{charger.Revenue?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          </div>
          <div className="flex justify-between pb-[2.5rem]">
            <p>Last Charge: </p>
            <p>{  moment(new Date(charger.LastCharged)).fromNow()}</p>
          </div>
        </div>

        
        <div className="button flex justify-center pb-[2rem]">
            <button onClick={chargerDetails} className="border rounded border-[#EFF2FA] border-solid border-1 w-[16rem] 2xl:w-[18rem] p-[0.75rem] text-[#1DB954]" type="button">View Details</button>
        </div>
        
      </div>
    </div>
  );
};

export default ChargerCard;
