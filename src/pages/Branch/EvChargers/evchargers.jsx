import React from "react";
import ActiveCharger from "../../../assets/svg/activeCharger.svg";
import DisconnectedCharger from "../../../assets/svg/disconnectedCharger.svg";
import "./style.css";

export default function EvChargers() {
  return (
    <section>
      <section className={`mb-[var(--marginBtwSection)]`}>
        <h4>Ev Chargers</h4>
        <p className="subHeader">
          Monitor your charger revenue, status, and energy consumption
        </p>
      </section>

      <section className={`mb-[var(--marginBtwSection)]`}>
        <div className="grid grid-cols-4">
          <div className="revenueBlock">
            <p>NUMBER OF CHARGERS</p>

            <h5>10</h5>
          </div>

          <div className="revenueBlock">
            <div className="flex justify-between ">
              <div>
                <p>ACTIVE CHARGERS</p>

                <h5>8</h5>
              </div>

              <div>
                {" "}
                <img src={ActiveCharger} alt="Active chargers" />
              </div>
            </div>
          </div>

            <div className="revenueBlock">
          <div className="flex justify-between ">
            <div className="">
              <p>DISCONNECTED CHARGERS</p>

              <h5>2</h5>
            </div>

            <div>
              <img src={DisconnectedCharger} alt="Disconnected Chargers" />
            </div>

          </div>
          </div>

          <div className="totalRevenueBlock">
            <h3>TOTAL ENERGY CONSUMED</h3>

            <h5>
              500,000.<sup>kw</sup>{" "}
            </h5>
          </div>
        </div>
      </section>
    </section>
  );
}
