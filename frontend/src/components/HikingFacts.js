import React from "react";
import '../App.css';



export default function HikingFacts() {
    const [parks, setParks] = React.useState(null)  

    React.useEffect(() => {
      fetch("https://services5.arcgis.com/bPacKTm9cauMXVfn/arcgis/rest/services/TN_State_Parks_Points/FeatureServer/0/query?where=1%3D1&outFields=PARK_NAME,TSP_UID,AM_FIRST_NAME,AM_LAST_NAME,AM_TITLE,AM_PHONE,PM_FIRST_NAME,PM_LAST_NAME,PM_TITLE,PM_PHONE&outSR=4326&f=json")
      .then(response => {
        return response.json()
      })  
      .then(data => {
          setParks(data.features);
        })
    }, []);
      
    return (
        <div className="facts-container">
            <h1>Hiking Facts</h1>
            <ul>
                <li>Hiking is fun</li>
                <li>There can be initial costs, but it is usually inexpensive</li>
                <li>Fresh air and exercise is good for health</li>
                <li>Nature is beautiful</li>
            </ul>
            <p>Parks:</p>
            <div className="park-list-container">
            {parks && parks.map(park => {return (<a href={`https://tnstateparks.com/parks/${park.attributes.PARK_NAME.replace(/\s+/g, '-').toLowerCase().replace('-state-park', '')}`} target='_blank' rel="noreferrer"><p className='park-list'>{park.attributes.PARK_NAME}</p></a>)})}
            </div>
           
        </div>
        
    )
}