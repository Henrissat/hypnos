import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";
import { useHypnos } from "./hypnos-context";
import "./Home.css"
//import listHotel from "./ListHotel";
import SearchBar from "../Utils/SearchBar"

export default function Home() {
    //const [isLoading, setIsLoading] = useState(true);
    const urlHotel = "https://hypnos.netlify.app/";
    const urlServer = "https://serveur-hypnos.herokuapp.com/";
    //const ListHotels = `http://127.0.0.1/api/hotels.json`;

    //Récupérer les hotels
    const hotelData = useHypnos()

    return(
        <Wrapper>
            <h1>Hotel de charme <br/>pour les amoureux</h1>
            <img src={`${urlHotel}/images/chandelier-g6f5a69dd7_1920.jpg`} className="bgHeader"/>
            {/* import de la barre de réservation */}
            <SearchBar />
            {/* création en dynamique de la liste des hotels */}
            <div className="container-home">
                <h2>Nos hôtels</h2>
                <div className="container-hotels">
                    <div className="hotels-card">
                        { /*isLoading ? "chargement des hôtels" :*/ hotelData.map(item =>
                         <Link to={`/Hotel/${item.name}`} state={{hotelItem: item}} className="hotels-link" key={item.name}>
                            <div className="card-container" >
                                <img className="hotel-img" src={`${urlServer}upload/images/hotels/${item.vignette}`} />
                                <figcaption className="label-name" >
                                    <img className="picto_cardHypnos" src={`${urlHotel}images/picto-hypnos.png`}/><br/>
                                    {item.name}
                                </figcaption>
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

const Apropos = styled.div`
    background-image: url("/images/basement-g619d6f8e7_1920.jpg"); no-repeat;
`;
