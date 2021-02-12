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
          
          <IpResults searchVal={searchVal} />
      </header>
     
    </div>
  );
}

export default App;
