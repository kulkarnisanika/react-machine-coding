import React from "react";
import "./infinite-scroll.css"
const Card = ({id, title,price,imageUrl, description}) => {
    
    return(
        <div className="card">
            <div className="card-head">
                <h2 className="card-id">{id}</h2>
                <h2>{title}</h2>
                <h4>${price}</h4>
            </div>
            <div>
                <img src={imageUrl} alt={title}></img>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default Card;