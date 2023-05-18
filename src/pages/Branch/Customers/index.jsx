import { Table } from "antd";
import React, { useEffect, useState } from "react";

import axios from "../../../lib/axiosInterceptor";

import eye from "../../../assets/svg/eye.svg";
import { NavLink } from "react-router-dom";
import CsvExport from "../../../components/exportComponent/csvExport";


export default function CustomerList() {
  const [enrolled, setEnrolled] = useState(true);
  const [customers, setCustomers] = useState([]);

  const id = localStorage.getItem("stationId");
  const compId = localStorage.getItem("id");

  const getCustomers = async () => {
    axios.get(`/customers`).then((res) => {
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

  let column = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: "2%",
    },

    {
      title: "First name",
      dataIndex: "firstname",
      key: "firstname",
      width: "10%",
    },

    {
      title: "Last name",
      dataIndex: "lastname",
      key: "lastname",
      width: "10%",
    },

    {
      title: "Email address",
      dataIndex: "emailAddress",
      key: "emailAddress",
      width: "10%",
    },

    {
      title: "Money  Spent",
      dataIndex: "totalAmountSpent",
      key: "totalAmountSpent",
      width: "15%",
    },

    {
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
      width: "15%",
    },

    {
      title: "Number of Vehicles",
      dataIndex: "numberOfVehiclesOnFile",
      key: "numberOfVehiclesOnFile",
      width: "10%",
    },

    {
      title: "Energy consumed",
      dataIndex: "totalEnergyCharged",
      key: "totalEnergyCharged",
      width: "10%",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (text, record) => (
        <NavLink
          to={{
            pathname: "/station/customer/details",
            search: `?cus=${record.id}&stationId=${id}&companyId=${compId}`,
          }}
        >
          <button className="flex justify-between bg-black text-white p-[0.5rem] rounded-md ">
            <img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
            <p>View details</p>
          </button>
        </NavLink>
      ),
      width: "20%",
    },
  ];

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
          {/* <div>
						<button className="border-2  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey900)]">
							General price change{" "}
						</button>
					</div> */}
        </div>
      </section>

      <section className={`mb-[var(--marginBtwSection)]`}>
        <div className="flex justify-between">
        <div
          className={`flex justify-between w-[24rem] h-[4rem] bg-[var(--grey10)] items-center`}
        >
          <div
            className={`w-[50%]  h-[100%] cursor-pointer  ${
              enrolled
                ? " border-b-4 border-black "
                : " border-b-4 border-[#E2E2E2)]"
            }  text-center font-semibold`}
            onClick={() => setEnrolled(true)}
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
            onClick={() => setEnrolled(false)}
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
  
        <CsvExport data={customers} name={"customers"}/>
        </div>
        
        

        <Table columns={column} dataSource={customers} />
      </section>
    </section>
  );
}
