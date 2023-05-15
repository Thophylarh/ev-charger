import React, {useState, useEffect} from "react";
import ActiveCharger from "../../../assets/svg/activeCharger.svg";
import DisconnectedCharger from "../../../assets/svg/disconnectedCharger.svg";
import ChargersCard from "../../../components/Company/ChargersCard";
import axios from "../../../lib/axiosInterceptor";
import "./style.css";


import Loader from "../../../components/Loader";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

export default function EvChargers() {
  const [totalChargers, setTotalChargers] = useState("");
  const [noOfActiveChargers, setNoActiveChargers] = useState("");
	const [noOfflineChargers, setNoOfflineChargers] = useState("");
	const [totalEnergy, setTotalEnergy] = useState("");
	const [stationChargerList, setStationChargerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();

  let stationId = searchParams.get("stationId"); 

  let companyId = searchParams.get("companyId");
 

  	//total number of station chargers
	const GetstationChargers = () => {
		axios
			.get(`/Chargers/get-total-station-charger-count/${companyId}/${stationId}`)
			.then((res) => {
				setTotalChargers(res.data);
			});
	};

  //total number of active chargers
	const GetactiveChargers = () => {
		axios
			.get(	`/Chargers/get-station-active-charger-count/${companyId}/${stationId}`)
			.then((res) => {
				setNoActiveChargers(res.data);
			});
	};
 
  //total number of offline chargers
	const GetofflineChargers = () => {
		axios
			.get(`/Chargers/get-station-offline-charger-count/${companyId}/${stationId}`)
			.then((res) => {
				setNoOfflineChargers(res.data);
			});
	};

  //total energy consumed
	const GetTotalEnergy = () => {
		axios
			.get(	`/Chargers/get-total-energy-consumed-by-station/${companyId}/${stationId}`)
			.then((res) => {
				setTotalEnergy(res.data);
       
			})
	};

  //get list of chargers
	const getListOfChargers = () => {
    setIsLoading(true)
		axios
			.get(`/Chargers/get-list-station-charger/${companyId}/${stationId}`)
			.then((res) => {
				
				setStationChargerList(res.data);
    
        setTimeout(()=>{
					setIsLoading(false)
				},2000)
			}).catch(err=>{
				toast.error(err)
				setIsLoading(false)
			})
	};

  useEffect(() => {
		GetstationChargers();
		GetofflineChargers();
		GetTotalEnergy();
		GetactiveChargers();
		getListOfChargers();
	}, []);

  return (
    <>
    
    {isLoading && (
				<section>
					<Loader />
				</section>
			)}
    
    {
      !isLoading && (
        <section>
        <section className={`mb-[var(--marginBtwSection)]`}>
          <h4>Ev Chargers</h4>
          <p className="subHeader">
            Monitor your charger revenue, status, and energy consumption
          </p>
        </section>
  
        <section className={`mb-[var(--marginBtwSection)]`}>
          <div className="grid grid-cols-4" >
            <div className="revenueBlock">
              <p>NUMBER OF CHARGERS</p>
  
              <h5>{totalChargers}</h5>
            </div>
  
            <div className="revenueBlock">
              <div className="flex justify-between ">
                <div>
                  <p>ACTIVE CHARGERS</p>
  
                  <h5>{noOfActiveChargers}</h5>
                </div>
  
                <div>
                  {" "}
                  <img src={ActiveCharger} alt="Active chargers" />
                </div>
              </div>
            </div>
  
              <div className="revenueBlock">
            <div className="flex justify-between ">
              <div className="">
                <p>DISCONNECTED CHARGERS</p>
  
                <h5>{noOfflineChargers}</h5>
              </div>
  
              <div>
                <img src={DisconnectedCharger} alt="Disconnected Chargers" />
              </div>
  
            </div>
            </div>
  
            <div className="totalRevenueBlock">
              <h3>FAULT REPORT</h3>
  
              <h5>0</h5>
  
            </div>
          </div>
        </section>
        <section>
          <div>
              <h3>LIST OF CHARGERS</h3>
          </div>
          <div  className="bg-[var(--grey50)] p-[1.25rem] grid grid-cols-3 gap-4">
          {stationChargerList.map((charger) => (
              <ChargersCard  key={charger.Id} charger={charger}  />
            ))
            }
            
          </div>
        </section>
      </section>
      )
    }
    </>
  
  );
}
