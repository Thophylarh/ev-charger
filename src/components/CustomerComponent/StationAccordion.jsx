import React, { useState } from "react";
import stationIcon from "../../assets/svg/stationIcon.svg";
import dropDownArrow from "../../assets/svg/dropDownArrow.svg";
import { formatNumber } from "../../utils/formatNumber";

export default function StationAccordion({ station }) {
  const [open, setOpen] = useState(true);
  let priceRange = station?.priceRange.split("-");
  let chargerType = station?.chargerTypes?.map((charger) => {
    if (charger === "bms") {
      return "CICE";
    } else {
      return charger.toUpperCase();
    }
  });


  return (
    <div className="mt-5 mx-auto w-[95%] border-b-[1px] border-grey-100 pb-4 ">
      <div
        className={`flex mt-3 justify-between`}
        onClick={() => setOpen((open) => !open)}
      >
        <div className="">
          <img src={stationIcon} alt="Stations" />
        </div>

        <div className={`ml-3  w-[100%]`}>
          <div className={`flex items-center  justify-between mb-3`}>
            <h1 className={`text-sm text-[--grey900] font-black `}>
              {station?.station?.stationName}
            </h1>

            <p className={`text-sm text-[--grey900] font-black`}>
              {formatNumber(station?.distance?.toFixed(1), false)} Km away
            </p>
          </div>

          <div className={`flex items-center  justify-between  mb-3 `}>
            <div>
              <p className="flex items-center">
                <b className="mr-2"> {station?.chargerCount}</b> chargers
              </p>
            </div>

            <div className="w-[100%] flex justify-end ">
              <img
                src={dropDownArrow}
                alt="Open button"
                className={`w-[1.25rem] mr-4 ${
                  open
                    ? " transition ease-in-out  duration-500 rotate-0"
                    : " transition ease-in-out  duration-500 rotate-180"
                }`}
              />
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            } ${open ? "delay-200 h-0" : " duration-900 h-full"}`}
          >
            <div className={`flex items-center  justify-between mb-3 `}>
              <p className="text-sm text-[var(--grey600)] ">Charger types:</p>
              <p className="text-sm text-[var(--grey600)] font-bold">
                {chargerType?.length > 0 &&
                  chargerType?.map((type, index) => (
                    <span key={index}>{type}</span>
                  ))}
                {chargerType?.length < 1 && "---"}
              </p>
            </div>

            <div className={`flex items-center  justify-between  mb-3`}>
              <p className="text-sm text-[var(--grey600)] ">Availability:</p>
              <p className="text-sm text-[var(--grey600)] font-bold">
                {chargerType?.length > 0 &&
                  `${station?.chargingStatus?.notCharging} available charger(s)`}{" "}
                {chargerType?.length < 1 && "---"}
              </p>
            </div>

            <div className={`flex items-center  justify-between `}>
              <p className="text-sm text-[var(--grey600)] ">Price:</p>
              <p className="text-sm text-[var(--grey600)] font-bold">
                {chargerType?.length > 0 &&
                  ` NGN${formatNumber(priceRange[0])}/kwh - NGN
                ${formatNumber(priceRange[1])}/kwh`}
                {chargerType?.length < 1 && "---"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
				<div className="ml-[16%] w-[80%] mt-2 ">
					<div className="flex justify-between">
						<p>Charger types:</p>
						<p className="text-sm text-[var(--grey600)] font-bold">
							CICE, AC, DC
						</p>
					</div>
				</div>
			</div> */}
    </div>
  );
}

{
  /* <div className={`flex items-center `}>
<div className={`ml-4`}>
      <h1 className={`text-sm text-[--grey900] font-black mb-2`}>
            STERLING HQ YABA
      </h1>
      <p>
            {" "}
            <b>2</b> chargers
      </p>
</div>
</div>

<div>
<p className={`text-sm text-[--grey900] font-black mb-6`}>
      12 metres away
</p>
<div className="w-[100%] flex justify-end ">
      <img
            src={dropDownArrow}
            alt="Open button"
            className="mt-[-0.5rem] w-[1.25rem] mr-4"
      />
</div>
</div> */
}
