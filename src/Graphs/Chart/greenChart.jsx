import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <Line
      data={{
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            type: "line",
            label: "Revenue by time",
            fill: "start",
            backgroundColor: "#C5FBD8",
            data: Array.from(Array(12)).map(
              (i) => Math.floor(Math.random() * 100) + 1
            ),
            borderColor: "#1DB954",
            hoverBackgroundColor: ["#e2f5ef"],
            radius: 0,
            // borderWidth: 2,
            pointBorderWidth: 4,
            tension: 0.4,
          },
        //   {
        //     type: "line",
        //     label: "Revenue by energy",
        //     fill: false,
        //     backgroundColor: "#FFDF90",
        //     data: Array.from(Array(12)).map(
        //       (i) => Math.floor(Math.random() * 100) + 1
        //     ),
        //     borderColor: "#FFDF90",
        //     hoverBackgroundColor: ["#e2f5ef"],
        //     radius: 2,
        //     // borderWidth: 2,
        //     pointBorderWidth: 4,
        //     tension: 0.4,
        //   },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position:"bottom",
           
            labels: {
              usePointStyle: true, 
              pointStyle: "circle",
              boxWidth: 1,
              padding: 10
             
            },
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
              color: "#eee",
              borderDash: [2, 4],
            },
            border: {
              dash: [2,4],
          }, 
          },
          y: {
            display: false,
            min: 0, 
              max: 240,
            grid: {
              display: false,
              color: "#eee",
              borderDash: [8, 4],
            },
            ticks: {
              
              stepSize: 40,
             
              autoSkip: false,
              //   callback: function (value) {
              //     return value + "kg";
              //   },
            },
          },
        },
      }}
    />
  );
};

export default LineChart;
