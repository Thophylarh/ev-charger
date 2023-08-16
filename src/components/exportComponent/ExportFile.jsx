import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CSVLink } from "react-csv";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx/xlsx.mjs";

const ExportFile = ({ data, name, tableRef }) => {
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

	// const handlePrint = async () => {
	// 	const tableHeight = tableRef.current.offsetHeight;
	// 	const pageSize = 800; // Adjust this value based on your table content and styling

	// 	const totalTablePages = Math.ceil(tableHeight / pageSize);
	// 	const pdf = new jsPDF("p", "pt", "letter");

	// 	// Custom text at the top of each PDF page
	// 	pdf.setFontSize(16);

	// 	for (let currentPage = 1; currentPage <= totalTablePages; currentPage++) {
	// 		const pageOffset = pageSize * (currentPage - 1);
	// 		tableRef.current.style.transform = `translate(0, -${pageOffset}px)`;

	// 		await html2canvas(tableRef.current, { useCORS: true }).then((canvas) => {
	// 			const imgData = canvas.toDataURL("image/png");

	// 			// Calculate the width and height of the table based on the canvas dimensions
	// 			const pdfWidth = pdf.internal.pageSize.getWidth();
	// 			const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

	// 			if (currentPage > 1) {
	// 				pdf.addPage();
	// 			}

	// 			pdf.text("Custom Text", 40, 40);
	// 			pdf.addImage(imgData, "PNG", 40, 60, pdfWidth - 80, pdfHeight - 80);

	// 			// Reset the table's transform offset
	// 			tableRef.current.style.transform = "none";
	// 		});
	// 	}

	// 	pdf.save("table.pdf");
	// };

	// const handlePrint = () => {
	// 	console.log("fjdkj");

	// 	   // Adjust table height to show all records
	// 	   const originalTableHeight = tableRef.current.offsetHeight;
	// 	   tableRef.current.style.height = 'auto';
	// 	   console.log(originalTableHeight)

	// 	   html2canvas(tableRef.current).then((canvas) => {
	// 		// Reset table height to its original value
	// 		tableRef.current.style.height = `${originalTableHeight}px`;

	// 		const imgData = canvas.toDataURL('image/png');
	// 		const pdf = new jsPDF('p', 'pt', 'letter');

	// 		// Custom text at the top of the PDF
	// 		pdf.setFontSize(16);
	// 		pdf.text(name, 40, 40);

	// 		// Calculate the width and height of the table based on the canvas dimensions
	// 		const pdfWidth = pdf.internal.pageSize.getWidth();
	// 		const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

	// 		// Add the table image to the PDF
	// 		pdf.addImage(imgData, 'PNG', 40, 60, pdfWidth - 80, pdfHeight - 80);

	// 		pdf.save(`${name}.pdf`);
	// 	    });

	// 	// html2canvas(tableRef.current).then((canvas) => {
	// 	// 	const imgData = canvas.toDataURL("image/png");
	// 	// 	const pdf = new jsPDF("p", "pt", "letter");

	// 	// 	// Custom text at the top of the PDF
	// 	// 	pdf.setFontSize(20);
	// 	// 	pdf.text(name, 40, 40);

	// 	// 	// Calculate the width and height of the table based on the canvas dimensions
	// 	// 	const pdfWidth = pdf.internal.pageSize.getWidth();
	// 	// 	const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

	// 	// 	console.log(pdfHeight);
	// 	// 	// Add the table image to the PDF
	// 	// 	pdf.addImage(imgData, "PNG", 40, 60, pdfWidth - 80, pdfHeight - 80);

	// 	// 	pdf.save(`${name}.pdf`);
	// 	// });
	// };

	return (
		<div className="flex justify-between text-xs">
			<div>
				<div className="mr-2 border-[0.5px]  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey700)] cursor-pointer">
					<CSVLink
						data={data}
						// headers={headers}
						filename={name + ".csv"}
						target="_blank"
					>
						CSV Export
					</CSVLink>
				</div>
			</div>
			<div>
				<button
					onClick={handleExcelExport}
					className="mr-2 border-[0.5px]  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey700)] cursor-pointer"
				>
					Excel Export
				</button>
			</div>

			<div>
				{/* <button
					onClick={handlePrint}
					className="mr-2 border-2  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey700)] cursor-pointer"
				>
					Export PDF
				</button> */}
				<ReactToPrint
					trigger={() => (
						<button  className="mr-2 border-[0.5px]  border-gray-400 text-xs p-[0.5rem] rounded-md text-[var(--grey700)] cursor-pointer">
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

export default ExportFile;
