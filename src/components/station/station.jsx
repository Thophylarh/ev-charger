import React, {useState, useEffect} from "react";
import axios from "axios";


const Station = () => {
    const [stationName, setStationName] = useState("")
    const [id, setid] = useState(0)
    const [stations, setStations] = useState([])
    const [noOfStations, setNoOfStations] = useState("")

    const url = "http://evapi.estations.com";

    const token = localStorage.getItem("token");
    const stationOwner = localStorage.getItem("id");
    const stationId = "sta-2";

    //create station
    const createStation = (e) =>{
        e.preventDefault();
        axios.post(url + "/Stations/create", {id, stationName, stationOwner,stationId},  {
            headers: { "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
         },
            withCredentials: false,
          })
    }

    //get stations under a company 
    const getData = ( ) =>{
        axios.get(url + "/Stations/get-station-by-company/" + stationOwner,  { headers:{ 'Authorization': `Bearer ${token}`}})
        .then((res)=>{
          console.log(res.data, "this is the data")
          setStations(res.data)
          // console.log(stations,"//stations")
        })
      }
     
     
      useEffect(()=>{
        getData()
      }, [])

    //get stations under company
    // const getStations = async () =>{
    //     let listOfStations = []
    //     axios.get(url + "/Stations/get-station-by-company/" + stationOwner, { headers:{ 'Authorization': `Bearer ${token}`}})
    //     .then((res)=>{ 
    //         console.log(res.data)
    //          listOfStations = res.data
    //          setStations(listOfStations)
           
           
   



      //station number
      const stationNumber = () =>{
        axios.get(url + "/Stations/get-station-count/" + stationOwner, { headers:{ 'Authorization': `Bearer ${token}`}} )
        .then((res)=>{
            console.log(res.data)
            setNoOfStations(res.data)
        })
      }

      //delete station
      const deleteStation = (id, e) => {
        e.preventDefault();
        axios.delete(url + `/stations/${id}`, { headers:{ 'Authorization': `Bearer ${token}`}})
        .then((res)=>{
           console.log(res)
        })
      }

      //station details
      const getStationById = () =>{
        axios.get(url + `/stations/get-station-by-id/${stationId}`, { headers:{ 'Authorization': `Bearer ${token}`}})
        .then((res)=>{
          console.log(res)
        })
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
                 <button onClick={getStationById}>Station details</button>
                 <button >Edit station</button>
                 <button onClick={(e) =>{deleteStation(station.id, e)}}>Delete station</button>
            </div>
          ))}
       
        <hr></hr>
        <button className="border" onClick={stationNumber}>Total stations under company</button>
        <p>no of stations is {noOfStations}</p>
    </div> );
}
 
export default Station;