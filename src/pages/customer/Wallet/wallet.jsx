import React from "react";
import logo from "../../../assets/svg/logo.svg";
import Card from "../../../assets/svg/card.svg"
import Arrow from "../../../assets/svg/fundArrow.svg"
import "./style.css"


const CarInfo = () =>{
return (
   
       
       <section className="bg-black h-[100vh]  py-[1rem]">
        <section className={`w-[90%] mx-auto mb-[var(--marginBtwSection)]  h-[15%]`}>
        <div>
        <img src={logo} className={`mb-[var(--marginBtwElements)] `}></img>
        <p className="desc">
        Fund your Ev wallet to get you on board
        </p>
        </div>
        </section>

        <section className="bg-white h-[85%] rounded-3xl pt-[1.5rem]">

            <section className="bg-black text-white w-[90%] mx-auto rounded-xl mb-[1rem]">

                <div className="pt-[1.5rem] pb-[2.5rem] pl-[1.5rem]">

                <h4 className= {`text-[#FCFCFD]  mb-[var(--marginBtwElements)]`}>WALLET BALANCE</h4>

                <h4>NGN 0. <sup>00</sup></h4>
                </div>
                

            </section>

            <section className="w-[90%] mx-auto rounded-xl border border-[#D9DBE0] border-[1px]">
                <div className="p-[16px]">
                    <h5 className="fund">Fund via bank transfer</h5>

                    <p className="text-[#475467] font-normal text-xs mb-[1.5rem] ">
                        Fund your account by sending money to the account below via your bank app or USSD
                     </p>

                    <div>
                     <div className="flex justify-between mb-[1rem]"> 
                        <h3 className="acctDetails">Account name:</h3>
                        <h5 className="font-semibold text-[#475467] text-xs ">Olaitan akinromade akinlade</h5>
                     </div>
                     <div className="flex justify-between mb-[1rem]"> 
                        <h3 className="acctDetails">Bank name:</h3>
                        <h5 className="font-semibold text-[#475467] text-xs ">Sterling  bank</h5>
                     </div>
                     <div className="flex justify-between mb-[1rem]"> 
                        <h3 className="acctDetails">Account number:</h3>
                        <h5 className="font-semibold text-[#1AA84C] text-xs ">9982338789</h5>
                     </div>
                     </div>

                </div>
            </section>

            <div className=" flex justify-center w-[90%] mx-auto my-[16px]">
                <p className=" mx-auto">OR</p>
            </div>

            <section className="w-[90%] mx-auto rounded-xl border border-[#D9DBE0] border-[1px]">
                <div className="p-[16px] flex justify-between">
                    <img src={Card} alt="Credit card"/>

                        <div>
                            <h3 className="text-[#475467] font-medium text-sm">Fund via card</h3>
                            <h3 className="text-[#475467] font-normal text-xs">Fund wallet with your debit card</h3>
                        </div>
                    
                    <img src={Arrow} className="Arrow"></img>
                </div>
            </section>

            <div className=" flex justify-center w-[90%] mx-auto my-[16px] ">
                <p className="text-[#B27203] font-normal text-xs">Follow the instruction on the ev screen when you are done making payment.</p>
            </div>

        </section>


				
		</section>

   
)
}

export default CarInfo;

