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
            label: "",
            fill: false,
            backgroundColor: "",
            data: Array.from(Array(12)).map(
              (i) => Math.floor(Math.random() * 100) + 1
            ),
            borderColor: "black",
            hoverBackgroundColor: ["#e2f5ef"],
            radius: 1,
            // borderWidth: 2,
            pointBorderWidth: 4,
            tension: 0.4,
          },
          {
            type: "line",
            label: "",
            fill: false,
            backgroundColor: "",
            data: Array.from(Array(12)).map(
              (i) => Math.floor(Math.random() * 100) + 1
            ),
            borderColor: "#B09FFF",
            hoverBackgroundColor: ["#e2f5ef"],
            radius: 2,
            // borderWidth: 2,
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
            display: false,
            labels: {
              color: "#a1a1a1",
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
              borderDash: [8, 4],
            },
          },
          y: {
            display: false,
            grid: {
              display: true,
              color: "#eee",
              borderDash: [8, 4],
            },
            ticks: {
              stepSize: 20,
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
