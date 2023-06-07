import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import logo from "../../../assets/svg/logo.svg";
import Card from "../../../assets/svg/card.svg";
import Arrow from "../../../assets/svg/fundArrow.svg";
import "./style.css";

import axios from "axios";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { getToken } from "../../../utils/getToken";
import { formatNumber } from "../../../utils/formatNumber";
const CarInfo = () => {
  const [searchParams] = useSearchParams();
  const [walletDetails, setWalletDetails] = useState(
    JSON.parse(localStorage.getItem("wallet"))
  );
  const [open, setOpen] = useState(true);
  const [fundAmount, setFundAmount] = useState(0);
  const [cDetails, setCDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let personalnfo = JSON.parse(localStorage.getItem("VA"));
  let customerId = searchParams.get("customerId");
  const navigate = useNavigate();

  let token = getToken();

  //get customer details
  const getDetails = () => {
    setIsLoading(true);
    axios
      .get(
        `https://evapi.estations.com/Customers/get-customer-by-id/${customerId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      )
      .then((res) => {
        setCDetails(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };

  useEffect(() => {
    setIsLoading(true)
    customerId && getDetails();
    setIsLoading(false)
  }, [customerId]);

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
        `https://evapi.estations.com/Wallets/create-wallet-transaction`,
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      )
      .then((res) => {
        console.log(res.data.statusCode)

        if (res?.data.statusCode === 200){
          navigate({
            pathname: "/success",
            search: `?walletId=${res.data?.walletId}`,
          });
        }else {
          navigate({
            pathname: "/failed",
            // search: `?walletId=${res.data?.walletId}`,
          });
        }
        // navigate({
        //   pathname: "/login",
        //   // search: `?walletId=${res.data?.walletId}`,
        // });
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

  console.log(config)

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <section className=" h-[100vh] bg-black  py-[1rem]">
      <section
        className={`w-[90%]  mx-auto mb-[var(--marginBtwSection)]  h-[15%]`}
      >
        <div>
          <img src={logo} className={`mb-[var(--marginBtwElements)] `}></img>
          <p className="desc">Fund your Ev wallet to get you on board</p>
        </div>
      </section>

      <section className="bg-white h-[85%] rounded-3xl pt-[1.5rem]">
        <section className="bg-black text-white w-[90%] mx-auto rounded-xl mb-[1rem]">
          <div className="pt-[1.5rem] pb-[2.5rem] pl-[1.5rem]">
            <h4 className={`text-[#FCFCFD]  mb-[var(--marginBtwElements)]`}>
              WALLET BALANCE
            </h4>

            <h4 className="text-white font-black">
              NGN {customerId ? formatNumber(cDetails?.walletDetails?.WalletBalance)  : "0"}
            </h4>
          </div>
        </section>

        <section className="w-[90%] mx-auto rounded-xl border border-[#D9DBE0] border-[1px]">
          <div className="p-[16px]">
            <h5 className="fund">Fund via bank transfer</h5>

            <p className="text-[#475467] font-normal text-xs mb-[1.5rem] ">
              Fund your account by sending money to the account below via your
              bank app or USSD
            </p>

            <div>
              <div className="flex justify-between mb-[1rem]">
                <h3 className="acctDetails">Account name:</h3>
                <h5 className="font-semibold text-[#475467] text-xs ">
                  {customerId
                    ? cDetails?.walletDetails?.AccountName
                    : walletDetails?.data?.account_name}
                </h5>
              </div>
              <div className="flex justify-between mb-[1rem]">
                <h3 className="acctDetails">Bank name:</h3>
                <h5 className="font-semibold text-[#475467] text-xs ">
                  {customerId
                    ? cDetails?.walletDetails?.Bank
                    : walletDetails?.data?.bank_name}
                </h5>
              </div>
              <div className="flex justify-between mb-[1rem]">
                <h3 className="acctDetails">Account number:</h3>
                <h5 className="font-semibold text-[#1AA84C] text-xs ">
                  {customerId
                    ? cDetails?.walletDetails?.AccountNumber
                    : walletDetails?.data?.account_number}
                </h5>
              </div>
            </div>
          </div>
        </section>

        <div className=" flex justify-center w-[90%] mx-auto my-[16px]">
          <p className=" mx-auto">OR</p>
        </div>

        <section className="w-[90%] mx-auto rounded-xl border border-[#D9DBE0] border-[1px]">
          <div className="py-[16px] px-2 flex justify-between">
            <img src={Card} alt="Credit card" />

            <div onClick={() => setOpen((open) => !open)}>
              <h3 className="text-[#475467] font-medium text-sm">
                Fund via card
              </h3>
              <h3 className="text-[#475467] font-normal text-xs">
                Fund wallet with your debit card
              </h3>
            </div>

            <img
              className={` Arrow  mr-4 ${
                open
                  ? " transition ease-in-out  duration-500 rotate-0"
                  : " transition ease-in-out  duration-500 rotate-90"
              }`}
              src={Arrow}
              alt="Fund wallet"
              onClick={() => setOpen((open) => !open)}
            />
          </div>
          <div
            className={`transition-all duration-500 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            } ${open ? "delay-200 h-0" : " duration-900 h-full"}`}
          >
            <div className="w-[100%] ml-3 py-4 ">
              <input
                onChange={(e) => setFundAmount(e.target.value)}
                placeholder="Enter amount"
                type="number"
                className="outline-none pl-3 mr-4 placeholder:text-sm py-1 border border-[1px] border-[#D0D5DD]"
              />
              <button
                className="bg-[var(--primaryGreen500)] text-white px-3 py-2 rounded text-sm"
                onClick={() => {
                  handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      localStorage.setItem("flutter", JSON.stringify(response));
                      finalizeWalletProcess();
                      closePaymentModal(); // this will close the modal programmatically
                    },
                    onClose: () => {},
                  });
                }}
              >
                Fund
              </button>
            </div>
          </div>
        </section>

        <div className="mb-4 flex justify-center w-[90%] mx-auto my-[16px] ">
          <p className="text-[#B27203] font-normal text-xs">
            Follow the instruction on the ev screen when you are done making
            payment.
          </p>
        </div>
      </section>
    </section>
  );
};

export default CarInfo;
