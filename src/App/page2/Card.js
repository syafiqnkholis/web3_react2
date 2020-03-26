import React, {Component} from "react";
import "./Card.css";


const Card = (prop) => {
    return (
      <div class="card">
        <p class="tittle">{prop.name}</p>
        <p> {prop.job} </p> 
      </div>
    )
  }


  export default Card;