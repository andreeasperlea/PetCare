import React from "react"
import CardItem from "./CardItem"
import './Cards.css'
function Cards(){
    return(
        <div className="cards">
            <h1>We provide the following services:</h1>
            <div className="cards__container">
                <div className="cards__wrapper"></div>
                <ul className="cards__items"></ul>
                <ul>
                <CardItem
                src='VetAndDogPetCareGOOD.png'
                text="Your pet will receive the best treatment from our specialists."
                label='Quality'
                path='./aboutUs'
                />
                     <CardItem
                src='OwnerAndDogPetCare.png'
                text="You can take care of your furry friend from the comfort of your house!"
                label='Comfort'
                path='./aboutUs'
                />
                    <CardItem
                src='VetsPetCare.png'
                text="Our team of veterinarians are always one click away."
                label='Accesibility'
                path='./aboutUs'
                />
                </ul>

            </div>
        </div>
    )
}

export default Cards
