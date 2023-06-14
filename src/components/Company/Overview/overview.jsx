import Profit from "../../../assets/svg/profit.png";
import React, {useState, useEffect} from "react";
import axios from "../../../lib/axiosInterceptor";
import { formatNumber } from "../../../utils/formatNumber";
import { splitNumber } from "../../../utils/splitNumber";

const Overview = ({id, newDate}) => {
    const [TestRevenue, setTestRevenue] = useState()
	const [TotalRevenue, setTotalRevenue] = useState()
	const [CiceRevenue, setCiceRevenue] = useState()
	const [AcRevenue, setAcRevenue] = useState()
	const [DcRevenue, setDcRevenue] = useState()

    const getRevenueOverview =  () => {
        
		let finalUrl;
		if (!newDate || newDate === " ") {
			finalUrl = `/Transactions/get-revenue/company/${id}`;
		} else {
			let seperatedDate = newDate.split("-");

			finalUrl = `/Transactions/get-revenue-by-month-year/company/${id}/${seperatedDate[1]}/${seperatedDate[0]}`;
		}

		axios
			.get(finalUrl)
			.then((res) => {
				setTestRevenue(res.data);
				setAcRevenue(splitNumber(res?.data?.acRevenue));
				setTotalRevenue(splitNumber(res?.data?.totalRevenue))
				setDcRevenue(splitNumber(res?.data?.dcRevenue))
				setCiceRevenue(splitNumber(res?.data?.bmsRevenue))
				// setfiltered(true);
			});
	};


    useEffect(() => {
		getRevenueOverview();

		return () => {};
	}, [newDate]);

    return ( <section>
        <div className=" grid grid-cols-4 gap-4  pt-[20px]">
				<div className="py-[1rem] bg-[#F2F4F7] ">
                    <div className="pl-[16px]"> 
					<h3 className="text-[#98A2B3] text-[12px] font-medium mb-[1rem]">TOTAL REVENUE</h3>
                    <h5 className="text-[#101828] text-[24px] font-bold mb-[1rem]">
                    NGN {formatNumber(TotalRevenue?.[0], false)}.
                    <sup>{TotalRevenue?.[1]}</sup>
                    </h5>

                    <div className="flex gap-x-2"><p> {formatNumber(TestRevenue?.percentageDifference)}%</p>
                    <img
								src={Profit}
								alt="profit indicator"
								className="mr-[0.25rem] mt-[0.25rem] w-[0.6rem] h-[0.6875rem]"
							/>
                    </div>
					</div>
				</div>

				<div className="py-[1rem] border border-y-1 border-x-0 ">
                <div className="pl-[16px] "> 
					<h3 className="text-[#98A2B3] text-[12px] font-medium mb-[1rem]">TOTAL CICE REVENUE</h3>
                    <h5 className="text-[#101828] text-[24px] font-bold mb-[1rem]">
                      NGN {formatNumber(CiceRevenue?.[0], false)}.

                    <sup>{CiceRevenue?.[1]}</sup>
                    </h5>

                    {/* <div className="flex gap-x-2"><p>22%</p>
                    <img
								src={Profit}
								alt="profit indicator"
								className="mr-[0.25rem] mt-[0.25rem] w-[0.6rem] h-[0.6875rem]"
							/>
                    </div> */}
					</div>
				</div>

				<div className="py-[1rem] border border-y-1 border-x-0 ">
                <div className="pl-[16px] ">
					<h3 className="text-[#98A2B3] text-[12px] font-medium mb-[1rem]">TOTAL AC REVENUE</h3>
                    <h5 className="text-[#101828] text-[24px] font-bold mb-[1rem]">
                     NGN {formatNumber(AcRevenue?.[0], false)}.
                    <sup>{AcRevenue?.[1]}</sup>
                    </h5>

                    {/* <div className="flex gap-x-2"><p>22%</p>
                    <img
								src={Profit}
								alt="profit indicator"
								className="mr-[0.25rem] mt-[0.25rem] w-[0.6rem] h-[0.6875rem]"
							/>
                    </div> */}

					</div>
				</div>

				
				<div className="py-[1rem] border border-y-1 border-x-0 ">
                <div className="pl-[16px] ">
					<h3 className="text-[#98A2B3] text-[12px] font-medium mb-[1rem]">TOTAL DC REVENUE</h3>
                    <h5 className="text-[#101828] text-[24px] font-bold mb-[1rem]">
                    NGN {formatNumber(DcRevenue?.[0], false)}.
                    <sup>{DcRevenue?.[1]}</sup>
                    </h5>
{/* 
                    <div className="flex gap-x-2"><p>22%</p>
                    <img
								src={Profit}
								alt="profit indicator"
								className="mr-[0.25rem] mt-[0.25rem] w-[0.6rem] h-[0.6875rem]"
							/>
                    </div> */}

					</div>
				</div>
			</div>
    </section> );
}
 
export default Overview;