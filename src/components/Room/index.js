import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import SearchBar from "../Utils/SearchBar";
import Reservation from "../Utils/Reservation";
import "./rooms.css";
import { useHypnos } from "../Home/hypnos-context";


export default function Room() {
  const urlServer = "https://serveur-hypnos.herokuapp.com/";
  const urlHotel = "https://hypnos-hotels.herokuapp.com/";

  //Récupérer Rooms
  const roomItem = useLocation() 
  const currentRoom = roomItem.state.roomItem
  //Récupérer l'hotels en cours
  const hotelData = useHypnos()
  const currentHotel = hotelData.filter(({ id }) => `/api/hotels/${id}` === currentRoom.hotel)[0]
  
  return (
    <Wrapper>
            <h1>{currentHotel.title}</h1>
            <img src={`${urlServer}upload/images/hotels/${currentHotel.img_header}`} className="bgHeader"/>
            {/* import de la barre de réservation */}
            <SearchBar />
            {/* Infos hotel */}
            <div className="blocInfo-hotel">
              <p className="blocInfo-name">Hôtel {currentHotel.name} palace</p>
              <p className="blocInfo-star"><span className="star">{currentHotel.stars}★</span></p>
              <p className="blocInfo-adress"><img src={`${urlHotel}images/map-point.png`} className="map-point"/>{currentHotel.adress} </p>
            </div>
            <h2>Suite {currentRoom.title}</h2>
            {/*<div className="galerie-img">
              {GalerieImg.map(index => {
                return <img />
              })}

            </div>*/}
            <sections className="content-room">
                <div className="room-infos">
                    <article className="container-infos">
                      <h4>Informations</h4>
                      <div className="informations">
                        <div className="column-infos"><img src="/images/picto-bed.png" className="picto-room"/>
                          <h5>{currentRoom.bed} Lit double</h5>
                        </div>
                        <div className="column-infos"><img src="/images/picto-size.png" className="picto-room"/>
                          <h5>Taille : {currentRoom.size} m²</h5>
                        </div>
                        <div className="column-infos"><img src="/images/picto-bathroom.png" className="picto-room"/>
                          <h5>1 Baignoire</h5>
                        </div>
                        <div className="column-infos"><img src="/images/picto-suitcase.png" className="picto-room"/>
                          <h5>{currentRoom.capacity}  Personnes </h5>
                        </div>
                        <div className="column-infos"><img src="/images/picto-breakfast.png" className="picto-room"/>
                          <h5>Petit déjeunée {currentRoom.breaksfast}</h5>
                        </div>
                         {/*<h5>{currentRoom.breaksfast && "Petit déjeunée non inclu"}</h5>
                        <h5>
                        Capacité maximum : {" "}
                        {currentRoom.capacity > 1 ? `${currentRoom.capacity} personne` : `${currentRoom.capacity} persone`
                        }
                        </h5>*/}  
                      </div>
                    </article>
                    <article className="description-room">
                      <h4 className="details-room">Détails</h4>
                      <p>
                        {currentRoom.content}
                      </p>
                    </article>
                    <artcle className="extras-room">
                        <h4>Pour votre confort : </h4>
                        <ul>
                          <li><span>✓ </span>Balcon</li>
                          <li><span>✓ </span>Grand lit ou lits jumeaux</li>
                          <li><span>✓ </span>Wi-Fi</li>
                          <li><span>✓ </span>Téléphone</li>
                          <li><span>✓ </span>Télévision par satellite</li>
                          <li><span>✓ </span>Minibar</li>
                          <li><span>✓ </span>Machine à café Nespresso</li>
                          <li><span>✓ </span>Coffre-fort</li>
                          <li><span>✓ </span>Balcon</li>
                          <li><span>✓ </span>parking gratuit</li>
                          <li><span>✓ </span>Toaster</li>
                        </ul>
                    </artcle>
                </div>
                <Reservation className="reservation" />
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