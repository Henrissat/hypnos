import React from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SearchBar from "../Utils/SearchBar";
import Reservation from "../Utils/Reservation";
import "./rooms.css";

export default function Room() {
  const urlServer = "https://serveur-hypnos.herokuapp.com/";
  const urlHotel = "https://hypnos-hotels.herokuapp.com/";

  /*
  //Récupérer Hotel en cours
  const hotelItem = useLocation() 
  console.log(hotelItem.state.hotelItem)
  const currentHotel = hotelItem.state.hotelItem*/

  //Récupérer Room en cours
  const roomItem = useLocation() 
  const currentRoom = roomItem.state.roomItem


  console.log(currentRoom)

  return (
    <Wrapper>
            {/*<h1>{currentHotel.title}</h1>*/}
            {/*<img src={`${urlServer}upload/images/Rooms/${currentRoom.pictures}`} className="bgHeader"/>*/}
            <img src={`http://127.0.0.1/upload/images/Rooms/${currentRoom.pictures}`} className="bgHeaderRoom"/>
            {/* import de la barre de réservation */}
            <SearchBar />
            <h2>Suite {currentRoom.title}</h2>
            {/*<div className='galerie-img"'>
              {GalerieImg.map(index => {
                return <img />
              })}

            </div>*/}
            <sections className="content-room">
                <div className='room-infos'>
                    <article className='informations'>
                      <h4>Informations</h4>
                      <h5 className='price-room'>Prix : </h5>
                      <h5>Taille : </h5>
                      {/*<h5>{currentRoom.breakfast && "Petit déjeunée inclu"}</h5>
                      <h5>
                        Capacité maximum : {" "}
                        {currentRoom.capacity > 1 ? `${currentRoom.capacity} personne` : `${currentRoom.capacity} persone`
                        }
                      </h5>*/}  
                    </article>
                    <article className='description-room'>
                      <h4 className='details-room'>Détails</h4>
                      <p>
                        {currentRoom.description}
                      </p>
                    </article>
                </div>
                <Reservation className='reservation' />
            </sections>
            {/* Autres Suites */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
`;

const GalerieImg = styled.div`
    width: 100%;
    height: 200px;
    backgroundColor: black;
`;