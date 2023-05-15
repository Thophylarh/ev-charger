import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "../../../lib/axiosInterceptor";
import "./style.css";

import ChargersCard from "../../../components/Company/ChargersCard";

import { DatePicker, Table } from "antd";
import moment from "moment";
import { formatNumber } from "../../../utils/formatNumber";
import activeDot from "../../../assets/svg/activeDot.svg"
import eye from "../../../assets/svg/eye.svg"

import StationDashboardOverview from "../../../components/Branch/DashboardComponents/Overview";
import ChartOverview from "../../../components/Branch/DashboardComponents/ChartOverview";
import Column from "../../../utils/columns";

import Modal from "../../../components/modals/modal"
import TransactionDetails from "../../../components/modals/transactionDetails"

export default function Dashboardd() {
	const [transaction, setTransaction] = useState([]);
	const [stationChargerList, setStationChargerList] = useState([]);
	const [TModal, setModal] = useState(false)

	const [searchParams] = useSearchParams();

	let stationId = searchParams.get("stationId");

	let companyId = searchParams.get("companyId");

	// API CALLS

	//last 10 transactions
	const getTransactions = async () => {
		axios
			.get(`/Transactions/get-last10-transactions/station/${stationId}/10`)
			.then((res) => {
				let index = 0;

				res.data.forEach((el) => {
					el.index = ++index;
				});

				setTransaction(res.data);
			});
	};

	//get list of chargers in station
	const getListOfChargers = () => {
		axios
			.get(`/Chargers/get-list-station-charger/${companyId}/${stationId}`)
			.then((res) => {
				

				setStationChargerList(res.data);
			});
	};


	// CUSTOM FUNCTIONS
	const onSelectDate = (date, dateString)=>{
console.log(dateString)
	}


	useEffect(() => {
		getTransactions();
		getListOfChargers();
	}, []);

	//table columns 
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



	return (
		<section>
			<section className={`mb-[var(--marginBtwSection)]`}>
				<div className={`flex justify-between items-center `}>
					<div>
						<h4 className="mb-[8px]">Hello, Sterling HQ</h4>
						<p className="subHeader">
							Here is an overview and breakdown of your station energy revenue
							and consumption.
						</p>
					</div>
					<div>
						<DatePicker  onChange={onSelectDate} />
					</div>
				</div>
			</section>

			<StationDashboardOverview stationId={stationId} />

			<ChartOverview />

			<section className={`mb-[var(--marginBtwSection)]`}>
				<div className="flex justify-between items-center mb-[var(--marginBtwElements)]">
					<h3>STATION CHARGERS</h3>

					<button className="border-2  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey700)]">
						See all chargers
					</button>
				</div>

				<div className="bg-[var(--grey50)] p-[1.25rem] grid grid-cols-3 gap-4">
					{stationChargerList.map((charger, index) => (
						<ChargersCard charger={charger} key={index} />
					))}
				</div>
			</section>

			<section className={`mb-[var(--marginBtwSection)]`}>
				<div className={`mb-[var(--marginBtwElements)] `}>
					<h3>LAST 10 TRANSACTIONS</h3>
				</div>

				<div>
					<Table
						columns={Columns}
						pagination={false}
						dataSource={transaction}
					/>
				</div>
			</section>
			{TModal && ( <Modal closeModal={setModal}>
         <TransactionDetails />
        </Modal>)
      }
		</section>
	);
}
