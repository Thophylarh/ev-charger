import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
let revenue = props.revenue
let months = props.months
  
  return (
    <Line
      data={{
        labels: months,
        datasets: [
          {
            type: "line",
            label: "Revenue by time",
            fill: "",
            backgroundColor: "#FFDF90",
            data:  revenue,
            borderColor: "#FFDF90",
            hoverBackgroundColor: ["#e2f5ef"],
            radius: 1,
            // borderWidth: 2,
            // Array.from(Array(12)).map(
            //   (i) => Math.floor(Math.random() * 100) + 1
            // )
            pointBorderWidth: 4,
            tension: 0.4,
            
          },
          // {
          //   type: "line",
          //   label: "Revenue by energy",
          //   fill: "start",
          //   backgroundColor: "rgb(246,255,249)",
          //   data: energyRevenue,
          //   borderColor: "#1DB954",
          //   hoverBackgroundColor: [""],
          //   radius: 2,
          //   // borderWidth: 2,
          //   pointBorderWidth: 4,
          //   tension: 0.4,
          // },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position:"bottom",
           
            labels: {
              usePointStyle: true, 
              pointStyle: "circle",
              boxWidth: 40,
              padding: 10,
              
             
            },
          },
          title: {
            display: true,
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: true,
              color: "#eee",
              borderDash: [2, 4],
            },
            border: {
              dash: [2,4],
          }, 
          },
          y: {
            display: true,
            min: 0, 
              max: 100000,
            grid: {
              display: false,
              color: "#eee",
              borderDash: [8, 4],
            },
            ticks: {
              
              stepSize: 10000,
             
              autoSkip: false,
                callback: function (value) {
                  return "N" + value ;
                },
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
