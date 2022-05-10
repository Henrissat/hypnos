import React from 'react'
import "./searchBar.css"
import { useState } from "react"
import { useHypnos } from "../Home/hypnos-context";
//import listHotel from "../Home/ListHotel";

export default function SearchBar() {
    const urlHotel = "https://hypnos-hotels.herokuapp.com/";
    //const ListHotels = `http://127.0.0.1/api/hotels.json`

    const hotelData = useHypnos()

    //date du jour
    let currentDate = new Date().toISOString().slice(0, 10)

    //Sélectionner la date sélectionner dans le calendrier avec onChange
    const [dateArrival, setDateArrival] = useState();
    const [dateDeparture, setDateDeparture] = useState(); 
    const onChangeArrival = (e) => {
      const newArrival = e.target.value
      setDateArrival(newArrival)
  
    }
    const onChangeDeparture = (e) => {
      const newDeparture = e.target.value
      setDateDeparture(newDeparture)
  
    }
    //condition la date de départ plus récent que date d'arriver
    if (dateArrival > dateDeparture)
      {
        alert("Votre date d'arrivée ne peux pas être plus récente que votre date de départ");
        //dateDeparture.innerHTML = "";
      }
      else
      {
      }
 
    return(
        <form className="search-bar">
            <select className="destination-search" placeholder="Sélectionner une destination" >
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
                    min={currentDate}
                    name="arrival" 
                    onChange={onChangeArrival}
                    required
                    />
            </div>
            <div class="hotel-date-end search-date">
                <input className="block-departure search-date" 
                    type="date" 
                    placeholder="selectionner départ" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    min={currentDate}
                    name="departure" 
                    onChange={onChangeDeparture}
                    required
            />
            </div>
            <button type="submit" value="Réserver" className="btn_travelSearch">
                        Réserver
                        <img href="#" src={`${urlHotel}images/picto_search.png`} className="picto-search"/>
            </button>
        </form>
    )
}