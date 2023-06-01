import React, { useState, useEffect } from "react";
import logo from "../../../assets/svg/logo.svg";
import lines from "../../../assets/svg/yellowlines.svg";
import InactiveCar from "../../../assets/svg/inactiveCar.svg";
import TransactionCard from "../../../components/CustomerComponent/TransactionCard";
import axios from "../../../lib/axiosInterceptor";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { formatNumber } from "../../../utils/formatNumber";
import Loader from "../../../components/Loader";

export default function CustomerDashboard() {
  const [searchParams] = useSearchParams();
  const [cDetails, setCDetails] = useState();
  const [transactions, setTransactions] = useState([]);
  let customerId = searchParams.get("customerId");
  const [walletDetails, setWalletDetails] = useState(
    JSON.parse(localStorage.getItem("wallet"))
  );
  const [enrolled, setEnrolled] = useState(true);

  const [fundAmount, setFundAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let personalnfo = JSON.parse(localStorage.getItem("VA"));

  const navigate = useNavigate();

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

  //get customer details
  const getTransactionHistory = () => {
    axios
      .get(`/Customers/get-customer-transactions/${customerId}`)
      .then((res) => {
        setTransactions(res.data);
      });
  };

  useEffect(() => {
    getDetails();
    getTransactionHistory();
  }, []);

  //PAYMENT PROCESS

  const finalizeWalletProcess = () => {
    let paymentResponse = JSON.parse(localStorage.getItem("flutter"));
    let walletId = localStorage.getItem("wall");

    let data = {
      transactionReference: paymentResponse?.tx_ref.walletId,
      accountNumber: walletDetails?.data?.account_number,
      amount: paymentResponse?.amount,
      transactionType: "credit",
      transactionSource: "card",
      walletId,
    };

    axios
      .post(
        `http://evapi.estations.com/Wallets/create-wallet-transaction`,
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      )
      .then((res) => {
        // setIsLoading(false);
        // toast.success("Account created successfully");

        // localStorage.setItem("wallet", JSON.stringify(res.data));
        navigate({
          pathname: "/home",
          // search: `?walletId=${res.data?.walletId}`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const config = {
    public_key: "FLWPUBK_TEST-e2bd742a5bbb3f5dc00ace692ba05139-X",
    tx_ref: Date.now(),
    amount: fundAmount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: personalnfo?.emailAddress,
      phone_number: personalnfo?.phonenumber,
      name: `${personalnfo?.lastname} ${personalnfo?.firstname}`,
    },
    customizations: {
      title: "Ev charger",
      description: "Fund wallet",
      logo: logo,
    },
  };

  //END OF PAYMENT PROCESS

  let style = {
    background: `url(${lines})`,
  };

  let style2 = {
    backgroundImage: `url(${InactiveCar})`,
    backgroundPosition: "120% bottom",
  };

  let fundwallet = () => {
    navigate({
      pathname: "/wallet",
      search: `?customerId=${customerId}`,
    });
  };

  const openVehicles = () =>{
    navigate({
      
        pathname: "/myVehicles",
        search: `?customerId=${customerId}`,
    
    });
  }

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <section className="w-[90%] mx-auto py-5">
          <div className={`mb-[var(--marginBtwSection)]`}>
            <p className="text-base text-[--grey900] mb-1 font-black">
              Hi {cDetails?.Firstname}
            </p>
            <p className="text-xs text-[--grey500]">
              Explore your EV dashboard
            </p>
          </div>

          <section className="bg-black rounded-2xl  text-white flex justify-between mb-[var(--marginBtwSection)]">
            <div className="px-4 py-7 w-full">
              <p className="text-sm  text-white  mb-4">Wallet balance</p>

              <h5 className="text-[1.25rem] w-full  text-white  mb-4">
                NGN {formatNumber(cDetails?.WalletBalance, false, 0)}.
                <sup>00</sup>
              </h5>

              <button
                className="border p-2 rounded-lg text-sm border-[#B27203] text-[#B27203] flex items-center"
                onClick={fundwallet}
              >
                <PlusIcon /> Fund wallet
              </button>
            </div>

            <div className="h-[100%] w-[50%]">
              <img src={lines} alt=" fundwallet" className="h-[100%]" />
            </div>
          </section>

          <section className="grid grid-cols-12 gap-2 mb-[var(--marginBtwSection)]">
            <div
              style={style2}
              className={` bg-no-repeat col-span-5 bg-[var(--grey50)] w-[100%] rounded-2xl py-4 px-4`}
              onClick={openVehicles}
            >
              <p className="text-xs mb-3 text-[var(--grey900)] font-medium">
                My vehicles
              </p>

              <h5 className="text-[1.125rem]   mb-3">
                {cDetails?.NumberOfVehiclesOnFile}
              </h5>
            </div>

            <div
              className={`col-span-7 bg-[var(--grey50)] w-[100%] rounded-lg py-4 px-4`}
            >
              <p className="text-xs mb-3 text-[var(--grey900)] font-medium">
                Money spent
              </p>

              <h5 className="text-[1.125rem]   mb-3">
                NGN {cDetails?.TotalAmountSpent}
              </h5>

              <p className="text-xs text-[var(--grey600)] font-bold">
                {cDetails?.TotalEnergyCharged} KW
              </p>
            </div>
          </section>

          <section className="mb-[var(--marginBtwSection)]">
            <h5 className="font-semibold mb-3">Transaction history</h5>

            <section
              className={`bg-[var(--grey10)] h-[4rem]   flex justify-between`}
            >
              <div
                className={`w-[50%]  h-[100%] cursor-pointer  ${
                  enrolled
                    ? " border-b-4 border-black "
                    : " border-b-4 border-[#E2E2E2)]"
                }  text-center font-semibold`}
                onClick={() => setEnrolled(true)}
              >
                <h1
                  className={` text-sm pt-[1.25rem] ${
                    enrolled ? " text-black" : "text-[var(--grey500)]"
                  }`}
                >
                  Charge History
                </h1>
              </div>

              <div
                className={`w-[50%] cursor-pointer   h-[100%]  ${
                  !enrolled
                    ? " border-b-4 border-black "
                    : " border-b-4 border-[#E2E2E2)]"
                } text-center font-semibold`}
                onClick={() => setEnrolled(false)}
              >
                <h1
                  className={`text-sm pt-[1.25rem] ${
                    !enrolled ? " text-black" : "text-[var(--grey500)]"
                  }`}
                >
                  Top-up History
                </h1>
              </div>
            </section>

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
          </section>
        </section>
      )}
    </>
  );
}

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
