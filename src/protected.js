import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
	const token = localStorage.getItem("user-token");
    

     if (!token){
        return <Navigate to="/" replace />
     }else{
        return children
     }

};

export default Protected;