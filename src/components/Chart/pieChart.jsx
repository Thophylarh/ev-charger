import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"
import { type } from "@testing-library/user-event/dist/type";

const DoughnutChart = () =>{
  return(
    <Doughnut
    data={
        {
            labels: [],
            datasets:[
                {
                    type: "doughnut",
                    label: "",
                    data: [3,7],
                    backgroundColor: ["#1DB954", "#F4BE37"]
                }

            ]
        }
    }
   
    
    />
  )
}


export default DoughnutChart