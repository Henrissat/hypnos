import React from 'react'
import "./searchBar.css"
import { useState, useEffect } from "react"
//import listHotel from "../Home/ListHotel";

export default function SearchBar() {
    const ListHotels = `http://127.0.0.1/api/hotels.json`
    const [cardHotel, setCardHotel] = useState([]);
    // création du fichier json
    useEffect(() => {
        fetchData()
      }, []);
    const fetchData = async () => {
        const resp = await fetch(ListHotels)
        const json = await resp.json()
        setCardHotel(json)
    } 
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
                {cardHotel.map(destination =>
                    <option value={destination.name} selected key={destination.id}>{destination.name}</option> 
                    )}
            </select>
            <div className="hotel-date-start">
                <input className="block-arrival search-date" 
                    type="date" 
                    placeholder="yyyy-mm-dd" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    name="arrival" 
                    onChange="handlearrival"
                    />
            </div>
            <div class="hotel-date-end search-date">
                <input className="block-departure search-date" 
                    type="date" 
                    placeholder="yyyy-mm-dd" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    name="departure" 
                    onChange="handledeparture"
            />
            </div>
            <button type="submit" value="Réserver" className="btn_travelSearch">
                        Réserver
                        <img href="#" src="images/picto_search.png" className="picto-search"/>
            </button>
        </form>
    )
}