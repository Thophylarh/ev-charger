import React, { useEffect, useState } from "react";
// import Arrow from "../../assets/svg/arrow.svg";
import Hero from "../../../components/Hero/hero";
import ChargerStat from "../../../components/chargerStat/charger";
import ListOfChargers from "../../../components/listOfChargers/listOfChargers";
import Transactions from "../../../components/last10Transactions/transactions";

import axios from "../../../lib/axiosInterceptor";
// import axios from 'axios'
import { DatePicker } from "antd";
import moment from "moment";

const Index = () => {
	const [totalCompanyChargers, setTotal] = useState("");
	const [data, setData] = useState("");
	const [companyActiveChargers, setActiveChargers] = useState("");
	const [OfflineCharger, setOfflineChargers] = useState("");
	const [companyEnergy, setCompanyEnergy] = useState("");
	const [chargerList, setChargerList] = useState([]);
	const [companyTransactions, setCompanyTransactions] = useState([]);
	const [revenue, setRevenue] = useState([]);
	const [graphData, setGraphData] = useState([]);
	const [FgraphData, setFGraphData] = useState([]);
	const [fRevenue, setFRevenue] = useState([]);
	const [filtered, setfiltered] = useState(false);
	const [empty, setempty] = useState([]);
	const [newDate, setNewDate] = useState();
	const [testRevenue, setTestRevenue] = useState([]);
	const [testGraph, setTestGraph] = useState([]);

	//base url
	// const url = "http://evapi.estations.com";
	const url = "";

	// berarer token from local storage
	const token = localStorage.getItem("user-token");

	//company id
	const id = localStorage.getItem("id");

	//get company details
	const getData = () => {
		axios
			.get(url + "/Companies/get-company-by-id/" + id, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setData(res.data);
			});
	};

	//number of chargers in company
	const GetcompanyChargers = () => {
		axios
			.get(url + `/Chargers/get-total-company-charger-count/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setTotal(res.data);
			});
	};

	//get number of active chargers in company
	const GetcompanyActiveChargers = () => {
		axios
			.get(url + `/Chargers/get-company-active-charger-count/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setActiveChargers(res.data);
			});
	};

	//get number of offline chargers in company
	const GetOfflineChargers = () => {
		axios
			.get(url + `/Chargers/get-company-offline-charger-count/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setOfflineChargers(res.data);
			});
	};

	//get Company energy consumption

	const GetTotalEnergy = () => {
		axios
			.get(url + `/Chargers/get-total-energy-consumed-by-company/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setCompanyEnergy(res.data);
			});
	};

	//get list of chargers
	const getListOfChargers = () => {
		axios
			.get(url + `/Chargers/get-list-company-chargers/${id}`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setChargerList(res.data);
			});
	};

	//company last 10 transactions
	const transactions = () => {
		const limit = 10;
		axios
			.get(
				url + `/Transactions/get-last10-transactions/company/${id}/${limit}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			)
			.then((res) => {
				setCompanyTransactions(res.data);
			});
	};

	const getRevenueOverview = async () => {
		let finalUrl;
		if (!newDate || newDate === " ") {
			finalUrl = `${url}/Transactions/get-revenue/company/${id}`;
		} else {
			let seperatedDate = newDate.split("-");

			finalUrl = `${url}/Transactions/get-revenue-by-month-year/company/${id}/${seperatedDate[1]}/${seperatedDate[0]}`;
		}

		axios
			.get(finalUrl, { headers: { Authorization: `Bearer ${token}` } })
			.then((res) => {
				setTestRevenue(res.data);
				// setfiltered(true);
			});
	};

	const getRevenueGraph = async () => {
		let finalUrl;
		if (!newDate) {
			finalUrl = `${url}/Transactions/get-group-transaction-by-month/company/${id}`;
		} else {
			let seperatedDate = newDate.split("-");

			finalUrl = `${url}/Transactions/get-transaction-by-month-year/company/${id}/${seperatedDate[1]}/${seperatedDate[0]}`;
		}

		axios
			.get(finalUrl, { headers: { Authorization: `Bearer ${token}` } })
			.then((res) => {
				setTestGraph(res.data);
			});
	};

	// on select date
	const onSelectDate = async (date, dateString) => {
		setNewDate(dateString);
	};

	//billing

	//on mount get data
	useEffect(() => {
		getRevenueOverview();
		getRevenueGraph();
		getData();
		GetcompanyChargers();
		GetcompanyActiveChargers();
		GetOfflineChargers();
		GetTotalEnergy();
		getListOfChargers();
		transactions();
	}, []);

	useEffect(() => {
		getRevenueOverview();
		getRevenueGraph();
	}, [newDate]);

	return (
		<div className="w-full h-[100vh]  py-2 px-4 ">
			<div className="w-full h-screen py-2 px-4 overflow-y-scroll">
				<div>
					<div className="flex justify-between items-center">
						<div>
							<h1 className="font-bold text-2xl">Hello, {data.companyName} </h1>
						</div>
						{/* <div className="flex w-[10rem] justify-between items-center bg-black rounded-md  px-5 py-1">
            <p className=" text-white font-light text-base ">This month</p>
            <img className="" src={Arrow} alt="" /> 
            
          </div> */}
						<div>
							<DatePicker picker="month" onChange={onSelectDate} />
						</div>
					</div>
					<p className="text-gray-400 font-normal text-sm">
						Explore your company dashboard here
					</p>
					<div className="mt-[1rem]">
						<Hero revenue={testRevenue} graphData={testGraph} />
						{/* {filtered? <FilteredHero fRevenue={fRevenue} graphData={FgraphData} empty={empty}/>:  <Hero revenue={revenue} graphData={graphData}/>  } */}
					</div>
					<ChargerStat
						total={totalCompanyChargers}
						ActiveChargers={companyActiveChargers}
						OfflineChargers={OfflineCharger}
						TotalEnergy={companyEnergy}
					/>
					<ListOfChargers chargers={chargerList} />
					<Transactions transactions={companyTransactions} />
				</div>
			</div>
		</div>
	);
};

export default Index;
