import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import "./Home.css"
import listHotel from "./ListHotel";
import SearchBar from "../Utils/SearchBar"

export default function Home() {
    const url = "http://localhost:1337";
    const ListHotels = `${url}/ListHotel`
    const [card, setCard] = useState([]);

    console.log(card)
    return(
        <Wrapper>
            <h1>Hotel de charme <br/>pour les amoureux</h1>
            <HeaderBg_home/>
            <SearchBar />
            <div className="container-home">
                <h2>Nos hôtels</h2>
                <div className="container-hotels">
                    <div className="hotels-card">
                        {listHotel.map(item =>
                        <a href={item.link} className="hotels-link">
                            <div className="card-container" key={item.name}>
                                <img className="hotel-img" src={item.src} />
                                <figcaption className="label-name" >
                                    <img className="picto_cardHypnos" src="images/picto-hypnos.png"/><br/>
                                    {item.name}
                                </figcaption>
                            </div>
                        </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="content-home">
                <Apropos className="content-apropos"></Apropos>
                <div className="container-txt">
                    <h3>Bienvenue</h3>
                    <img className="arabesque" src="images/arabesque.png" />
                    <p>Hypnos est un groupe hôtelier fondé en 2004. Propriétaire de 7 établissements dans les quatre coins de l’hexagone, chacun de ces hôtels s’avère être une destination idéale pour les couples en quête d’un séjour romantique à deux.
                    <br/>Chaque suite au design luxueux inclut des services hauts de gamme (un spa privatif notamment), de quoi plonger pleinement dans une atmosphère chic-romantique.</p>
                    <a className="txt-link" href="#">En savoir plus</a>
                </div>
                
                <div className="bloc-left">
                    <h3>Spa</h3>
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
    background-image: url("images/chandelier-g6f5a69dd7_1920.jpg"); no-repeat;
    background-position: center center;
    background-size: cover;
    filter: brightness(40%);
`;

const Apropos = styled.div`
    background-image: url("images/basement-g619d6f8e7_1920.jpg"); no-repeat;
`;
