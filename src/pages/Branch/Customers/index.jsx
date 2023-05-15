import { Table } from "antd";
import React, { useEffect, useState } from "react";

import axios from "../../../lib/axiosInterceptor";

import eye from "../../../assets/svg/eye.svg"

export default function CustomerList() {
	const [enrolled, setEnrolled] = useState(true);
	const [customers, setCustomers] = useState();

	const getCustomers = async () => {
		axios
			.get(`/customers`)
			.then((res) => {
				let index = 0;

				res.data.forEach((el) => {
					el.index = ++index;
				});

				setCustomers(res.data);
			});
	};


	useEffect(() => {
		getCustomers();
	}, []);

      let column =
      [
            {
            title: '#',
            dataIndex: 'index',
            key: 'index',
          },

          {
            title: 'Email address',
            dataIndex: 'email',
            key: 'email',
          },

          {
            title: 'Money  Spent',
            dataIndex: 'amount',
            key: 'amount',
          },

          {
            title: 'Phone number',
            dataIndex: 'phone',
            key: 'phone',
          },
      
          {
            title: 'Vehicles',
            dataIndex: 'vehicles',
            key: 'vehicles',
          },

          {
            title: 'Energy consumed',
            dataIndex: 'energy',
            key: 'energy',
          },
          {
            title: "",
            dataIndex: "",
            key: "",
            render: () => (
                <button className="flex justify-between bg-black text-white p-[0.5rem] rounded-md ">
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
						<h4 className="mb-[8px]">Customers</h4>
						<p className="subHeader">
							Get a review of your customer consumption summary
						</p>
					</div>
					<div>
						<button className="border-2  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey900)]">
							General price change{" "}
						</button>
					</div>
				</div>
			</section>

			<section className={`mb-[var(--marginBtwSection)]`}>
				<div
					className={`flex w-[24rem] h-[4rem] bg-[var(--grey10)] items-center`}
				>
					<div
						className={`w-[50%]  h-[100%] cursor-pointer  ${
							enrolled
								? " border-b-4 border-black "
								: " border-b-4 border-[#E2E2E2)]"
						}  text-center font-semibold`}
                                    onClick={()=>setEnrolled(true)}
					>
						<h5
							className={`text-sm pt-[1.25rem] ${
								enrolled ? " text-black" : "text-[var(--grey500)]"
							}`}
						>
							ENROLLED
						</h5>
					</div>

					<div
						className={`w-[50%] cursor-pointer   h-[100%]  ${
							!enrolled
								? " border-b-4 border-black "
								: " border-b-4 border-[#E2E2E2)]"
						} text-center font-semibold`}
                                    onClick={()=>setEnrolled(false)}
					>
						<h5
							className={`text-sm pt-[1.25rem] ${
								!enrolled ? " text-black" : "text-[var(--grey500)]"
							}`}
						>
							NEW CUSTOMERS
						</h5>
					</div>
				</div>

                        <Table columns={column}/>
			</section>
		</section>
	);
}
