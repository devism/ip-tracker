import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import  './IpResults.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function IpResults({searchVal}){

    const [cordinatesLat, setCordinatesLat] = useState("");
    const [cordinatesLong, setCordinatesLong] = useState("");
   
    // console.log("fdfdfd: " + i++);
    // if(searchVal){
    //     console.log('its true');
    // }

    const accessKey = '4376dcf748ceda9d875df595883f24b2';

    const [ipData, setIpData] = useState([]);
   

    useEffect(() => {
       
        if(searchVal){
            // console.log("you" + searchVal)
            
            fetch("http://api.ipstack.com/" + searchVal + "?access_key=" + accessKey)
            .then(response  => response.json())
            .then((data) => {
                setIpData(data)
                
                
            }) 
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            }); 
            
           
            
        } else {

            fetch ("http://api.ipstack.com/check?access_key=" + accessKey)
            .then(response  => response.json())
            .then((data) => {
                setIpData(data)

               
            }) 
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            }); 

           
           

        }

        
        
    }, [searchVal])

  

    

    // console.log(ipData);
    // console.log(ipData.location.capital);
    if(ipData.zip == null){
        ipData.zip = 'N/A'
    }

 
   
    
    return (
        <div>
            <div className="ip-results-wrapper">
            
      
                <div className="ip-results">
                {!ipData.location ? <p>Loading</p> : 
                <div className="data-wrapper">
                    <div className="data-info"> 
                        <h5>IP ADDRESS</h5>
                        <p>{ipData.ip}</p>
                    </div>    

                    <div className="data-info">
                        <h5>LOCATION</h5>
                        <p>{ipData.region_name}</p>
                    </div>
                        
                    <div className="data-info">    
                        <h5>City</h5>
                        <p>{ipData.city}</p>
                    </div>

                    <div className="data-info">
                        <h5>zip</h5>
                        <p>{ipData.zip} </p> 
                    </div>

                    <div className="data-info">
                        <h5>Capital</h5>
                        <p>{ipData.location.capital} </p>
                    </div>     
                </div>
                
                }
                </div>
                
            </div> 

            {!ipData.latitude ? <p>Loading</p> :

                <MapContainer style={{ background: '#aad3df'}} center={[ipData.latitude, ipData.longitude ]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[ ipData.latitude, ipData.longitude ]}>
                </Marker>
                </MapContainer>
            }

        </div>   
        
    )
}

export default IpResults;