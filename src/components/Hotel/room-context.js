import React, { useState, useEffect,  useContext } from 'react'
import { useLocation, useParams } from "react-router-dom";

const RoomsContext = React.createContext()

const RoomsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const ListRooms = `http://127.0.0.1/api/rooms.json`;
    const [cardRooms, setCardRooms] = useState([]);
    // création du fichier json
    useEffect(() => {
        fetchData()
      }, []);
    const fetchData = async () => {
        const resp = await fetch(ListRooms)
        const json = await resp.json()
        setCardRooms(json)
        setIsLoading(false);
    } 

    //Disctribuer les données du context à tout le site
    return (
        <RoomsContext.Provider value={cardRooms}>
            {children}
        </RoomsContext.Provider>
    )
}

//Récupérer Hotel en cours
const useCurrentHotel = () => {
    const hotelItem = useLocation(RoomsContext)
    const currentHotel = hotelItem.state.hotelItem

     
    return currentHotel
}


//créer le Context Rooms
const useRooms = () => {
    const context = useContext(RoomsContext)

    if (context === undefined) {
        throw new Error(`Une erreur s'est produite dans le context des chambres`)
    }
    return context
}

export { RoomsProvider, useRooms, useCurrentHotel }