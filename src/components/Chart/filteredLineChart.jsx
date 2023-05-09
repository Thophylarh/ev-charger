import Chart from "chart.js/auto";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

const FLineChart = (props) => {
  const [monthName, setMonthName] = useState("")
 let totalAmount = props.totalAmount
//  console.log(totalAmount)
 let month = props.month
 let days = props.fDay

    
let fullMonth = moment(month, "M").format("MMM")

  
 
  // console.log(monthName)
  return (
    <Line
      data={{
         labels: days ,
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
          ticks: {
            autoSkip: false,
            // callback: function (value) {

            //     return fullMonth + days
              
            //   },
          }, 
          // tooltips:{
          //   callbacks:{
          //     labels: function (){
          //       return days + fullMonth
          //     }
          //   } 
          // }
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
