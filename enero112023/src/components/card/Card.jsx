import React from 'react';
import './card.css';

const Card = ({ nombre , profesion, genero } ) => {
  let ruta;



  function handleClick(e){
    e.preventDefault();
    const $imagen = e.target.parentElement.querySelector('img');
    $imagen.style.setProperty('filter', 'blur(10px)');
    
  }

  if(genero==='masculino') ruta='https://randomuser.me/api/portraits/men/'+Math.floor(Math.random()*99)+'.jpg';
  else ruta='https://randomuser.me/api/portraits/women/'+Math.floor(Math.random()*99)+'.jpg'

  return (
    <div className="card mx-auto w-1">
      <img className="card-img-top" src={ruta} alt="Card image cap"/>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <h3 className="card-text">{profesion}</h3>
      </div>
      <button type="button" onClick={handleClick} className="btn btn-primary mx-auto mb-2">Difuminar</button>
  </div>
  )
}

export default Card