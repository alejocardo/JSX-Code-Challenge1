//Create a react app from scrat
import React from "react";
import ReactDOM from "react-dom";

const valor = 73;
//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>My favourite foods</h1>
    <div id="hacker-list">
      <ul class="list">
        <li>Pasta</li>
        <li>Tacos</li>
        <li>Tamales</li>
      </ul>
    </div>
    <h2>My favourite number is {valor}</h2>
  </div>,
  document.getElementById("root")
);

//It should display an unordered list (bullet points).
//It should contain 3 list elements.
