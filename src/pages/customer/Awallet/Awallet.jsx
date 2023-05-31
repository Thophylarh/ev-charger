import React, { useState, useEffect } from "react";
import lines from "../../../assets/svg/yellowlines.svg";
import TransactionCard from "../../../components/CustomerComponent/TransactionCard";
import axios from "../../../lib/axiosInterceptor";
import { NavLink, useSearchParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import { formatNumber } from "../../../utils/formatNumber";

const AWallet = () => {
  const [searchParams] = useSearchParams();
  const [cDetails, setCDetails] = useState();
  const [transactions, setTransactions] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  let customerId = searchParams.get("customerId");

  //get customer details
  const getDetails = () => {
    setIsLoading(true);
    axios.get(`/Customers/get-customer-by-id/${customerId}`).then((res) => {
      setCDetails(res.data.customerDetails);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  };

  const getTransactionHistory = () => {
    axios
      .get(`/Customers/get-customer-transactions/${customerId}`)
      .then((res) => {
        setTransactions(res.data);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);

  let style = {
    background: `url(${lines})`,
  };

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <div className="w-[90%] mx-auto py-5">
          <section className="bg-black rounded-2xl  text-white flex justify-between mb-[var(--marginBtwSection)]">
            <div className="px-4 py-7">
              <p className="text-sm  text-white  mb-4">Wallet balance</p>

              <h5 className="text-[1.5rem]  text-white  mb-4">
                NGN {formatNumber(cDetails?.WalletBalance)}.<sup>00</sup>
              </h5>

              <NavLink to="/wallet">
                {" "}
                <button className="border p-2 rounded-lg text-sm border-[#B27203] text-[#B27203] flex items-center">
                  <PlusIcon /> Fund wallet
                </button>
              </NavLink>
            </div>

            {/* <div className="h-[100%] w-[50%]">
					<img src={lines} alt=" fundwallet" className="h-[100%]" />
				</div> */}
          </section>

          <div>
            <h3 className="mb-[1.25rem] font-semibold text-[1rem] text-[#101828]">
              Transaction history
            </h3>
            {transactions?.length > 0 &&
              transactions?.map((data) => {
                return (
                  <div>
                    <TransactionCard />
                  </div>
                );
              })}

            {transactions?.length < 1 && (
              <div>
                <h3 className="text-sm text-center mt-10 w-[70%] mx-auto">
                  {" "}
                  You have made no transaction at the moment
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

const PlusIcon = () => {
  return (
    <svg
      className="mr-1"
      width="20"
      height="20"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.01796 5.43652V9.60644"
        stroke="#B27203"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.1078 7.5215H4.93359"
        stroke="#B27203"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33984 7.5215C1.33984 3.26194 2.76011 1.84167 7.01967 1.84167C11.2792 1.84167 12.6995 3.26194 12.6995 7.5215C12.6995 11.7811 11.2792 13.2013 7.01967 13.2013C2.76011 13.2013 1.33984 11.7811 1.33984 7.5215Z"
        stroke="#B27203"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AWallet;
