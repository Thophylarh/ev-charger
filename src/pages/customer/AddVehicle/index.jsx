import chargingCar from "../../../assets/svg/chargingCar.svg"

const AddVehicle = () => {
    return ( <section className="h-[100vh]">
        <div className="w-[90%] bg-[#F9FAFB] h-[70%] mx-auto">
            <div className="w-[100%] mx-auto text-center pt-[4.625rem]">

            <h2 className="text-[#344054] text-[16px] font-medium">Add Vehicle</h2>

            <p className="text-[#101828] text-[12px] font-medium mt-[1rem] mb-[6rem]">Please plug an ev charger to your car to continue</p>

            <div className="flex justify-center">
                <img src={chargingCar} alt="charging car" className=" " />
            </div>
            </div>

        </div>
    </section> );
}
 
export default AddVehicle;