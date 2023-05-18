import { CSVLink } from "react-csv";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx/xlsx.mjs";

const CsvExport = ({ data, name, tableRef }) => {
	//excel export
	const handleExcelExport = () => {
		let wb = XLSX.utils.book_new();
		let ws = XLSX.utils.json_to_sheet(data);

		XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

		XLSX.writeFile(wb, name + ".xlsx");
	};

	const exportPDF = useReactToPrint({
		content: () => tableRef.current,
		documentTitle: name,
	});

	// border border-solid border-gray-400 p-[0.5rem] rounded-md ml-[0.5rem]

	return (
		<div className="flex justify-between text-sm">
			<div className=" mr-2 bg-black px-5 text-white py-3 h-[2.75rem] rounded cursor-pointer">
				<CSVLink
					data={data}
					// headers={headers}
					filename={name + ".csv"}
					target="_blank"
				>
					CSV Export
				</CSVLink>
			</div>
			<div>
				<button
					onClick={handleExcelExport}
					className="mr-2  bg-black px-5 text-white py-3 rounded  cursor-pointer"
				>
					Excel Export
				</button>
			</div>

			<div>
				<ReactToPrint
					trigger={() => (
						<button className="bg-black px-5 text-white py-3 rounded  cursor-pointer">
							Export PDF
						</button>
					)}
					content={() => tableRef.current}
          documentTitle={name}
				/>
			</div>
		</div>
	);
};

export default CsvExport;
