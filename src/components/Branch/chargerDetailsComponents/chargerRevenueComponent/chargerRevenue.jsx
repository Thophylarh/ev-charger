import React, {useState, useEffect} from "react";
import axios from "../../../../lib/axiosInterceptor";
import { formatNumber } from "../../../../utils/formatNumber";
import "./style.css"

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
            <h3>CHARGER REVENUE</h3>
            <h6>NGN {formatNumber(ChargerRevenue.TotalRevenue, true)}</h6>
        </div>

        <div className="revenueBlock">
            <h3>CHARGE COUNT</h3>
            <h6>16</h6>
        </div>

        <div className="revenueBlock ">
            <h3>LAST CHARGE</h3>
            <h6>20mins ago</h6>
        </div>

        <div className="revenueBlock">
            <h3>CHARGER TYPE</h3>
            <h6>CICE</h6>
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