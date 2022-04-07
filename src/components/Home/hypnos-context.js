import React, { useState, useEffect,  useContext } from 'react'

const HypnosContext = React.createContext()

const HypnosProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const ListHotels = `http://127.0.0.1/api/hotels.json`
    const [cardHotel, setCardHotel] = useState([]);
    // récupération du fichier au format json
    useEffect(() => {
        fetchDatas()
      }, []);
    const fetchDatas = async () => {
        const resp = await fetch(ListHotels)
        const json = await resp.json()
        setCardHotel(json)
        setIsLoading(false);
    } 

    //créer le Context Hotels pour tout le site
    return (
        <HypnosContext.Provider value={cardHotel}>
            {children}
        </HypnosContext.Provider>
    )
}

const useHypnos = () => {
    const context = useContext(HypnosContext)

    if (context === undefined) {
        throw new Error(`Une erreur s'est produite dans le context`)
    }
    return context
}

export { HypnosProvider, useHypnos }