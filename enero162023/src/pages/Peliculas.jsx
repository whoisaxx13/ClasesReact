import React from 'react'
import { Link, useLoaderData } from "react-router-dom"
const Peliculas = () => {
  const { peliculas } = useLoaderData()
  console.log(peliculas);
  return (
      peliculas.map((peli)=>(<li key={peli.id}><Link to={`/infopeliculas/${peli.id}` }>{peli.title}</Link></li>))
  )
}

export const getMostRatedMovies = async () => {

  const url='https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=ed1b952492d90faa859065763f81dad9';
  try {
    const res= await fetch(url);
    const datosApi = await res.json();
    const peliculas = datosApi.results
    return {peliculas};
  } catch (error) {
    console.log(error);
  }

}

export default Peliculas