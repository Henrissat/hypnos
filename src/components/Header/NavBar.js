import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import './Nav.css'


export default function NavBar() {
    const [isLoading, setIsLoading] = useState(true);
    const urlHotel = "https://hypnos-hotels.herokuapp.com/";
    const ListHotels = `http://localhost:3000/images/hotels.json`
    const [cardHotel, setCardHotel] = useState([]);
    // création du fichier json
    useEffect(() => {
        fetchData()
      }, []);
    const fetchData = async () => {
        const resp = await fetch(ListHotels)
        const json = await resp.json()
        setCardHotel(json)
        setIsLoading(false);
    } 

    //ouvrir le menu de nav latéral
    const [openNav, setOpenNav] = useState(false)
    const handleOpenNav = () => {
        setOpenNav(!openNav)   
    }

    //gestion des pages ouvertes : à faire !!
    const [isShow, setIsShow] = useState(false)
    const handleToggle = ()=> {
        setIsShow(isShow)
    }

    console.log(openNav)
    return(
        <nav className={`navbar ${openNav ? "nav-on" : "nav-off"} `}>
            <button className='navbar_burger' onClick={handleOpenNav}>
                <span className='burger_bar'></span>
            </button>
            <ul className={isShow?"navbar_links show_links":"navbar_links"}>
                <li>
                    <img className="logo-nav" src={`${urlHotel}images/picto-hypnos.png`}/>
                </li>
                <li className="navbar_item slideEffect-1">
                    <a href="/" className="navbar_link">Accueil</a>
                </li>
                { isLoading ? "chargement des hôtels" : cardHotel.map(item =>
                    <li className="navbar_item slideEffect-2" key={item.id}>
                        <Link to={`/Hotel/${item.id}/${item.name}`} state={{hotelItem: item}} className="navbar_link">{item.name}</Link>
                    </li>
                )}
                <li className="navbar_item slideEffect-8">
                    <a href="/reservation" className="navbar_link">Réservation</a>
                </li>
                <li className="navbar_item slideEffect-9">
                    <a href="/" className="navbar_link">Gallerie</a>
                </li>
                <li className="navbar_item slideEffect-10">
                    <a href="/" className="navbar_link">Spa</a>
                </li>
            </ul>
            <span className='bg_bar'>
            <ul className="sm_navbar">
                <li><a href="#"><img className="sm_picto" src={`${urlHotel}images/picto-facebook.png`}/></a></li>
                <li><a href="#"><img className="sm_picto" src={`${urlHotel}images/picto-instagram.png`}/></a></li>
                <li><a href="#"><img className="sm_picto" src={`${urlHotel}images/picto-twitter.png`}/></a></li>
            </ul>
            </span>
        </nav>
    )
}