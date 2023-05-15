import React, {useState, useEffect} from "react"

import { Table } from "antd";
import axios from "../../lib/axiosInterceptor";
import { formatNumber } from "../../utils/formatNumber";
import moment from "moment";
import activeDot from "../../assets/svg/activeDot.svg"
import eye from "../../assets/svg/eye.svg"
import Modal from "../modals/modal"
import TransactionDetails from "../modals/transactionDetails"


const Last10Transactions = (props) =>{
    const [chargerTransactions, setchargerTransactions] = useState([])
    const [TModal, setModal] = useState(false)
    
    const id = props.chargerId

 // transactions for specific charger
  const transactions = () => {
    const limit = 10;
    axios
      .get(
         `/Transactions/get-last10-transactions/charger/${id}/${limit}`)
      .then((res) => {
        setchargerTransactions(res.data);
      });
  };
    
  useEffect(() => {
    transactions();
}, []);

const Columns =
  
[
    {
        title: "#",
        dataIndex: "index",
        key: "index",
    },
    {
        title: "Date",
        dataIndex: "dateOfTransaction",
        key: "dateOfTransaction",
        render: (dateOfTransaction) => (
            <p>{moment(dateOfTransaction).format(" MMMM DD YYYY HH:mm")}</p>
        ),
    },
    {
        title: "Charger",
        dataIndex: "chargerName",
        key: "transactionId",
    },

    { 
        title: "Charger Type",
         dataIndex: "chargerType", 
         key: "Charger Type",
         render: () =><p>CICE</p>
     },
    {
        title: "Amount",
        dataIndex: "totalAmount",
        key: "totalAmount",
        render: (totalAmount) => <p>{formatNumber(totalAmount, true)}</p>,
    },
    {
        title: "Balance",
        dataIndex: "balance",
        key: "balance",
        render: (totalAmount) => <p>{formatNumber(totalAmount, true)}</p>,
    },
    {
        title: "Energy",
        dataIndex: "totalUnitChargedInEnergy",
        key: "totalUnitChargedInEnergy",
        render: (totalUnitChargedInEnergy) => (
            <p>
                {formatNumber(totalUnitChargedInEnergy)}
                kWh
            </p>
        ),
    },
  
    // {
    //     title: "Charge Duration",
    //     dataIndex: "totalUnitChargedInTime",
    //     key: "totalUnitChargedInTime",
    //     render: (totalUnitChargedInTime) => (
    //         <p>{formatNumber(totalUnitChargedInTime / 60)} hour(s)</p>
    //     ),
    // },
    {
        title: "Status",
        dataIndex: "transactionStatus",
        key: "transactionStatus",
        render: (transactionStatus) => (
            <button className="flex justify-between" >
               <img src={activeDot} className="pr-[0.25rem] mt-[6px]"/>
               <p className="text-[#15833C] font-semibold text-xs leading-5">Completed</p>
            </button>
        ),
    },
    {
        title: "",
        dataIndex: "",
        key: "",
        render: () => (
            <button className="flex justify-between bg-black text-white p-[0.5rem] rounded-md" onClick={(e)=>{setModal(true)}}>
               <img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
               <p>View details</p>
            </button>
        ),
    },
]

    return(
    <section>
    <div className={`mb-[var(--marginBtwElements)] `}>
            <h3>LAST 10 TRANSACTIONS</h3>
        </div>

        <div>
            <Table
                columns={Columns}
                pagination={false}
                dataSource={chargerTransactions}

            />
        </div>
        {TModal && ( <Modal closeModal={setModal}>
         <TransactionDetails />
        </Modal>)
      }
    </section>
   
    )
 }

export default Last10Transactions