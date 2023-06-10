import React, {useState, useEffect} from "react";
import {
    Navigate,
    NavLink,
    useLocation,
    useNavigate,
    useSearchParams,
  } from "react-router-dom";
  import axios from "../../../lib/axiosInterceptor";

const MyLocations = () => {
    const [searchParams] = useSearchParams();

    let customerId = searchParams.get("id");
    const MyLocations = () =>{
        axios.get(`/Customers/get-customer-locations/${customerId}`).then((res) => {
      
            console.log(res.data)
            
          });
    }

    useEffect(() => {
        MyLocations();
      }, []);
    return ( <section>
        <p>helo</p>
    </section> );
}
 
export default MyLocations;