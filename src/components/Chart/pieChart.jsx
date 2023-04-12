import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"
import { type } from "@testing-library/user-event/dist/type";

const DoughnutChart = (props) =>{
    const revenue = props.ChargerRevenue;

    const energyRevenue = revenue.EnergyRevenue;
    const timeRevenue = revenue.TimeRevenue;
  return(
    <Doughnut
    data={
        {
            labels: [],
            datasets:[
                {
                    type: "doughnut",
                    label: "",
                    data: [energyRevenue,timeRevenue],
                    backgroundColor: ["#1DB954", "#F4BE37"]
                }

            ]
        }
    }
   
    
    />
  )
}


export default DoughnutChart