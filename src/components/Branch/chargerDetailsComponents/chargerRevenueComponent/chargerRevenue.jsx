import React, {useState, useEffect} from "react";
import axios from "../../../../lib/axiosInterceptor";
import { formatNumber } from "../../../../utils/formatNumber";

const ChargerRevenue = (props) =>{
    const [ChargerRevenue, setChargerRevenue] = useState([]);

    const id = props.chargerId
    
  //revenue for charger
  const Revenue = () => {
    axios
      .get( `/Transactions/get-revenue/charger/${id}`)
      .then((res) => {
        // console.log(res)
        setChargerRevenue(res.data);
      });
  };

  useEffect(() => {
    Revenue();
}, []);

    return(
    <section className="mb-[var(--marginBtwSection)]">
    <div className="grid grid-cols-5 ">
        <div className="revenueBlock ">
            <p>CHARGER REVENUE</p>
            <h5>NGN {formatNumber(ChargerRevenue.TotalRevenue, true)}</h5>
        </div>

        <div className="revenueBlock">
            <p>CHARGE COUNT</p>
            <h5>16</h5>
        </div>

        <div className="revenueBlock ">
            <p>LAST CHARGE</p>
            <h5>20mins ago</h5>
        </div>

        <div className="revenueBlock">
            <p>CHARGER TYPE</p>
            <h5>CICE</h5>
        </div>

        <div className="totalRevenueBlock ">
            <h3>ENERGY CONSUMPTION</h3>
            <h5>500,000 <sup>kw</sup> </h5>
        </div>

    </div>
</section>
    )
}

export default ChargerRevenue;