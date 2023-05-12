import dropDown from "../../../assets/svg/dropDownArrow.svg";
import nextArrow from "../../../assets/svg/next-arrow.svg";
import {useState, useEffect} from "react"
import axios from "../../../lib/axiosInterceptor";
import { useNavigate } from "react-router";


const ListOfStations = () => {
    const Navigate = useNavigate();
    const [stations, setStations] = useState([])

    //base url
    const url = "";

    //bearer token
    const token = localStorage.getItem("user-token");

    //company id
    const companyId = localStorage.getItem("id");

    

    //get stations under a company 
    const getData = ( ) =>{
        axios.get(url + "/Stations/get-station-by-company/" + companyId,  { headers:{ 'Authorization': `Bearer ${token}`}})
        .then((res)=>{
        //   console.log(res.data, "this is the data")
          setStations(res.data)
          console.log(stations)
        })
      }
     
     
      useEffect(()=>{
        getData()
      }, [])

     

      const viewStations = (id, e) =>{
      
        window.localStorage.setItem("stationId", id);
      
        // Navigate("/station")
        Navigate({
          pathname: '/station',
          search: `?stationId=${id}&companyId=${companyId}`,
        });
      }

    return ( <div className="py-[1.5rem] px-[1.5rem] ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl leading-7 pb-[0.5rem]">My Stations</h1>
            <p className="font-normal text-sm leading-5 text-[#98A2B3] pb-[1rem]">Breakdown of your company's station</p>
          </div>
          <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-5 py-1">
            <p className=" text-black font-light text-base ">This month</p>
            <img src={dropDown} alt=""/>
            
          </div>
          
        </div>
        
        <div className="bg-white py-[0.5rem]  px-[1.5rem] h-[30rem] ">
            <table className=" text-left  w-[100%] ">
                <thead className=" h-[1.25rem] bg-[#FCFCFD] border border-x-0 border-[0.5px] border-solid border-gray-200 text-[#667085] text-sm leading-5 font-semibold ">
                    <th className="py-[1.25rem] w-[4rem]">#</th>
                    <th className="w-[10rem]">Station Name</th>
                    <th className="w-[13rem]">Revenue</th>
                    <th className="w-[12rem]">Energy Consumed</th>
                    <th className="w-[10rem]">Location</th>
                    <th className="w-[5rem]">Chargers</th>
                    <th className="w-[10rem]"></th>
                </thead>

                
                {stations.map((station) =>(
                    <tr key={station.Id} className=" border-b-2 border-solid border-[#47546] ">
                        <td className="py-[1rem]">{station.Id}</td>
                        <td>{station.StationName}</td>
                        <td>₦{station.Revenue?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td>{station.EnergyConsumed?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}kWh</td>
                        <td>{station.Location}</td>
                        <td>{station.Chargers}</td>
                        <td><button  onClick={(e)=>{viewStations(station.Id, e)}}
                        className="h-[31px] w-[96px] rounded-md text-[#475467] font-semibold text-xs leading-5 border border-solid border-1 border-[#475467]" 
                        >View station</button></td>
                    </tr>
                ))}
               
              
               
            </table>
            <div className="flex justify-between py-[4rem]">
            <p>1-50 of 2,500</p>
           
            <p className="pl-[52rem]">1-10 </p>
            <img className="" src={nextArrow} />
           
            </div>
        </div>

        
        
    </div> );
}
 
export default ListOfStations;