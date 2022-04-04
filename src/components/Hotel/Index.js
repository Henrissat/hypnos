import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import "./hotel.css";
import {useHotel} from '../Home/index';
import listHotel from "../Home/ListHotel";
import SearchBar from "../Utils/SearchBar";

export default function Hotel() {
    const urlHotel = "http://localhost:1337";
    const ListRooms = `http://127.0.0.1/api/rooms.json`
    const [cardRooms, setCardRooms] = useState([]);
    // création du fichier json
    useEffect(() => {
        fetchData()
      }, []);
    const fetchData = async () => {
        const resp = await fetch(ListRooms)
        const json = await resp.json()
        setCardRooms(json)
    } 

    let location = useLocation;
    console.log(location)

    const hotelId = useHotel()
    console.log('hotelId', hotelId)
    /*const filterRooms = 
    cardRooms.filter((room) => cardRooms.hotel === `/api/hotels/${id}`)*/


    return(
        <Wrapper>
            <h1>titre ici{listHotel.title}</h1>
            <HeaderBg_home/>
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
                    <p className="blocInfo-name">Hôtel Annecy palace</p>
                    <p className="blocInfo-star"><span className="star">★</span></p>
                    <p className="blocInfo-adress"><img src="images/map-point.png" className="map-point"/>All. de l'Impérial, 74000 Annecy</p>
                </div>
                <h2>Nos chambres</h2>
                {/* création dynamique de la liste des chambres */}
                <div className="container-hotels">
                    <div className="hotels-card">
                        {cardRooms.map(item =>
                        <a href={item.link} className="rooms-link" key={item.rooms}>
                            <div className="card-container" >
                                <img className="rooms-img" src={item.src} />
                                <img className="picto_cardHypnos-rooms" src="images/picto-hypnos.png"/><br/>
                                <div style={{padding:"0 2rem"}}>
                                    <p className="suite-txt">SUITE</p>
                                    <p className="rooms-name">{item.shortDescription}</p>
                                    <p className="rooms-description">{item.description}</p>
                                    <p className="rooms-disponibilite">Seulement {item.nbr} chambres disponibles</p>
                                    <p className="rooms-price">{item.price}</p>
                                    <button className="button" href="#">
                                        Réserver une chambre >
                                    </button>
                                </div>
                            </div>
                        </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="content-home">
                <div className="container-apropos">
                    <Apropos className="content-apropos"></Apropos>
                    <div className="container-bienvenue">
                            <h3>Bienvenue</h3>
                            <img className="arabesque" src="images/arabesque.png" />
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

const Wrapper = styled.div`
    width: 100%;
`;

const HeaderBg_home = styled.div`
    position: relative;
    z-index: -5;
    width: 100%;
    height: 80vh;
    background-image: url("images/hotel-annecy.jpg"); no-repeat;
    background-position: center center;
    background-size: cover;
    filter: brightness(40%);
`;

const Apropos = styled.div`
    background-image: url("images/basement-g619d6f8e7_1920.jpg"); no-repeat;
`;

const MenuSecond = styled.nav`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`;
