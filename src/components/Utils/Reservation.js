import React, { useState, useEffect } from 'react'
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
  console.log(roomsData)
/*
  const [date, setDate] = useState(

  )
  const arrivalDate = new Date ({arrival});
  const departureDate = new Date ({departure});

  if (departureDate < arrivalDate){
    alert ("votre date de départ est antérieur à votre date de départ, merci de choisir une autre date")
  }
*/
  return (
    <Wrapper>
      <h4>Reservation</h4>
      <form>
        <div className='reservationItem'>
          <label className='labelName'>Hôtel Hypnos</label>
          <select className='selectItem' type="text" placeholder="selectionner l'Hôtel" autocompete="off" value="{currentHotel.city}" >
            <option value="">{currentHotel.name}</option>
            {hotelData.map(item =>
              <option value="" key={item.id}>{item.name}</option>)}
          </select>
        </div>
        <div className='reservationItem'>
          <label className='labelName'>Suite</label>
          <select className='selectItem' type="text" placeholder="selectionner la Suite" autocompete="off" value="{currentHotel.city}" >
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
            title="yyyy-mm-dd" 
            name="arrival" 
            //onChange="handlearrival"
            >
          </input>
        </div>
        <div className='reservationItem'>
          <label className='labelName' for="date">Date de départ</label>
          <input type="date" 
            placeholder="selectionner Dates de départ" 
            autocompete="off" 
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
            title="yyyy-mm-dd" 
            name="departure" 
            //onChange="handlearrival"
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
