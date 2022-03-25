import React from 'react'
import './Nav.css'
import { useState } from "react"


export default function NavBar() {
    const [openNav, setOpenNav] = useState(false)

    const handleOpenNav = () => {
        setOpenNav(!openNav)
    }

    console.log(openNav)
    return(
        <nav className={`navbar ${openNav ? "nav-on" : "nav-off"} `}>
            <button className='navbar_burger' onClick={handleOpenNav}>
                <span className='burger_bar'></span>
            </button>
            <ul className="navbar_links">
                <li>
                    <img className="logo-nav" src="images/picto-hypnos.png"/>
                </li>
                <li className="navbar_item slideEffect-1">
                    <a href="/" className="navbar_link">Accueil</a>
                </li>
                <li className="navbar_item slideEffect-2">
                    <a href="/Hotel" className="navbar_link">Hypnos Annecy</a>
                </li>
                <li className="navbar_item slideEffect-2">
                    <a href="/Hotel" className ="navbar_link">Hypnos Juan-les-Pins</a>
                </li>
                <li className="navbar_item slideEffect-3">
                    <a href="/Hotel" className="navbar_link">Hypnos Chantilly</a>
                </li>
                <li className="navbar_item slideEffect-4">
                    <a href="/Hotel" className="navbar_link">Hypnos Biarritz</a>
                </li>
                <li className="navbar_item slideEffect-5">
                    <a href="/Hotel" className="navbar_link">Hypnos Aurillac</a>
                </li>
                <li className="navbar_item slideEffect-6">
                    <a href="/Hotel" className="navbar_link">Hypnos Caen</a>
                </li>
                <li className="navbar_item slideEffect-7">
                    <a href="/Hotel" className="navbar_link">Hypnos Strasbourg</a>
                </li>
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
                <li><a href="#"><img className="sm_picto" src="images/picto-facebook.png"/></a></li>
                <li><a href="#"><img className="sm_picto" src="images/picto-instagram.png"/></a></li>
                <li><a href="#"><img className="sm_picto" src="images/picto-twitter.png"/></a></li>
            </ul>
            </span>
        </nav>
    )
}