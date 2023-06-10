import React, {useEffect, useState} from "react";


const Confirmation = ({closeModal, CDetails, ENotifications}) => {

    return ( <section className="">
        <h3 className="text-[20px]"> {CDetails?.EmailNotificationStatus ? "Unsubscribe" : "Subscribe"} to email Notification?</h3>

        <div className="mt-[1rem] flex justify-end gap-x-2">
        <button className="border border-black border-1 w-[50px] p-[5px] rounded-md" onClick={()=>{closeModal(false)}}>No</button>
        <button className=" w-[50px] p-[5px] rounded-md bg-black text-white" onClick={()=>{ENotifications()}}>Yes</button>
        </div>
    </section> );
}
 
export default Confirmation;