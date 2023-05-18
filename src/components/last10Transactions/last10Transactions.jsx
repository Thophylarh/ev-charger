import React, { useState, useEffect, useRef } from "react";

import { Table } from "antd";
import axios from "../../lib/axiosInterceptor";
import { formatNumber } from "../../utils/formatNumber";
import moment from "moment";
import activeDot from "../../assets/svg/activeDot.svg";
import eye from "../../assets/svg/eye.svg";
import Modal from "../modals/modal";
import TransactionDetails from "../modals/transactionDetails";
import CsvExport from "../exportComponent/csvExport";

const Last10Transactions = (props) => {
  const [chargerTransactions, setchargerTransactions] = useState([]);
  const [TModal, setModal] = useState(false);
  const [transactionIdd, setTransactionIdd] = useState();

  const tableRef = useRef()

  const id = props.chargerId;

  // transactions for specific charger
  const transactions = () => {
    const limit = 10;
    axios
      .get(`/Transactions/get-last10-transactions/charger/${id}/${limit}`)
      .then((res) => {
        let index = 0;

        res.data.forEach((el) => {
          el.index = ++index;
        });

        setchargerTransactions(res.data);
      });
  };

  useEffect(() => {
    transactions();
  }, []);


  const Columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Date",
      dataIndex: "dateOfTransaction",
      key: "dateOfTransaction",
      render: (dateOfTransaction) => (
        <p>{moment(dateOfTransaction).format(" MMMM DD YYYY HH:mm")}</p>
      ),
    },
    {
      title: "Charger",
      dataIndex: "chargerName",
      key: "transactionId",
    },

    {
      title: "Charger Type",
      dataIndex: "chargerType",
      key: "Charger Type",
      render: () => <p>CICE</p>,
    },
    {
      title: "Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (totalAmount) => <p>{formatNumber(totalAmount, true)}</p>,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (totalAmount) => <p>{formatNumber(totalAmount, true)}</p>,
    },
    {
      title: "Energy",
      dataIndex: "totalUnitChargedInEnergy",
      key: "totalUnitChargedInEnergy",
      render: (totalUnitChargedInEnergy) => (
        <p>
          {formatNumber(totalUnitChargedInEnergy)}
          kWh
        </p>
      ),
    },

    // {
    //     title: "Charge Duration",
    //     dataIndex: "totalUnitChargedInTime",
    //     key: "totalUnitChargedInTime",
    //     render: (totalUnitChargedInTime) => (
    //         <p>{formatNumber(totalUnitChargedInTime / 60)} hour(s)</p>
    //     ),
    // },
    {
      title: "Status",
      dataIndex: "transactionStatus",
      key: "transactionStatus",
      render: (transactionStatus) => (
        <button className="flex justify-between">
          <img src={activeDot} alt="Active" className="pr-[0.25rem] mt-[6px]" />
          <p className="text-[#15833C] font-semibold text-xs leading-5">
            Completed
          </p>
        </button>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: (text, record) => (
        <button
          className="flex justify-between bg-black text-white p-[0.5rem] rounded-md"
          onClick={(e) => {
            setModal(true);
            setTransactionIdd(record.transactionId);
          }}
        >
          <img src={eye} alt="" className="mt-[0.25rem] pr-[0.25rem]" />
          <p>View details</p>
        </button>
      ),
    },
  ];

  return (
    <section>
      <div className={`mb-[var(--marginBtwElements)] items-center flex justify-between `}>
        <h3>LAST 10 TRANSACTIONS</h3>

		<CsvExport data={chargerTransactions} name={"chargerTransactions"} tableRef={tableRef}  />
      </div>

      <div   ref={tableRef}>
        <Table
          columns={Columns}
          pagination={false}
          dataSource={chargerTransactions}
        
        />
      </div>
      {TModal && (
        <Modal closeModal={setModal}>
          <TransactionDetails transactionId={transactionIdd} />
        </Modal>
      )}
    </section>
  );
};

export default Last10Transactions;
