import React from 'react'
import './Card.css'
import image1 from '../Images/1.jpg'

const Card= (props) => {
    return(
        <div className="card">
            <img src={image1} alt="no Image" width={200} style={{border: "2px solid red"}}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card