
import React from "react"
import { IMAGE_URL } from "../utils/utils";
const RestaurantCard = ({resData}) => {
    const {name,cusines,location,rating,id,documentId} = resData;
    return(
        <div className="res-card" key={id}>
            <img 
            className="res-card-image" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
            alt="Restaurant Image"
            />
            <h3>{name}</h3>
            <p className="res-cuisine">{cusines}</p>
            <p className="res-location">{location}</p>
            <p className="res-rating">{rating}</p>
            
        </div>

    )
}

export default RestaurantCard