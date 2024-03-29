import React, {useState} from "react";
import BarChart from "../../../../Graphs/Chart/barChart";
// import ActiveCharger from "../../../assets/svg/activeCharger.svg";
// import energyConsumed from "../../../assets/svg/energyConsumed.svg";
import OperationHours from "../../../../assets/svg/operationHours.svg";
import BillingType from "../../../../assets/svg/billingType.svg"
import RunningTime from   "../../../../assets/svg/runningTime.svg";
import OperationModal from "../../../modals/operationModal";
import Modal from "../../../modals/modal"
import TransactionDetails from "../../../modals/transactionDetails"


const ChargerOperation = () =>{
    const [OModal, setOModal] = useState(false)

    return(
    <section className={`mb-[var(--marginBtwSection)] max-h-[257.5rem]`}>
    <div className="grid grid-cols-12 gap-4 h-[100%]">
        <div className="col-span-9">
            <BarChart />
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

                <h4 className="mb-[var(--marginBtwElements)] ">12:00am - 8:00pm</h4>

                <h3 className="text-[#007EF2]" onClick={(e)=>{setOModal(true)}}>EDIT</h3>
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

                    <h4>Default (energy)</h4>
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

                    <h4>21hrs</h4>
                </div> 

                <img src={RunningTime} alt="Running Time"  />
            </div>
        </div>
    </div>
    {
        OModal && <Modal closeModal={setOModal}>
            <OperationModal/>
        </Modal>
    }
</section>
    )
}

export default ChargerOperation