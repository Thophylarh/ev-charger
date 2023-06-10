import React, {useState, useEffect} from "react";
import { DatePicker } from "antd";
import Overview from "../../../components/Company/Overview/overview";
import ChartOverview from "../../../components/Company/chartOverview/chartOverview";
import axios from "../../../lib/axiosInterceptor";
import { NavLink, useSearchParams } from "react-router-dom";
import "./style.css"


const CompanyDashBoard = () => {
    const [searchParams] = useSearchParams();


    const [Name, setName] = useState()
   
    const [newDate, setNewDate] = useState();

    const id = searchParams.get("companyid")

    // CUSTOM FUNCTIONS
	const onSelectDate = (date, dateString) => {
		setNewDate(dateString);
	};
    
	//get company details
	const getData = () => {
		axios
			.get("/Companies/get-company-by-id/" + id)
			.then((res) => {
				setName(res?.data?.companyName)
			});

            //get Station number 
        
	};

    useEffect(() => {
		getData();
	}, []);

  return (
    <section>
    <section className="w-[95%] py-[1rem] mx-auto h-[100vh] overflow-y-scroll ">
      <section>
        <div className={`flex justify-between items-center `}>
          <div>
            <h4 className="mb-[8px] text-lg font-bold text-black">Hello, {Name}</h4>
            <p className="subHeader">
              Explore your company dashboard
            </p>
          </div>

          <div>
            <DatePicker picker="month" onChange={onSelectDate}/>
          </div>
        </div>
      </section>

      <section>
        <Overview id={id}  newDate={newDate}/>
      </section>
      <section>
        <ChartOverview id={id}  newDate={newDate}/>
      </section>
    </section>
    </section>
  );
};

export default CompanyDashBoard;
