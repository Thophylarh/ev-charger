import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import moment from "moment";

const FLineChart = (props) => {
 let totalAmount = props.totalAmount
 let month = props.month
    // console.log(month)
    let fullMonth = moment(month, "M").format("MMM")
 
  console.log(fullMonth)
  return (
    <Line
      data={{
        labels: [
        0,
        1,
        2,
        3,
         4,
         5,
         6,
         7,
         8,
         9,
         10,
         11,12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
        ],
        datasets: [
          {
            type: "line",
            label: "Revenue",
            fill: "",
            backgroundColor: "#FFDF90",
            data: totalAmount,
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
            beginAtZero: false,
            display: true,
            grid: {
              display: true,
             
              color: "#eee",
              borderDash: [2, 4],
            },
            border: {
              dash: [2,4],
          }, 
          ticks: {
            
            autoSkip: false,
            callback: function (value) {
                return fullMonth + value ;
              },
          }
          },
          y: {
            display: true,
            min: 0, 
              max: 10000,
            grid: {
              display: false,
              color: "#eee",
              borderDash: [8, 4],
            },
            ticks: {
              
              stepSize: 1000,
             
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

export default FLineChart;
