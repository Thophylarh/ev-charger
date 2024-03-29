import Warning from "../../assets/svg/warningSign.svg"

const ChargePower = () =>{

    return(
        <>
        <div>
            <img src={Warning} alt="Warning Sign" className="mb-[1.25rem]" />

            <h4 className="text-[#101828] font-semibold text-[18px] mb-[8px]">Turn off charger</h4>

            <h3 className="mb-[2rem] text-[#667085] font-normal text-[14px]">Are you sure you want to turn of this charger ?</h3>
        </div>

        <form>
            <div className="mb-[2.5rem]">
            <label className="block text-[#344054] font-semibold text-[14px] mb-[8px]">PASSWORD</label>
            <input type="password" placeholder="Enter password to turn off charger" 
            className="w-[100%] p-[12px] border border-[#D0D5DD] rounded-lg"
            />
            </div>

            <div className="flex justify-between">
                <button className="border border-[#D0D5DD] py-[12px] px-[16px] rounded-lg">No, leave it active</button>
                <button className="bg-black text-white py-[12px] px-[2rem] rounded-lg font-semibold">Yes turn it off</button>
            </div>
        </form>
        </>
    )
}

export default ChargePower;