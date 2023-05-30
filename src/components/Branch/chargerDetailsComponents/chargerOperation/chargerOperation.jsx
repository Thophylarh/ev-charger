import React, {useState, useEffect} from "react";
import BarChart from "../../../../Graphs/Chart/detailsBarChart";

import OperationHours from "../../../../assets/svg/operationHours.svg";

import BillingType from "../../../../assets/svg/billingType.svg"
import RunningTime from   "../../../../assets/svg/runningTime.svg";
import OperationModal from "../../../modals/operationModal";
import ShiftModal from "../../../modals/addNewShift";
import Modal from "../../../modals/modal"
import { secondToHours } from "../../../../utils/secondtoHours";

import axios from "../../../../lib/axiosInterceptor"
import moment from "moment";
import NewShift from "../../../modals/addNewShift";


const ChargerOperation = ({chargerId, ChargerDetails, GetChargerDetails}) =>{
    const [OModal, setOModal] = useState(false)
    const [SModal, setSModal] = useState(false)
    const [Time, setTime ] = useState()

    const [chartData, setChartData]= useState([])

     //charger graph 
  const chargerGraph = () =>{
   
    axios.get(`/Transactions/get-group-transaction-by-month/charger/${chargerId}`)
    .then((res)=>{
  
    setChartData(res.data)
     
    })
  }

  let month = chartData.map((data)=>{
    return moment(data.month, "M").format("MMM")
  })

 let BmsData = chartData.map((data) =>{
    return data.bmsRevenue
 })
  
 let ACData = chartData.map((data) =>{
    return data.acRevenue
 })

 let DcData = chartData.map((data) =>{
    return data.dcRevenue

 })

  const formatHours = ( hours) =>{
    // e.preventDefault();
   let arr = hours?.split(" ")
   

     const newHours = arr[0] + "-" + arr[1]

     console.log(newHours)

     return newHours

  }

  useEffect(() => {
    chargerGraph();
  }, []);

    return(
    <section className={`mb-[var(--marginBtwSection)] max-h-[257.5rem]`}>
    <div className="grid grid-cols-12 gap-4 h-[100%]">
        <div className="col-span-9">
            <BarChart month={month} BmsData={BmsData} ACData={ACData} dcRevenue={DcData}/>
        </div>
        <div className="col-span-3">
            <div className={`mb-[var(--marginBtwElements)]`}>
                <h3>CHARGERS OPERATION INFO</h3>
            </div>

            <div
                className={`flex justify-between bg-[var(--grey50)] py-[1.5rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
            >
                <div>
                <h2 className="mb-[1rem]">
                    OPERATION HOURS
                </h2>

                <h4 className="mb-[var(--marginBtwElements)] ">{formatHours(ChargerDetails.OperationalHours)}</h4>

                <h3 className="text-[#007EF2] cursor-pointer" onClick={(e)=>{setSModal(true)}}>Change Hours</h3>
                </div>
                <div>
                    <img src={OperationHours} alt="Operation Hours" />
                </div>
            </div>

            <div
                className={` flex justify-between items-center bg-[var(--grey50)] py-[1.5rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
            >
                <div>
                    <h2 className="text-[0.875rem] mb-[1.25rem]">
                    Billing type
                    </h2>

                    <h4>{ChargerDetails.BillingType}</h4>
                </div>
                <div>
                <img src={BillingType} alt="Billing Type" />
                </div>
            </div>

            <div
                className={`flex justify-between items-center  bg-[var(--grey50)] py-[1.5rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
            >
                <div>
                    <h2 className="text-[0.875rem] mb-[1.25rem]">
                    Running time
                    </h2>

                    <h4>{ secondToHours(ChargerDetails.TimeConsumed)}</h4>
                </div> 

                <img src={RunningTime} alt="Running Time"  />
            </div>
        </div>
    </div>
    {/* {
        OModal && <Modal closeModal={setOModal}>
            <OperationModal shift={setSModal}/>
        </Modal>
    } */}

        {
        SModal && <Modal closeModal={setSModal}>
           <NewShift shift={setSModal} setTime={setTime} Details={GetChargerDetails}/>
        </Modal>
    }

</section>
    )
}

export default ChargerOperation