import React, { useEffect, useState } from "react"
import RestaurantCard from './RestaurantCard'
import { resData } from "../mockdata/restaurantData"
import { API_URL } from "../utils/utils"
const Body = () => {
   const[resData, setResData] = useState([]);
   const[originalData,setOriginalData] = useState(resData)

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const resDataObj = await response.json();
            setResData(resDataObj.data)
            setOriginalData(resDataObj.data)
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    useEffect(()=>{
        fetchData();
    },[])

    const handleRating = ()=>{
        const updatedRes = resData.filter((res)=>(res.rating>4))
        setResData(updatedRes)
    }

    const handleSearch = (e) => {
        const searchText = e.target.value.trim().toLowerCase(); // Trim and convert to lowercase
    if (searchText === "") {

        setResData(originalData); // Reset to the original data if input is cleared
    } else {
        const updatedRes = resData.filter((res) =>
            res.name.toLowerCase().includes(searchText)
        );
        setResData(updatedRes); // Update the filtered data
    }
    }
    
    return(
        <div className="body">
            <div className="search"><input type="text" name="search" placeholder="Enter your Keywopr" onChange={handleSearch}/> &nbsp; <button onClick={handleRating}>Filter by Rating</button></div>
            
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