import Rate from "./rate";
import React from "react";
import {useState} from "react";

function Estrella({ activar, onClick }) {
    
   (
    <span className={activar ? "active" : "inactive"} onClick={onClick}>
      {'\u2605'}
    </span>
  );
}

export default Estrella;