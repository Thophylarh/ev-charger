import React, { useState, useEffect } from "react";
import Dot from "../../assets/svg/activeDot.svg";
import dropDown from "../../assets/svg/dropDownArrow.svg";
import BackArrow from "../../assets/svg/backArrow.svg";
import Chart from "../Chart/lineChart";
import Doughnut from "../../assets/images/Doughnut.png";
import Transactions from "../last10Transactions/transactions";
import QuestionMark from "../../assets/svg/questionMark.svg";
import Suncircle from "../../assets/svg/sunCircle.svg";
import OperationHours from "../../assets/svg/operationHours.svg";
import BillingType from "../../assets/svg/billingType.svg";
import ChargerActivity from "../../assets/svg/chargerActivity.svg";
import { NavLink, Link } from "react-router-dom";
import OperationHour from "../modals/operationHours";
import BillingTypeModal from "../modals/billingTypeModal";
import DoughnutChart from "../Chart/pieChart";
import Modal from "../Modal/modal";
import axios from "axios";
import AddNewShift from "../modals/addNewShift";
import RedDot from "../../assets/svg/red-dot.svg";
import ClipLoader from "react-spinners/ClipLoader";

const SpecificCharger = () => {
  const [checked, setChecked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toggleLoading, setToggleLoading] = useState(false);
  const [operationModal, setOperationModal] = useState(false);
  const [billingModal, setBillingModal] = useState(false);
  const [addShiftModal, setAddShiftModal] = useState(false);
  const [chargerTransactions, setchargerTransactions] = useState([]);
  const [graphChargerData, setGraphChargerData] = useState([]);
  const [ChargerRevenue, setChargerRevenue] = useState([]);
  const [chargersDetails, setChargerDetails] = useState([]);

  const handleChange = (e) => {
    // e.preventDefault();
    setChecked(!checked);

    e.target.checked ? activateCharger() : deactivateCharger();
  };

  // const handleChange = (e) =>{
  //  let value = e.target.checked

  //  setChecked(value)
  // }

  const changeHours = () => {
    setOperationModal(true);
  };

  const changeBilling = () => {
    setBillingModal(true);
  };

  //base url
  const url = "http://evapi.estations.com";

  // bearer token from local storage
  const token = localStorage.getItem("token");

  //charger id
  const id = localStorage.getItem("chargerid");

  //charger details
  const GetChargerDetails = () => {
    setLoading(true);
    axios
      .get(url + `/Chargers/get-charger-by-id/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setChargerDetails(res.data[0]);
        setLoading(false);
      });
  };

  // deactive charger
  const deactivateCharger = () => {
    setToggleLoading(true);
    axios
      .get(url + `/Chargers/deactivate/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setToggleLoading(false);

        GetChargerDetails();
        console.log(res.data);
      });
  };

  //activate Charger
  const activateCharger = () => {
    setToggleLoading(true);
    axios
      .get(url + `/Chargers/activate/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setToggleLoading(false);
        GetChargerDetails();
        console.log(res.data);
      });
  };

  // transactions for specific charger
  const transactions = () => {
    const limit = 10;
    axios
      .get(
        url + `/Transactions/get-last10-transactions/charger/${id}/${limit}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setchargerTransactions(res.data);
      });
  };

  //graph data - revenue by month for charger
  const revenuebymonth = () => {
    axios
      .get(url + `/Transactions/get-group-transaction-by-month/charger/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setGraphChargerData(res.data);
      });
  };
  //set energy revenue
  let energyRevenue = graphChargerData.map((data) => {
    return data.energyRevenue;
  });

  //set time revenue
  let TimeRevenue = graphChargerData.map((data) => {
    return data.timeRevenue;
  });

  //revenue for charger
  const Revenue = () => {
    axios
      .get(url + `/Transactions/get-revenue/charger/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setChargerRevenue(res.data);
      });
  };

  useEffect(() => {
    transactions();
    revenuebymonth();
    Revenue();
    GetChargerDetails();
  }, []);

  // useEffect(() => {
  //   if (checked !== null) {
  //     checked ? activateCharger() : deactivateCharger();
  //   }

  //   GetChargerDetails();
  // }, [checked]);

  return (
    <>
      {loading && <h3> Loading...</h3>}
      {/* <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}

      {!loading && (
        <div className="w-full h-screen overflow-y-scroll">
          
          <div className="flex justify-between pt-[1.75rem] pr-[1.5rem] pl-[1.5rem] ">
            <div className="flex ">
              <Link to="/dash/evChargers">
                {" "}
                <img
                  className="pr-[1rem] mt-[0.75rem]"
                  src={BackArrow}
                  alt=""
                ></img>{" "}
              </Link>
              <h6 className="font-bold text-lg pr-[2rem] text-[#101828] leading-6 mt-[0.25rem]">
                {"Ev Chargers/" + chargersDetails.ChargerName}
              </h6>
            </div>

            <div className="flex w-[10rem] justify-between items-center bg-white rounded-md  px-[1.25rem] py-[0.25rem]">
              <p className=" text-black font-light font-sm ">This month</p>
              <img src={dropDown} alt="" />
            </div>
          </div>
          <div className="ml-[1.5rem] mt-[1.25rem]">
            <p className="text-base font-medium leading-5 text-[#667085]">
              Control center and overview
            </p>
          </div>

          <div className="mt-[1rem] ml-[1.5rem] flex ">
            {/* div one */}

            <div className="border border-gray-200 border-1 border-solid bg-white w-[25%] h-[10rem] py-[1.25rem] pl-[1.5rem] pr-[1.25rem] rounded-xl mr-[1.25rem]">
              <div className="flex justify-between pb-[1.25rem]">
                <p className="text-sm font-semibold text-gray-600 leading-5">
                  Charger status
                </p>
                <img className="" src={QuestionMark}></img>
              </div>
              <img className="w-[2rem] h-[2rem]" src={Suncircle}></img>
              <div className="flex justify-between pt-[1.25rem]">
                {chargersDetails.ActiveStatus == 1 ?
                <div className="flex justify-center  w-[5rem] rounded-full py-[0.5rem]  bg-green-100 px-[0.75rem] font-semibold text-green-700 text-xs">
                Active
                 </div>:
               <div className="flex justify-center  w-[6rem] rounded-full py-[0.5rem]  bg-[#FEF3F2] px-[1rem] font-semibold text-[#B42318] text-xs">
               Disconnected
              </div> 
                 }
               

                {toggleLoading && <p>loading...</p>}
                {!toggleLoading && (
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={chargersDetails.ActiveStatus === "1"}
                        class="sr-only peer"
                        name="toggle"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />

                      <div class="w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7F56D9]"></div>
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* div two */}
            <div className="mr-[1.25rem] border border-gray-200 border-1 border-solid bg-white w-[25%] h-[10rem] py-[1.25rem] pl-[1.5rem] pr-[1.25rem] rounded-xl ">
              <div className="flex justify-between pb-[1.25rem]">
                <p className="text-sm font-semibold text-gray-600 leading-5">
                  Operation hours
                </p>
                <img className="" src={QuestionMark}></img>
              </div>
              <img className="w-[2rem] h-[2rem]" src={OperationHours}></img>
              <div className="flex justify-between pt-[1.25rem]">
                <div className="leading-5 text-base font-medium w-[10rem]">
                  {" "}
                  Default Operation
                </div>
                <div onClick={changeHours}>
                  <p className="text-xs font-bold text-[#007EF2] leading-5 cursor-pointer">
                    Edit
                  </p>
                </div>
              </div>
            </div>

            {/* div three */}
            <div className="mr-[1.25rem] border border-gray-200 border-1 border-solid bg-white w-[25%] h-[10rem] py-[1.25rem] pl-[1.5rem] pr-[1.25rem] rounded-xl ">
              <div className="flex justify-between pb-[1.25rem]">
                <p className="text-sm font-semibold text-gray-600 leading-5">
                  Billing Type
                </p>
                <img className="" src={QuestionMark}></img>
              </div>
              <img className="w-[2rem] h-[2rem]" src={BillingType}></img>
              <div className="flex justify-between pt-[1.25rem]">
                <div className="leading-5 text-base font-medium w-[10rem]">
                  {" "}
                  Bill by Time
                </div>
                <div>
                  <a
                    className="text-xs font-bold text-[#007EF2] leading-5 cursor-pointer"
                    onClick={changeBilling}
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>

            {/* div four */}
            <div className="mr-[1.25rem] border border-gray-200 border-1 border-solid bg-white w-[25%] h-[10rem] py-[1.25rem] pl-[1.5rem] pr-[1.25rem] rounded-xl ">
              <div className="flex justify-between pb-[1.25rem]">
                <p className="text-sm font-semibold text-gray-600 leading-5">
                  Charger activity
                </p>
                <img className="" src={QuestionMark}></img>
              </div>
              <img className="w-[2rem] h-[2rem]" src={ChargerActivity}></img>
              <div className="flex justify-between pt-[1.25rem]">
                <div className="leading-5 text-base font-medium "> 21hrs</div>
                <div>
                  <a className="text-xs font-bold text-[#007EF2] leading-5">
                    See breakdown
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-between pl-[1.5rem] pt-[1.5rem]">
              <div className="bg-white h-full py-[2rem] pl-[2.5rem] pr-[1.25rem] w-[70%]">
                <div className="h-[18.25rem] w-[42rem]">
                  <p className="text-gray-400 text-sm font-normal">
                    Charger Revenue Summary
                  </p>
                  <Chart
                    energyRevenue={energyRevenue}
                    timeRevenue={TimeRevenue}
                  />
                </div>
              </div>
              <div className="px-[1rem] w-[35%] ">
                <div className=" bg-[#101828] text-white flex flex-col justify-center items-center  ">
                  <h3 className="font-normal text-4xl pt-[2.5rem] mx-[3.5rem]">
                    {chargersDetails.EnergyConsumed?.toLocaleString()}kWh
                  </h3>
                  <p className="font-normal text-sm pb-[3rem]">
                    Total energy consumption
                  </p>
                </div>
                <div className="bg-white grid place-items-center  mt-[0.75rem]">
                  <div className="pt-[0.75rem] w-[8rem] h-[8rem]  ">
                    <DoughnutChart ChargerRevenue={ChargerRevenue} />
                  </div>
                  <div className="flex justify-between pb-[1.25rem]">
                    <div className="pr-[4rem]">
                      <p className="text-sm text-[#98A2B3] font-normal leading-5">
                        Revenue by time
                      </p>
                      <p className="text-xl font-bold text-[#101828] leading-7">
                        ₦{ChargerRevenue.TimeRevenue?.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#98A2B3] font-normal leading-5">
                        Revenue by energy
                      </p>
                      <p className="text-xl font-bold text-[#101828] leading-7">
                        ₦{ChargerRevenue.EnergyRevenue?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[1.5rem]">
            <Transactions transactions={chargerTransactions} />
          </div>

          {/* //modals */}
          {operationModal && (
            <Modal closeModal={setOperationModal}>
              <OperationHour newShift={setAddShiftModal} />
            </Modal>
          )}
          {billingModal && (
            <Modal closeModal={setBillingModal}>
              <BillingTypeModal />
            </Modal>
          )}
          {addShiftModal && (
            <Modal closeModal={setAddShiftModal}>
              <AddNewShift newShift={setAddShiftModal} />
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default SpecificCharger;
