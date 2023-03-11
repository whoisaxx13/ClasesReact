import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import getMostRatedMovies from '../../helpers/getMostRatedMovies';
import getMovie from '../../helpers/getMovie';

const initialStatePeli = [];
const initialStateRuta = [];

const InfoMovie = ({ idpeli }) => {
  const [peli, setPeli] = useState(initialStatePeli);
  const [ruta, setRuta] = useState(initialStateRuta);
  function traerPeli(id){
    getMovie(id)
    .then(pelicula =>{
      setPeli(pelicula.data);
      setRuta("https://image.tmdb.org/t/p/original/"+pelicula.data.poster_path);
    })
    .catch(error => console.log(error))
  }
  useEffect(() => {
    traerPeli(idpeli);
    
  }, [idpeli])
  return (
    <div className='pelicula'>
      <img src={ruta} alt="" style={ { width : "30%" , margin_top : "20px"}} />
      <h1>{peli.title}</h1>
      <h2>{peli.overview}</h2>
    </div>
  )
}

export default InfoMovie