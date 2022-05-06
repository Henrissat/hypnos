import React, { useState } from 'react'
import styled from "styled-components";
import "./reservation.css";
import { useLocation } from "react-router-dom";
import { useHypnos } from "../Home/hypnos-context";
import { useRooms } from "../Hotel/room-context";

export default function Reservation() {
  //Récupérer Rooms
  const roomItem = useLocation() 
  const currentRoom = roomItem.state.roomItem
  const hotelData = useHypnos()
  const currentHotel = hotelData.filter(({ id }) => `/api/hotels/${id}` === currentRoom.hotel)[0]

  const roomsData = useRooms()

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
  
    console.log(dateArrival)
    console.log(dateDeparture)


  return (
    <Wrapper>
      <h4>Reservation</h4>
      <form>
        <div className='reservationItem'>
          <label className='labelName'>Hôtel Hypnos</label>
          <select className='selectItem' type="text" placeholder="selectionner l'Hôtel" autocompete="off" value="{currentHotel.city}" required>
            <option value="">{currentHotel.name}</option>
            {hotelData.map(item =>
              <option value="" key={item.id}>{item.name}</option>)}
          </select>
        </div>
        <div className='reservationItem'>
          <label className='labelName'>Suite</label>
          <select className='selectItem' type="text" placeholder="selectionner la Suite" autocompete="off" value="{currentHotel.city}" required>
            <option value="">{currentRoom.name}</option>
              {roomsData.map(data =>
                <option value="" key={data.id}>{data.name}</option>)}
          </select>
        </div>
        <div className='reservationItem'>
          <label className='labelName' for="date">Date d'arrivée</label>
          <input type="date" 
            placeholder="selectionner Dates de d'arrivée" 
            autocompete="off" 
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
            min={currentDate}
            title="yyyy-mm-dd" 
            name="arrival"
            id="arrival" 
            onChange={onChangeArrival}
            required
            />
        </div>
        <div className='reservationItem'>
          <label className='labelName' for="date">Date de départ</label>
          <input type="date" 
            placeholder="selectionner Dates de départ" 
            autocompete="off" 
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
            min={currentDate}
            title="yyyy-mm-dd" 
            name="departure" 
            id="departure" 
            onChange={onChangeDeparture}
            required
            >
          </input>
        </div>
        <button className='button'>Réserver une chambre</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
`;
