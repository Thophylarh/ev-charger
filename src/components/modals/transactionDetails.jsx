import check from "../../assets/svg/check.svg";
const TDetails = () => {
  return (
    <>
      <div className="mb-[1rem] ">
        <img src={check}  />
        <h4 className="font-semibold text-lg text-[#101828]">
          Transaction Details
        </h4>
      </div>
      <div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Date: </h6>

          <h3 className="text-[1rem] text-[#667084] font-semibold">
            {" "}
            Sep 9, 2013 11:35am
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Charger name: </h6>

          <h3 className="text-[1rem] text-[#667084] font-semibold">
            TESLA CHARGER
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Charger Type: </h6>

          <h3 className="text-[1rem] text-[#667084] font-semibold">
            CICE
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Amount: </h6>

          <h3 className={`text-[1rem] font-semibold text-[var(--error500)]`}>
          ₦50,000.00
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Balance: </h6>

          <h3 className={`text-[1rem] font-semibold text-[#667084]`}>
          ₦600
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Energy:</h6>

          <h3 className={`text-[1rem] font-semibold text-[#667084]`}>
          500kw
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Status:</h6>

          <h3 className={`text-[1rem] font-semibold text-[#FAA004] bg-[#FFF6E6] px-[12px] py-[4px] rounded-lg `}>
            partially charged
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Customer:</h6>

          <h3 className={`text-[1rem] font-semibold text-[#667084]`}>
          olaitan.akinlade@gmail.com
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Vehicle type:</h6>

          <h3 className={`text-[1rem] font-semibold text-[#667084]`}>
          Range rover
          </h3>
        </div>
        <div className="flex justify-between items-center mb-[0.75rem] ">
          <h6 className="text-[1rem] text-[#667084]">Vehicle model:</h6>

          <h3 className={`text-[1rem] font-semibold text-[#667084]`}>
          sport
          </h3>
        </div>
      </div>
    </>
  );
};

export default TDetails;
