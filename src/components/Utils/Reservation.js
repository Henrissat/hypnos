import React from 'react';
import styled from "styled-components";
import "./reservation.css";

export default function Reservation() {
  return (
    <Wrapper>
      <h4>Reservation</h4>
      <form>
        <label>Hôtel Hypnos</label>
        <select type="text" placeholder="selectionner l'Hôtel" autocompete="off" value="{currentHotel.city}" >
          <option value="">Hypnos Hotel 1</option>
          <option value="">Hypnos Hotel 2</option>
        </select>
        <label>Suite</label>
        <select type="text" placeholder="selectionner la Suite" autocompete="off" value="{currentHotel.city}" >
          <option value="">Suite 1</option>
          <option value="">Suite 2</option>
        </select>
        <label for="date">Date d'arrivée</label>
        <input type="date" 
          placeholder="selectionner Dates de d'arrivée" 
          autocompete="off" 
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
          title="yyyy-mm-dd" 
          name="arrival" 
          //onChange="handlearrival"
          >
        </input>
        <label for="date">Date de départ</label>
        <input type="date" 
          placeholder="selectionner Dates de départ" 
          autocompete="off" 
          pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
          title="yyyy-mm-dd" 
          name="departure" 
          //onChange="handlearrival"
          >
        </input>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
`;
