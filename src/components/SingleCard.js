import React from 'react'
import './SingleCard.css'


export default function SingleCard({ card, handleChoice, flipped, disable }) {
    

    const handleClick = () => {
        if (!disable) {
            handleChoice(card)
        }
    }
    return (
        <div className="card" >
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img onClick={handleClick} className="back" src="/img2/cover1.jpg" alt="cover" />
            </div>

            
        </div>)
}
