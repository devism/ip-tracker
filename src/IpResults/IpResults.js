import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import  './IpResults.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function IpResults({searchVal}){
   
    // console.log("fdfdfd: " + i++);
    if(searchVal){
        console.log('its true');
    }

    const accessKey = '665c1345d29195dbe0ce2ea775f2be92';

    const [ipData, setIpData] = useState([]);
    // const [search, setSearchVal] = useState(searchVal ? true : false);

    // if(searchVal){
       
    // }

    useEffect(() => {
       
        if(searchVal){
            console.log("you" + searchVal)
            
            fetch("http://api.ipstack.com/" + searchVal + "?access_key=" + accessKey)
            .then(response  => response.json())
            .then((data) => {
                setIpData(data) 
            }) 
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });            
            
        } else {

            fetch("http://api.ipstack.com/check?access_key=" + accessKey)
            .then(response  => response.json())
            .then((data) => {
                setIpData(data) 
            }) 
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            }); 

        }
        
    }, [searchVal])

    console.log(ipData);
    // console.log(ipData.location.capital);
    if(ipData.zip == null){
        ipData.zip = 'N/A'
    }
    
    return (
        <div className="ip-results-wrapper">
          
           
         
            <div className="ip-results">
            {!ipData.location ? <p>Loading</p> : 
            <div>
            <h5>IP ADDRESS</h5>
            <p>{ipData.ip}</p>

            <h5>LOCATION</h5>
            <p>{ipData.region_name}</p>

            <h5>City</h5>
            <p>{ipData.city}</p>

            <h5>zip</h5>
            <p>{ipData.zip} </p> 

            <h5>Capital</h5>
            <p>{ipData.location.capital} </p> 
            </div>   
            }
            </div>
            
        </div>    
        
    )
}

export default IpResults;