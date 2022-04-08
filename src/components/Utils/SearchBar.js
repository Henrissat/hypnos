import React from 'react'
import "./searchBar.css"
import { useState, useEffect } from "react"
import { useHypnos } from "../Home/hypnos-context";
//import listHotel from "../Home/ListHotel";

export default function SearchBar() {
    const urlHotel = "https://hypnos-hotels.herokuapp.com/";
    const ListHotels = `http://127.0.0.1/api/hotels.json`

    const hotelData = useHypnos()
 
    /*state = {value: ""}

    handledeparture = handledeparture.bind(value)
    handleSubmit = handleSubmit.bind(value)

    handleChange() { 
        setState({value: target.value});  
    }

    handleSubmit() {
        preventDefault();
      }    
    */
    return(
        <form className="search-bar">
            <select className="destination-search" placeholder="Sélectionner une destination">
                { hotelData.map(destination =>
                    <option value={destination.name} selected key={destination.id}>{destination.name}</option> 
                    )}
            </select>
            <div className="hotel-date-start">
                <input className="block-arrival search-date" 
                    type="date" 
                    placeholder="selectionner arrivée" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    name="arrival" 
                    //onChange="handlearrival"
                    />
            </div>
            <div class="hotel-date-end search-date">
                <input className="block-departure search-date" 
                    type="date" 
                    placeholder="selectionner départ" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    name="departure" 
                    //onChange="handledeparture"
            />
            </div>
            <button type="submit" value="Réserver" className="btn_travelSearch">
                        Réserver
                        <img href="#" src={`${urlHotel}images/picto_search.png`} className="picto-search"/>
            </button>
        </form>
    )
}