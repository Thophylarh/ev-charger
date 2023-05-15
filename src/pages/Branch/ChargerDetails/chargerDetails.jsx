import React, {useState, useEffect} from "react";
import ForwardArrow from "../../../assets/svg/forwardArrow.svg";
import PowerButton from "../../../assets/svg/power.svg";
import ChargerRevenue from "../../../components/Branch/chargerDetailsComponents/chargerRevenueComponent/chargerRevenue";
import ChargerOperation from "../../../components/Branch/chargerDetailsComponents/chargerOperation/chargerOperation";
import Last10Transactions from "../../../components/last10Transactions/last10Transactions";
import { useSearchParams } from "react-router-dom";
import axios from "../../../lib/axiosInterceptor";

import Modal from "../../../components/modals/modal"
import ChargerPower from "../../../components/modals/ChargerPower"



export default function Details() {
    const [chargersDetails, setChargerDetails] = useState([]);
    const [PowerModal, setPModal] = useState(false)

    const [searchParams] = useSearchParams();

    let chargerId = searchParams.get("chargerId");

 //charger details
  const GetChargerDetails = () => {
    
    axios
      .get( `/Chargers/get-charger-by-id/${chargerId}`)
      .then((res) => {
        console.log(res)
        setChargerDetails(res.data[0]);
      
      });
  };

  useEffect(() => {
    GetChargerDetails();
}, []);

  return (
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

            <button className="flex justify-between" onClick={(e)=>{setPModal(true)}}>
              <img src={PowerButton} alt="Power Button" />

              <p className="pl-[4px] text-[var(--error500)] font-normal text-[16px]">Turn off charger</p>
            </button>

            <button className="border border-[1px] border-solid border-[var(--grey900)] text--[var(--grey900)] ml-[1rem] px-[12px]  rounded-lg">
              Charger settings
            </button>

          </div>
        </div>

        <p className="subHeader">
          Monitor your charger revenue, status, and energy consumption
        </p>

      </section>

        <ChargerRevenue chargerId={chargerId}/>

        <ChargerOperation/>

        <Last10Transactions chargerId={chargerId}/>

        { PowerModal && ( <Modal closeModal={setPModal}>
         <ChargerPower/>
        </Modal>)
      }

    </section>
  );
}
