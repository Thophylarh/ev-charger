import React from "react";
import walletIcon from "../../assets/svg/walletAvatar.svg";
import { formatNumber } from "../../utils/formatNumber";
import { convertTime } from "../../utils/convertTime";
export default function WalletTopUpCard({ history }) {

  return (
    <div className="">
      <div className=" flex justify-between items-center py-4  border-b-[1px] border-grey-100">
        <div className="flex items-center">
          <img
            src={walletIcon}
            alt="Your Transaction"
            className="mr-4 w-[2.8rem] h-[2.8rem]"
          />

          <div>
            <h5
              className={` text-xs font-semibold mb-2 ${
                history?.transactionType === "credit"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {history?.transactionType.toUpperCase()}
            </h5>
            <p className="text-[var(--grey700)] text-xs font-medium ">
              NGN {formatNumber(history?.amount)}{" "}
            </p>
          </div>
        </div>

        <div className="text-[var(--grey700)] text-xs ">
          <p className="mb-2 ">{convertTime(history?.createdAt)}</p>

          <p
            className={`font-bold ${
              history?.transactionStatus === "successful"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {history?.transactionStatus.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
}
