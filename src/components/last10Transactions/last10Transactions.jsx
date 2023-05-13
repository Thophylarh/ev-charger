import React, {useState, useEffect} from "react"
import Column from "../../utils/columns";
import { Table } from "antd";
import axios from "../../lib/axiosInterceptor";
import { formatNumber } from "../../utils/formatNumber";


const Last10Transactions = (props) =>{
    const [chargerTransactions, setchargerTransactions] = useState([])
    const id = props.chargerId

 // transactions for specific charger
  const transactions = () => {
    const limit = 10;
    axios
      .get(
         `/Transactions/get-last10-transactions/charger/${id}/${limit}`)
      .then((res) => {
        setchargerTransactions(res.data);
      });
  };
    
  useEffect(() => {
    transactions();
}, []);
    return(
    <section>
    <div className={`mb-[var(--marginBtwElements)] `}>
            <h3>LAST 10 TRANSACTIONS</h3>
        </div>

        <div>
            <Table
                columns={Column}
                pagination={false}
                dataSource={chargerTransactions}
            />
        </div>
    </section>
    )
 }

export default Last10Transactions