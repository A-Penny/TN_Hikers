import React from "react";
import '../App.css';


export default function HikingFacts() {
    const [parks, setParks] = React.useState([]);

    React.useEffect(() => {
        // fetch data
        const dataFetch = async () => {
          const data = await (
            await fetch(
              "https://services5.arcgis.com/bPacKTm9cauMXVfn/arcgis/rest/services/TN_State_Parks_Points/FeatureServer/0/query?where=1%3D1&outFields=PARK_NAME,TSP_UID,AM_FIRST_NAME,AM_LAST_NAME,AM_TITLE,AM_PHONE,PM_FIRST_NAME,PM_LAST_NAME,PM_TITLE,PM_PHONE&outSR=4326&f=json"
            )
          ).json();
    
          // set state when the data received
          setParks(data);
        };
    
        dataFetch();
      }, []);
      const parksArray = parks.features.map(park => {
        const parkName = park.attributes['PARK_NAME']
        return <p>{parkName}</p>
      })
      
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
            {parksArray}
        </div>
        
    )
}