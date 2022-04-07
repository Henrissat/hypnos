import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from "react-router-dom";
import { useRooms } from "./room-context";
import "./hotel.css";
import SearchBar from "../Utils/SearchBar";

export default function Hotel() {
    //const [isLoading, setIsLoading] = useState(true);
    const urlServer = "https://serveur-hypnos.herokuapp.com/";
    const urlHotel = "https://hypnos-hotels.herokuapp.com/";
    const roomData = useRooms()
    console.log('roomData', roomData)

    //Récupérer Hotel en cours
    const hotelItem = useLocation() 
    console.log(hotelItem.state.hotelItem)
    const currentHotel = hotelItem.state.hotelItem
     
    //Filtrer Hotel de mon API en fontion de leur id
    let { id } = useParams()
    const filterId = roomData.filter((value) => {
    if (value.Hotel === `/api/hotels/${id}`)
        return value
    }) 
    /*else (value.Hotel === undefined) {
        throw new Error (`une erreur c'est produite`)
    }*/

    return(
        <Wrapper>
            <h1>{currentHotel.title}</h1>
            <img src={`${urlServer}upload/images/hotels/${currentHotel.img_header}`} className="bgHeader"/>
            {/* import de la barre de réservation */}
            <SearchBar />
            <div className="container-home">
                <MenuSecond>
                    <ul className="list-menuSecond">
                        <li className="item-menuSecond"><a className="link-menuSecond" href="#information">Hôtel information</a></li>
                        <li className="item-menuSecond"><a className="link-menuSecond"  href="#map">Voir sur la map</a></li>
                        <li className="item-menuSecond"><a className="link-menuSecond"  href="#gallerie"> Voir la gallerie</a></li>
                        <li className="item-menuSecond"><a className="link-menuSecond"  href="#avis">Avis</a></li>
                    </ul>
                    <p className="lign-menuSecond"/>
                </MenuSecond>
                {/* Infos hotel */}
                <div className="blocInfo-hotel">
                    <p className="blocInfo-name">Hôtel {currentHotel.name} palace</p>
                    <p className="blocInfo-star"><span className="star">{currentHotel.stars}★</span></p>
                    <p className="blocInfo-adress"><img src={`${urlHotel}images/map-point.png`} className="map-point"/>{currentHotel.adress} </p>
                </div>
                <h2>Nos chambres</h2>
                {/* création dynamique de la liste des chambres */}
                <div className="container-hotels">
                    <div className="hotels-card">
                        { /*isLoading ? "chargement des chambres" :*/ filterId.map(item =>
                        <Link to={`/Room/${item.id}/${item.name}`} state={{roomItem: item}} className="rooms-link" key={item.id}>
                            <div className="card-container" >
                                <img className="rooms-img" src={`http://127.0.0.1/upload/images/rooms/${item.pictures}`} />
                                <img className="picto_cardHypnos-rooms" src={`${urlHotel}images/picto-hypnos.png`}/><br/>
                                <div style={{padding:"0 2rem"}}>
                                    <p className="suite-txt">SUITE</p>
                                    <p className="rooms-name">{item.shortDescription}</p>
                                    <p className="rooms-description">{item.description}</p>
                                    <p className="rooms-disponibilite">Seulement {item.nbr} chambres disponibles</p>
                                    <p className="rooms-price">{item.price}/Nuit</p>
                                    <button className="button" href="#">
                                        Réserver une chambre >
                                    </button>
                                </div>
                            </div>
                        </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="content-home">
                <div className="container-apropos">
                    <Apropos className="content-apropos"></Apropos>
                    <div className="container-bienvenue">
                            <h3>Bienvenue</h3>
                            <img className="arabesque" src={`${urlHotel}images/arabesque.png`} />
                            <p>Hypnos est un groupe hôtelier fondé en 2004. Propriétaire de 7 établissements dans les quatre coins de l’hexagone, chacun de ces hôtels s’avère être une destination idéale pour les couples en quête d’un séjour romantique à deux.
                            <br/>Chaque suite au design luxueux inclut des services hauts de gamme (un spa privatif notamment), de quoi plonger pleinement dans une atmosphère chic-romantique.</p>
                            <a className="txt-link" href="#">En savoir plus</a>
                    </div>
                </div>
                <h3 className="spa-title">Spa</h3>
                <div className="bloc-left">
                    <div className="container-spa">
                        <h4>Espace détente et bien-être</h4>
                        <p className="">
                        Aux lignes épurées, le spa des Hypnos Hôtel***** & Spa est l’un des plus agréables de France. À votre disposition, une piscine, un bain à remous, un sauna et une salle de fitness.
                        L’espace piscine, élégamment décoré, vous plongera dans une ambiance relaxante après une journée bien remplie à flâner. Profitez de ses 13 mètres de long, de sa nage à contrecourant et de son bain à remous.
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
//{`${urlServer}${currentHotel.img_header}`}

const Wrapper = styled.div`
    width: 100%;
`;

const Apropos = styled.div`
    background-image: url("images/basement-g619d6f8e7_1920.jpg"); no-repeat;
`;

const MenuSecond = styled.nav`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`;
