import React from "react";
import Profit from "../../../assets/svg/profit.png";
import ListOfTransactions from "../../../components/last10Transactions/last10Transactions";


const Report = () =>{
    return (
        <section>
           <section className={`mb-[var(--marginBtwSection)]`}>
            <h4>Sales Report</h4>

            <p className="subHeader">Here is an overview and breakdown of your station energy revenue and consumption.</p>
           </section>

           <section className={`mb-[var(--marginBtwSection)]`}>
			<div className=" grid grid-cols-4  ">
				<div className="revenueBlock">
					<h3>CICE REVENUE</h3>

					<h5>
						NGN 300,000.<sup>00</sup>{" "}
					</h5>

					<p>7,000.00 KW</p>
				</div>

				<div className="revenueBlock">
					<h3>AC REVENUE</h3>

					<h5>
						NGN 300,000.<sup>00</sup>{" "}
					</h5>

					<p>7,000.00 KW</p>
				</div>

				<div className="revenueBlock">
					<h3>DC REVENUE</h3>

					<h5>
						NGN 300,000.<sup>00</sup>{" "}
					</h5>

					<p>7,000.00 KW</p>
				</div>

				<div className="totalRevenueBlock text-white pl-[1.25rem]">
					<h3>TOTAL REVENUE</h3>

					<h5>
						NGN 500,000.<sup>00</sup>{" "}
					</h5>

					<div className="flex items-center">
						<img
							src={Profit}
							alt="profit indicator"
							className="mr-[0.25rem] w-[0.6rem] h-[0.6875rem]"
						/>
						<p>22% since last month </p>
					</div>
				</div>
			</div>
		</section>

        <section>
            {/* <p>Transactions List</p> */}
            <ListOfTransactions />
        </section>
        </section>

       
    )
}

export default Report 