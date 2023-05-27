import React, {useState, useEffect} from "react";
import ForwardArrow from "../../../assets/svg/forwardArrow.svg";
import PowerButton from "../../../assets/svg/power.svg";
import PowerOnButton from "../../../assets/svg/powerOn.svg"
import ChargerRevenue from "../../../components/Branch/chargerDetailsComponents/chargerRevenueComponent/chargerRevenue";
import ChargerOperation from "../../../components/Branch/chargerDetailsComponents/chargerOperation/chargerOperation";
import Last10Transactions from "../../../components/last10Transactions/last10Transactions";
import { useSearchParams } from "react-router-dom";
import axios from "../../../lib/axiosInterceptor";

import Modal from "../../../components/modals/modal"
import ChargerPower from "../../../components/modals/powerOffCharger"
import PowerOnCharger from "../../../components/modals/powerOnCharger"
import Loader from "../../../components/Loader";




export default function Details() {
    const [chargersDetails, setChargerDetails] = useState([]);
    const [PowerModal, setPModal] = useState(false)
    const [powerOn, setPowerOn] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams] = useSearchParams();

   
    let chargerId = searchParams.get("chargerId");
 //charger details
  const GetChargerDetails = () => {
    setIsLoading(true)
    
    axios
      .get( `/Chargers/get-charger-by-id/${chargerId}`)
      .then((res) => {
        // console.log(res)
        setChargerDetails(res.data[0]);
        setTimeout(()=>{
					setIsLoading(false)
				},2000)
      
      });
  };

  useEffect(() => {
    GetChargerDetails();
}, []);

  return (
   <>
   {isLoading && (
				<section>
					<Loader />
				</section>
			)}

{!isLoading && (
    <section>

      <section className="mb-[var(--marginBtwSection)]">
        <div className="flex justify-between mb-[0.5rem]">
          <div className="flex justify-between ">

            <h4 className="pr-[12px]">EV Chargers</h4>

            <img
              src={ForwardArrow}
              alt="next arrow"
              className="pr-[12px]"
            ></img>

            <h4 className="">{chargersDetails.ChargerName}</h4>

          </div>

          <div className="flex justify-between">
          {chargersDetails.ActiveStatus === "1" ?
          <button className="flex justify-between" onClick={(e)=>{setPModal(true)}}>
          <img src={PowerButton} alt="Power Button" />

          <p className="pl-[4px] text-[var(--error500)] font-normal text-[16px]">Turn off charger</p>
        </button>
        :
        <button className="flex justify-between" onClick={(e)=>{setPowerOn(true)}}>
              <img src={PowerOnButton} alt="Power on Button" />

              <p className="pl-[4px] text-[#1AA84C] font-normal text-[16px]">Turn on charger</p>
            </button> 
          }


            

            {/* <button className="border border-[1px] border-solid border-[var(--grey900)] text--[var(--grey900)] ml-[1rem] px-[12px]  rounded-lg">
              Charger settings
            </button> */}

          </div>
        </div>

        <p className="subHeader">
          Monitor your charger revenue, status, and energy consumption
        </p>

      </section>

        <ChargerRevenue  ChargerDetails={chargersDetails}/>

        <ChargerOperation chargerId={chargerId} ChargerDetails={chargersDetails}/>

        <Last10Transactions />

        { PowerModal && ( <Modal closeModal={setPModal}>
         <ChargerPower closeModal={setPModal} chargerId={chargerId} GetChargerDetails={GetChargerDetails}/>
        </Modal>)
      }

      {powerOn && (<Modal closeModal={setPowerOn}>
        <PowerOnCharger closeModal={setPowerOn} chargerId={chargerId} GetChargerDetails={GetChargerDetails}/>
      </Modal>)}
    </section>
    )}
    </>
  );
}
