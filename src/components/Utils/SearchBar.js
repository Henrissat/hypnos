import "./searchBar.css"
import listHotel from "./ListHotel";

export default function searchBar() {

    return(
        <div className="search-bar">
            <select className="destination-search" placeholder="Sélectionner une destination">
                {listHotel.map(destination =>
                    <option value={destination.name} selected>{destination.name}</option> 
                    )}
            </select>
            <div className="hotel-date-start">
                <input className="block-arrival search-date" 
                    type="date" 
                    placeholder="yyyy-mm-dd" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    name="arrival" 
                    on="change:AMP.setState({
                        fields_arrival: true,
                        fields_arrival_edited: true
                    })"
                    />
            </div>
            <div class="hotel-date-end search-date">
                <input className="block-departure search-date" 
                    type="date" 
                    placeholder="yyyy-mm-dd" 
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
                    title="yyyy-mm-dd" 
                    name="departure" 
                    on="change:AMP.setState({
                        fields_departure: true,
                        fields_departure_edited: true
                    })"
            />
            </div>
            <button className="btn_travelSearch">
                        Réserver
                        <img href="#" src="images/picto_search.png" className="picto-search"/>
            </button>
        </div>
    )
}