import React from "react";
import Prev from "../../assets/svg/prev.svg";
import Next from "../../assets/svg/next.svg";
import Dot from  "../../assets/svg/activeDot.svg";



const listOfChargers = () => {
    return (<div>
        <div className="flex justify-between pt-4">
            <p className="text-gray-800  font-sm">List of chargers</p>
            <div className="flex justify-between">
            <img className="pr-8" src={Prev}/>
            <img className="pr-2" src={Next}/>
            </div>
        </div>

        <div className="bg-white mt-4 p-6">
            <div>
            <div>
                <h3>Tesla Charger 1</h3>
                <div className="flex justify-between w-24 rounded-full py-2  bg-green-100 px-4 font-semibold text-green-700"><img className="" src={Dot}/> Active</div>
            </div>
            <div>
               <img></img>
            </div>
            <div>
                <p>Energy Consumed:</p>
                <p>56oKw</p>
                <p>Revenue: </p>
                <p>$560,000.00</p>
                <p>Last Charge: </p>
                <p>18mins ago</p>
            </div>
            </div>
        </div>
        
    </div>  );
}
 
export default listOfChargers;

