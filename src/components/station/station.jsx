import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const Station = () => {
  const Navigate = useNavigate();

    const [stationName, setStationName] = useState("")
    const [id, setid] = useState(0)
    const [stations, setStations] = useState([])
    const [noOfStations, setNoOfStations] = useState("")

    const url = "http://evapi.estations.com";

    const token = localStorage.getItem("user-token");
    const companyId = localStorage.getItem("id");

   
    // program to generate random strings

    // declare all characters
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
    }

   

    //create station
    const createStation = (e) =>{
        e.preventDefault();
        console.log(generateString(6));
        var stationCode = generateString(6).toString()
        console.log(stationCode)
        axios.post(url + "/Stations/create", {id, stationName, companyId, stationCode},  {
            headers: { "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
         },
            withCredentials: false,
          }).then((res) =>{
            console.log(res)
            
            getData()
          })
    }

    //get stations under a company 
    const getData = ( ) =>{
        axios.get(url + "/Stations/get-station-by-company/" + companyId,  { headers:{ 'Authorization': `Bearer ${token}`}})
        .then((res)=>{
          console.log(res.data, "this is the data")
          setStations(res.data)
          // console.log(stations,"//stations")
        })
      }
     
     
      useEffect(()=>{
        getData()
      }, [])

       
      //station number
      const stationNumber = () =>{
        axios.get(url + "/Stations/get-station-count/" + companyId, { headers:{ 'Authorization': `Bearer ${token}`}} )
        .then((res)=>{
            console.log(res.data)
            setNoOfStations(res.data)
        })
      }

      //delete station
      const deleteStation = (id, e) => {
        e.preventDefault();
        axios.get(url + `/stations/delete/${id}`, { headers:{ 'Authorization': `Bearer ${token}`}})
        .then((res)=>{
           console.log(res)
           getData()
        })
      }

      // station details
      const getStationById = (id, e) =>{
        window.localStorage.setItem("stationId", id);
        Navigate("/station")
      }

      //update station 



    return ( <div>
        <h1>Create station</h1>
        <form onSubmit={createStation}>
            <label className="block">Station Name</label>
            <input className="border" type="text" placeholder="Enter Station Name" value={stationName} onChange={(e)=>setStationName(e.target.value)}></input>

            <button type="submit" className="border">Create station</button>
        </form>

        <hr></hr>

        <h1>List of stations under company</h1>
        {/* <div><button>Fetch Station</button></div> */}
        {stations.map((station)=> (
            <div key={station.id}>
                 <p>{station.stationName}</p>
                 <button >Station details</button>
                 <button onClick={(e)=>{getStationById(station.id, e)}}>Edit station</button>
                 <button onClick={(e) =>{deleteStation(station.id, e)}}>Delete station</button>
            </div>
          ))}
       
        <hr></hr>
        <button className="border" onClick={stationNumber}>Total stations under company</button>
        <p>no of stations is {noOfStations}</p>
    </div> );
}
 
export default Station;