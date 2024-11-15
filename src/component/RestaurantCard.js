
import React from "react"
import { IMAGE_URL } from "../utils/utils";
const RestaurantCard = ({resData}) => {
    const {cuisines,locality,avgRating,costForTwo,id} = resData?.info;
    return(
        <div className="res-card" key={id}>
            <img 
            className="res-card-image" 
            src={IMAGE_URL + resData.info.cloudinaryImageId}
            alt="Restaurant Image"
            />
            <h3>{resData.info.name}</h3>
            <p className="res-cuisine">{cuisines.join(",")}</p>
            <p className="res-location">{locality}</p>
            <p className="res-rating">{avgRating}</p>
            <p className="res-rating">{costForTwo}</p>
        </div>

    )
}

export default RestaurantCard