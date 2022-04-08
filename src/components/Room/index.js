import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useCurrentHotel } from "../Hotel/room-context";
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

  //Récupérer Rooms
  const roomItem = useLocation() 
  const currentRoom = roomItem.state.roomItem

  //Récupérer l'hotel en cours
  //const hotelCurrent = useHotel()
  //console.log(hotelCurrent)
  //console.log(currentRoom)

  //Récupérer l'hotels 
  const hotelCurrent = useCurrentHotel()
  console.log(hotelCurrent)
  


  return (
    <Wrapper>
            {/*<h1>{currentHotel.title}</h1>*/}
            {/*<img src={`${urlServer}upload/images/Rooms/${currentRoom.pictures}`} className="bgHeader"/>*/}
            <img src={`http://127.0.0.1/upload/images/Rooms/${currentRoom.pictures}`} className="bgHeaderRoom"/>
            {/* import de la barre de réservation */}
            <SearchBar />
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
                        <div className="column-infos"><img src="./images/picto-bed.png" className="picto-room"/>
                          <h5>1 Lit double</h5>
                        </div>
                        <div className="column-infos"><img src="./images/picto-bed.png" className="picto-room"/>
                          <h5>Taille : </h5>
                        </div>
                        <div className="column-infos"><img src="./images/picto-bed.png" className="picto-room"/>
                          <h5>1 baignoire</h5>
                        </div>
                        <div className="column-infos"><img src="./images/picto-bed.png" className="picto-room"/>
                          <h5>2 personnes </h5>
                        </div>
                        <div className="column-infos"><img src="./images/picto-bed.png" className="picto-room"/>
                          <h5>petit déjeunée inclus</h5>
                        </div>
                         {/*<h5>{currentRoom.breakfast && "Petit déjeunée inclu"}</h5>
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
                        {currentRoom.description}
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