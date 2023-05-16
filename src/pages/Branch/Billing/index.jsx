import React, {useState, useEffect, useRef} from "react";
import EditPrice from "../../../components/modals/editPrice";
import Modal from "../../../components/modals/modal";
import axios from "../../../lib/axiosInterceptor"
import { useSearchParams } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
import ACPrice from "../../../components/modals/ACprice"
import Dcprice from "../../../components/modals/dcPice"
import BmsGrid from "../../../components/modals/bmsGrid"

export default function StationBilling() {
	const [priceModal, setPriceModal] = useState(false)
	const [acModal, setAcModal] = useState(false)
	const [DCModal, setDcModal] = useState(false)
	const [bmsGridModal, setBmsGridModal] = useState(false)
	const [changeHIstory, setChangeHistory] = useState([])
	const [bmsGrid, setBmsGrid] = useState(0.00)
	const [bmsGreen, setBmsGreen] = useState(0)
	const [bmsUtility, setbmsUtility] = useState(0.00)
	const [dcGrid, setDcGrid] = useState(0.00)
	const [dcGreen, setDcGreen] = useState(0.00)
	const [dcUtility, setDcUtility] = useState(0.00)
	const [acGrid, setACGrid] = useState(0.00)
	const [acGreen, setACGreen] = useState(0.00)
	const [acUtility, setACUtility] = useState(0.00)
	const [oldPrice, setOldPrice] = useState(0)
	

	const [searchParams] = useSearchParams();

	let companyId = searchParams.get("companyId");

	//billing log 
	const Billings = () =>{
    axios
      .get( `/Billings/get-all-billing-log/${companyId}`)
      .then((res) => {
    //   console.log(res)
      setChangeHistory(res.data)
      });
	}

	const CurrentBilling = () =>{
		axios
		.get( `/Billings/get-current-billing/green/bms/${companyId}`)
      .then((res) => {
      console.log(res)
    	// setBmsGreen(res)
      });

	  axios
		.get( `/Billings/get-current-billing/utility/bms/${companyId}`)
      .then((res) => {
		// console.log(res.data)
    	// setbmsUtility(res.data)
      });

	  
	  axios
		.get( `/Billings/get-current-billing/grid/bms/${companyId}`)
      .then((res) => {
		// // console.log(res.data)
		// setBmsGrid(res.data)
      });

	  //dc 
	  axios
	  .get( `/Billings/get-current-billing/green/dc/${companyId}`)
	.then((res) => {
 
	});

	axios
	  .get( `/Billings/get-current-billing/utility/dc/${companyId}`)
	.then((res) => {
	
	});

	
	axios
	  .get( `/Billings/get-current-billing/grid/dc/${companyId}`)
	.then((res) => {
	
	});

	  //Ac 
	  axios
	  .get( `/Billings/get-current-billing/green/ac/${companyId}`)
	.then((res) => {
 
	});

	axios
	  .get( `/Billings/get-current-billing/utility/ac/${companyId}`)
	.then((res) => {
	
	});

	
	axios
	  .get( `/Billings/get-current-billing/grid/ac/${companyId}`)
	.then((res) => {
	
	});
	} 

	//change price

	useEffect(() => {
		Billings();
		CurrentBilling();
	}, []);

	

  return (
		<section>
			<section className={`mb-[var(--marginBtwSection)]`}>
				<div className={`flex justify-between items-center `}>
					<div>
						<h4 className="mb-[8px]">Billing</h4>
						<p className="subHeader">Set your charger billing and price</p>
					</div>
					{/* <div>
						<button className="border-2  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey900)]">
							General price change{" "}
						</button>
					</div> */}
				</div>
			</section>

			<section className={`mb-[var(--marginBtwSection)]`}>
				<div className=" grid grid-cols-12  gap-4  ">
					<div className="  col-span-9">
						<div className={`mb-[var(--marginBtwElements)]`}>
							<div>
								<h3 className={`text-[var(--goldColor)] mb-[0.5rem]`}>
									CICE PRICE/KW SUMMARY
								</h3>
							</div>
							<div>
								<div className=" grid grid-cols-3  ">
									<div className="revenueBlock">
										<h3>WHEN ON GRID</h3>

										<h5>NGN{bmsGrid}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setBmsGridModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON UTILITY</h3>

										<h5>NGN {bmsUtility}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setPriceModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON GREEN ENRGY</h3>

										<h5>NGN {bmsGreen}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setPriceModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className={`mb-[var(--marginBtwElements)]`}>
							<div>
								<h3 className={`text-[var(--primaryGreen500)] mb-[0.5rem]`}>
									AC PRICESUMMARY
								</h3>
							</div>
							<div>
								<div className=" grid grid-cols-3  ">
									<div className="revenueBlock">
										<h3>WHEN ON GRID</h3>

										<h5>NGN {acGrid}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setAcModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON UTILITY</h3>

										<h5>NGN {acUtility}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setAcModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON GREEN ENRGY</h3>

										<h5>NGN {acGreen}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setAcModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className={`mb-[var(--marginBtwElements)]`}>
							<div>
								<h3 className={`mb-[0.5rem]`}>DC PRICE SUMMARY</h3>
							</div>
							<div>
								<div className=" grid grid-cols-3  ">
									<div className="revenueBlock">
										<h3>WHEN ON GRID</h3>

										<h5>NGN {dcGrid}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setDcModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON UTILITY</h3>

										<h5>NGN {dcUtility}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setDcModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>

									<div className="revenueBlock">
										<h3>WHEN ON GREEN ENERGY</h3>

										<h5>NGN {dcGreen}/KW</h5>

										<button className="text-[var(--blueLink)]" onClick={(e)=>setDcModal(true)}>
											{" "}
											Edit price{" "}
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="  col-span-3 items-start">
						<h3 className={`mb-[var(--marginBtwElements)]`}>
							PRICE CHANGE HISTORY
						</h3>

						<div>
						{/* {changeHIstory.map((history) =>(
									<div key={history.id}
									className={`w-full h-[9rem] bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
								>
									
									<div className={`flex justify-between items-center mb-4`}>
										<h6 className={`text-[var(--goldColor)] text-sm`}>{history.chargerType} on {history.billingType}</h6>
	
										<p className={`text-xs text-[var(--grey500)]`}>
											{" "}
											 {formatDate(history.updatedAt) }
										</p>
									</div>
	
									<div className={`flex justify-between items-center`}>
										<div className="text-[var(--grey600)]">
											<h6 className={` font-medium text-base`}> NGN{history.previousCostPerUnitCharge}/kw</h6>
											<p className={`text-xs`}>old price</p>
										</div>
	
										<p
											className={`text-[1.25rem] mt-[-1.5rem]  text-[var(--grey500)]`}
										>
											{" "}
											-{" "}
										</p>
	
										<div className="text-[var(--primaryGreen500)]">
											<h6 className={` font-medium text-base`}>NGN{history.costPerUnitCharge}/kw</h6>
											<p className={`text-xs`}>new price</p>
										</div>
									</div>
								</div>
									))}
							 */}
 
							<div
								className={`w-full h-[9rem] bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
							>
								<div className={`flex justify-between items-center mb-4`}>
									<h6 className={`text-[var(--goldColor)] text-sm` }>CICE ON GREEN ENRGY</h6>

									<p className={`text-xs text-[var(--grey500)]`}>
										{" "}
										23- 06 - 2023
									</p>
								</div>

								<div className={`flex justify-between items-center`}>
									<div className="text-[var(--grey600)]">
										<h6 className={` font-medium text-base`}>NGN{oldPrice}kw</h6>
										<p className={`text-xs`}>old price</p>
									</div>

									<p
										className={`text-[1.25rem] mt-[-1.5rem]  text-[var(--grey500)]`}
									>
										{" "}
										{" "}
									</p>

									<div className="text-[var(--primaryGreen500)]">
										<h6 className={` font-medium text-base`}>NGN{bmsGreen}kw</h6>
										<p className={`text-xs`}>new price</p>
									</div>
								</div> 
							</div>

							<div
								className={`w-full h-[9rem] bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
							>
								<div className={`flex justify-between items-center mb-4`}>
									<h6 className={`text-[var(--goldColor)] text-sm` }>AC ON GREEN ENRGY</h6>

									<p className={`text-xs text-[var(--grey500)]`}>
										{" "}
										23- 06 - 2023
									</p>
								</div>

								<div className={`flex justify-between items-center`}>
									<div className="text-[var(--grey600)]">
										<h6 className={` font-medium text-base`}>NGN{oldPrice}kw</h6>
										<p className={`text-xs`}>old price</p>
									</div>

									<p
										className={`text-[1.25rem] mt-[-1.5rem]  text-[var(--grey500)]`}
									>
										{" "}
										{" "}
									</p>

									<div className="text-[var(--primaryGreen500)]">
										<h6 className={` font-medium text-base`}>NGN{acGreen}kw</h6>
										<p className={`text-xs`}>new price</p>
									</div>
								</div> 

								
							</div>
						</div>

						<div
								className={`w-full h-[9rem] bg-[var(--grey50)] py-[1.75rem] px-[1.25rem] rounded-lg mb-[var(--marginBtwElements)]`}
							>
								<div className={`flex justify-between items-center mb-4`}>
									<h6 className={`text-[var(--goldColor)] text-sm` }>DC ON GREEN ENRGY</h6>

									<p className={`text-xs text-[var(--grey500)]`}>
										{" "}
										23- 06 - 2023
									</p>
								</div>

								<div className={`flex justify-between items-center`}>
									<div className="text-[var(--grey600)]">
										<h6 className={` font-medium text-base`}>NGN{oldPrice}kw</h6>
										<p className={`text-xs`}>old price</p>
									</div>

									<p
										className={`text-[1.25rem] mt-[-1.5rem]  text-[var(--grey500)]`}
									>
										{" "}
										{" "}
									</p>

									<div className="text-[var(--primaryGreen500)]">
										<h6 className={` font-medium text-base`}>NGN{dcGreen}kw</h6>
										<p className={`text-xs`}>new price</p>
									</div>
								</div> 

								
							</div>
						</div>
					</div>
				
				{priceModal && ( <Modal closeModal={setPriceModal}>
					<EditPrice closeModal={setPriceModal} setBmsGreen={setBmsGreen} setOldPrice={setOldPrice}/>
        		</Modal>)
      			}
				{bmsGridModal && ( <Modal closeModal={setBmsGridModal}>
					<BmsGrid closeModal={setBmsGridModal} setBmsGridModal={setBmsGridModal} setOldPrice={setOldPrice}/>
        		</Modal>)
      			}
				{acModal &&  ( <Modal closeModal={setAcModal}>
					<ACPrice closeModal={setAcModal} setACGreen={setACGreen} />
        		</Modal>)}
				{DCModal &&  ( <Modal closeModal={setDcModal}>
					<Dcprice closeModal={setDcModal} setDcGreen={setDcGreen} />
        		</Modal>)}
			</section>
		</section>
	);
}
