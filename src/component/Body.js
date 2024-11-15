import React, { useEffect, useState } from "react"
import RestaurantCard from './RestaurantCard'
import { resData } from "../mockdata/restaurantData"
import { API_URL } from "../utils/utils"
const Body = () => {
   
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(API_URL, {
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*', // Typically, this isn't needed here
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const resData = await response.json();
    //         console.log("ResponseData==", resData);
    //     } catch (error) {
    //         console.error("Fetch error:", error);
    //     }
    // };

    // useEffect(()=>{
    //     fetchData();
    // },[])'
    
    return(
        <div className="body">
            <div className="search"><input type="text" name="search" placeholder="Enter your Keywopr"/></div>
            <div className="res-card-container">
                {
                    resData.map((restaurant,index)=>(
                        <RestaurantCard key={index} resData = {restaurant}/>
                    ))
                }
                
                
                
            </div>
        </div>
    )
}

export default Body