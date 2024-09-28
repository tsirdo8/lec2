import React from "react";
import "./Card.css";

export default function Card({ name, age, description = "No description", bg}) {
  return (
    <div className="card" style={{backgroundColor:bg}}>
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <p>Description : {description}</p>
    </div>
  );
}
