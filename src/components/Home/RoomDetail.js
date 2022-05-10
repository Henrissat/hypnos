import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import "./Home.css"
//import listHotel from "./ListHotel";
import SearchBar from "../Utils/SearchBar"

function RoomDetail({ match }) {
    /*
    //const ListRooms = `http://localhost:3000/images/rooms.json`
    const [cardHotel, setCardHotel] = useState({});
    // récupération du fichier au format json
    useEffect(() => {
        fetchHotel()
        console.log(match)
      }, []);
    const fetchHotel = async () => {
        const fetchHotel = await fetch(ListRooms)
        const item = await fetchHotel.json()

        console.log(item)
    } */

    return(
        <Wrapper>
            <h1>Hotel de charme <br/>pour les amoureux</h1>
            <HeaderBg_home/>
            {/* import de la barre de réservation */}
            <SearchBar />
            {/* création en dynamique de la liste des hotels */}
            <div className="container-home">
                <h2>Nos hôtels</h2>
            
            </div>
        </Wrapper>
    );
}
export default RoomDetail;

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
