import { Bar } from "react-chartjs-2";
import { formatNumber } from "../../utils/formatNumber";

const BarChart = () => {
	return (
		<Bar
			className="w-full"
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
						type: "bar",
						data: [10000, 20000, 50000, 40000],
						label: "Ac",
						fill: "",
						backgroundColor: "#E9CD9E",
						barThickness: "10",
						grouped: true,
					},
					{
						type: "bar",
						data: [10000, 20000, 30000, 60000],
						label: "DC",
						fill: "",
						backgroundColor: "#E8F8EE",
						barThickness: "10",
						grouped: true,
					},
					{
						type: "bar",
						data: [10000, 20000, 30000, 60000],
						label: "CICE",
						fill: "",
						backgroundColor: "#EAECF0",
						barThickness: "10",
						grouped: true,
					},
				],
			}}
			options={{
				barPercentage: 0.1,
				categoryPercentage: 0.1,

				responsive: true,
				plugins: {
					legend: {
						display: true,

						labels: {
							usePointStyle: true,
						},
					},
					title: {
						display: false,
						text: "REVENUE BREAK DOWN",
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
							dash: [2, 4],
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
								return formatNumber(value, true);
							},
						},
					},
				},
			}}
		/>
	);
};

export default BarChart;
