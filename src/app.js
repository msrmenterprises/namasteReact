import React from "react"
import ReactDOM from 'react-dom/client'
import styles from './custom.css'
import Header from './component/Header'
import Body from "./component/Body"
import Footer from "./component/Footer"

/*
    Header
        -Logo
        - Nav Item 
    Body 
        - Search 
        - RestaurantContainer 
            - RestuarnatCard
                - Image 
                - Name , Star, Rating, Cuisines, Delivery Time
    Footer
        -Copywright
        -Links
        -Address
        - Contact

*/


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
        