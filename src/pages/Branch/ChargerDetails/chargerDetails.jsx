import React from "react"
import  ForwardArrow from "../../../assets/svg/forwardArrow.svg"
import PowerButton from "../../../assets/svg/power.svg"

export default function Details (){
    return (
       <section>
        <section>
        <div className="flex ">
            <h4>EV Chargers</h4>
            <img src={ForwardArrow } alt="next arrow"></img>
            <h4>Keke Charger</h4>

        </div>

        <div className="flex">
            <button className="flex">
                <img src={PowerButton}  alt="Power Button"/>
                <p className=" text-[var(--error500)]">Turn off charger</p>
            </button>
            <button className="border border-[1px] border-solid">
            Charger settings
            </button>
        </div>
        </section>

        
        
       </section>
        )
}