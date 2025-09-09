import { useState } from "react";
import Estrella from "./estrella";

function Rate({avisaCambio, index}) {

  const stars = [1, 2, 3, 4, 5];
  const [raeting, setRaiting] = useState(0)
  //     |->valor   |-> metodo para asignarle valor
  const califica=(star)=>{
    setRaiting(star)
    avisaCambio(index, star)
  }

  
//transformar estrellas a un componente

  return (
    <>

      <div className="card">
        <div className="star">
          <div className="activar">
          {stars.map((star, key={i}) => ( //la key={i} muestra las estrellas 
          <Estrella //esto es en vez de span
          key={star}
          activar={star<=raeting }
          onClick={()=>califica(star)}
          />
            //<span className={star<=raeting ? "active" : "inactive"} key={i}> <a onClick={()=>califica(star)}>{'\u2605'}</a></span> //
          ))}</div>
        </div>

      </div>
    </>
  )
}
//subirlo a un repo
export default Rate


