import React from "react";
import Dot from "../../assets/svg/activeDot.svg";
import RedDot from "../../assets/svg/red-dot.svg";
import Station from "../../assets/images/charging-station.png";
import { Link } from "react-router-dom";

export const IsActiveTag = ({isActive}) => {

  let activeTag = (
    <div className="flex justify-between w-[5rem] rounded-full py-[0.5rem]  bg-green-100 px-[0.75rem] font-semibold text-green-700 text-xs"><img className="w-[0.5rem]" src={Dot} alt=""/> Active</div>
  );
  let disconnected = (
    <div className="flex justify-between w-[8rem] rounded-full py-[0.5rem]  bg-[#FEF3F2] px-[0.75rem] font-semibold text-[#B42318] text-xs mr-[0.25rem]"><img className="w-[0.5rem]" src={RedDot} alt=""/> Disconnected</div>
  );
  return <div>{isActive ? activeTag : disconnected}</div>;
};

const chargerCard = (props) => {
  const charger = props.charger;
  return (
    <div>
      <div className=" bg-white p-[0.75rem] 2xl:p-[2rem] w-[95%] ">
        <div className="flex justify-between">
          <h3 className="pt-[0.25rem] text-base font-semibold text-Gray-700">
            {charger.chargerName}
          </h3>
        <IsActiveTag isActive={true}/>
        </div>
        <div className="flex justify-center pt-[3rem] pb-[1.5rem]">
          <img className="" src={Station} alt=""></img>
        </div>
        <div className="text-sm font-normal ">
          <div className="flex justify-between pb-[1rem]">
            <p>Energy Consumed:</p>
            <p>{charger.energyConsumed}Kw</p>
          </div>
          <div className="flex justify-between pb-[1rem]">
            <p>Revenue: </p>
            <p>N{charger.revenue}</p>
          </div>
          <div className="flex justify-between pb-[2.5rem]">
            <p>Last Charge: </p>
            <p>{charger.lastCharged}</p>
          </div>
        </div>

        <Link to="/dash/chargerDetails" className="">
        <div className="button flex justify-center pb-[2rem]">
            <button className="border rounded border-[#EFF2FA] border-solid border-1 w-[16rem] 2xl:w-[18rem] p-[0.75rem] text-[#1DB954]" type="button">View Details</button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default chargerCard;
