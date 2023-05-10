import React, {useEffect} from "react";
import Prev from "../../assets/svg/prev.svg";
import Next from "../../assets/svg/next.svg";
import Dot from  "../../assets/svg/activeDot.svg";
import RedDot from "../../assets/svg/red-dot.svg"
import Station from "../../assets/images/charge-station.svg";
import axios from "axios";
import moment from "moment/moment";



const ListOfChargers = (props) => {

    const url = "http://evapi.estations.com"
    const token = localStorage.getItem("user-token")
    const companyId = localStorage.getItem("id");
    const stationId = localStorage.getItem("stationId");

    // const listChargers = ()=>{
    //     axios.get(url +`/Chargers/get-list-station-charger/${companyId}/${stationId}`,  { headers:{ 'Authorization': `Bearer ${token}`}})
    //     .then((res)=>{
    //         console.log(res )
    //     })
    // }

    // useEffect(()=>{
    //     listChargers()
    //   }, [])
      
    const chargers = props.chargers

    return (<div>
        <div className="flex justify-between pt-[1.5rem]">
            <p className="text-gray-600  text-base font-semibold">List of chargers</p>
            <div className="flex justify-between">
            <img className="pr-[2rem]" src={Prev} alt=""/>
            <img className="pr-[0.5rem]" src={Next} alt=""/>
            </div>
        </div>

        <div className=" flex justify-between bg-white mt-[1.5rem] p-[4rem] text-Grey-700">
            {chargers.map((charger)=>(
                <div className="border rounded-lg p-[0.75rem] w-[21.25rem] h-[26.5rem] mr-[1rem]" key={charger.Id}>
                <div className="flex justify-between ">
                    <h3 className="pt-[0.25rem] text-base font-semibold text-Gray-700">{charger.ChargerName}</h3>
                    <div className="flex justify-between w-[5rem] rounded-full py-[0.5rem]  bg-green-100 px-[0.75rem] font-semibold text-green-700 text-xs"><img className="w-[0.5rem]" src={Dot} alt=""/> Active</div>
                </div>
                <div  className="flex justify-center py-[5rem]">
                   <img src={Station} className="w-[60px]" alt=""></img>
                </div>
                <div className="text-sm font-normal ">
                    <div className="flex justify-between pb-[1rem]">
                    <p >Energy Consumed:</p>
                    <p>{charger.EnergyConsumed?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}kWh</p>
                    </div>
                    <div className="flex justify-between pb-[1rem]">
                    <p>Revenue: </p>
                    <p>₦{charger.Revenue?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                    <div className="flex justify-between pb-[1rem] ">
                    <p>Last Charge: </p>
                    <p>{ moment(charger.LastCharged).fromNow() }</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
        
    </div>  );
}
 
export default ListOfChargers;

