import React, {useState, useEffect} from 'react';
import CICEBilling from "../../../components/Company/billingComponents/CiceBilling";
import ACBilling from "../../../components/Company/billingComponents/AcBilling";
import DCBilling from "../../../components/Company/billingComponents/DcBilling";
import PriceChangeCard from "../../../components/Branch/BilllingComponent/PriceChangeCard";
import EditPrice from "../../../components/modals/CbillingModal";
import Modal from "../../../components/modals/modal";
import axios from "../../../lib/axiosInterceptor";


 const Cbilling = () => {
	const [priceModal, setPriceModal] = useState(false);
	const [details, setDetails] = useState();

	const [stations, setStations] = useState([])
    const [loading, setLoading] = useState(false)

	const companyId = localStorage.getItem("id");

	const openModal = (type, billingType, prevPrice) => {
		setPriceModal(true);
		setDetails({
			type,
			billingType,
			prevPrice,
		});
	};

	//get list of all stations in company
	const getData = ( ) =>{
		setLoading(true)
		  axios.get( "/Stations/get-station-by-company/" + companyId)
		  .then((res)=>{
		  //   console.log(res.data, "this is the data")
			setStations(res.data)
			console.log(res.data)
			setTimeout(() => {
			  setLoading(false);
			}, 2000);
		  })
		}
	   
		useEffect(()=>{
			getData()
		  }, [])

  return (
    <>
    <div className='h-[100vh] overflow-y-scroll w-[95%] mx-auto my-[0.5rem]'>
    <section className={`mb-[var(--marginBtwSection)]`}>
						<div className={`flex justify-between items-center `}>
							<div>
								<h4 className="mb-[8px]">Billing</h4>
								<p className="subHeader">Set your charger billing and price</p>
							</div>
						</div>
					</section>
                    <section className={`mb-[var(--marginBtwSection)]`}>
						<div className=" grid grid-cols-12  gap-2  ">
							<div className="  col-span-9">
								<CICEBilling  openModal={openModal} />

								<ACBilling openModal={openModal} />

								<DCBilling openModal={openModal} />
							</div>

							<div className="  col-span-3 items-start   ">
								<h3 className={` pl-4 mb-3`}>PRICE CHANGE HISTORY</h3>
								<div className="py-4 px-3  max-h-[80vh] overflow-y-auto">
									<div className="h-[100%] ">
										{/* CICE PRICE */}
										{/* {latestChange?.map((history, index) => (
											<PriceChangeCard history={history} key={index} />
										))} */}
									</div>
								</div>
							</div>
						</div>
					</section>
					{priceModal && (
						<Modal closeModal={setPriceModal}>
							<EditPrice
								closeModal={setPriceModal}
								details={details}
								stations={stations}
							/>
						</Modal>
					)}	
    </div>
    
   
    </>
  )
}

export default Cbilling