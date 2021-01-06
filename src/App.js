import logo from './logo.svg';
import './App.css';
import IPSearchBar from './IPSearchBar/IpSearchBar';
import IpResults from './IpResults/IpResults';
import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="App">
      <header className="App-header">
          <h2>IP Address Tracker</h2>
          <IPSearchBar setSearchVal={setSearchVal}/>
          
          <IpResults searchVal={searchVal}/>
      </header>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 
            <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
    </div>
  );
}

export default App;
