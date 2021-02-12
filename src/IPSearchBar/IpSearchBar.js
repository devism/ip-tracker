import React from 'react';
import ReactDOM from 'react-dom';
import  './IpSearchBar.css';

function IPSearchBar({setSearchVal}){
    
    function search(){
        setSearchVal(document.getElementById('search').value);
       return setSearchVal;
    }

   

    function onKeyup(e){
        if(e.keyCode == 13){
 
            setSearchVal(document.getElementById('search').value);
            return setSearchVal;
        }
    }

    window.addEventListener('keyup', onKeyup)


    return (
        <div className="searchbar">
            <input id="search" type="text" placeholder="Enter Ip Address or Url"/>
            <button tabIndex="0" onClick={search}> 
            <svg width="15" viewBox="0 0 24 24"><path fill="white" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </button>
        </div>
    )
}

export default IPSearchBar;