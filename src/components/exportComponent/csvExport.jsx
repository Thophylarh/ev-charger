import { CSVLink } from "react-csv";
import * as XLSX from "xlsx/xlsx.mjs";

const CsvExport = ({data, name}) =>{

    //excel export
	 const handleExport = () => {
		let wb = XLSX.utils.book_new();
		let ws = XLSX.utils.json_to_sheet(data);
	
		XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
	
		XLSX.writeFile(wb, name + ".xlsx");
	  };

    return (
     
        <div className="flex justify-between">
            <div className="border border-solid border-gray-400 h-[2.5rem]  p-[0.5rem] rounded-md">
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
                <button onClick={handleExport} className="border border-solid border-gray-400 p-[0.5rem] rounded-md ml-[0.5rem]">Excel export</button>
              </div>
              </div>
             
              
    )
}

export default CsvExport;