import moment from "moment";
import { Bar } from "react-chartjs-2";
import { formatNumber } from "../../utils/formatNumber";

const BarChart = ({ details }) => {
	let months = details.map((el) => {
		if (el.day) {
			return `${moment(el.month, "M").format("MMM")} ${el.day}`;
		}

		return moment(el.month, "M").format("MMM");
	});

	let numbers = details.map((el) => {
		return Math.max(el.acRevenue, el.dcRevenue, el.bmsRevenue);
	});

	let highestNumber = Math.ceil(Math.max(...numbers));

	return (
		<Bar
			className="w-full"
			data={{
				labels: months,
				datasets: [
					{
						type: "bar",
						data: details.map((el) => el.acRevenue),
						label: "Ac",
						fill: "",
						backgroundColor: "#E9CD9E",
						barThickness: "10",
						grouped: true,
					},
					{
						type: "bar",
						data: details.map((el) => el.dcRevenue),
						label: "DC",
						fill: "",
						backgroundColor: "#E8F8EE",
						barThickness: "10",
						grouped: true,
					},
					{
						type: "bar",
						data: details.map((el) => el.bmsRevenue),
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
						max: highestNumber,
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
