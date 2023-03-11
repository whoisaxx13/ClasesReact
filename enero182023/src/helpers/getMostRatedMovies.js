import React from 'react'

const getMostRatedMovies = async () => {

    const url='https://api.themoviedb.org/3/discover/movie?&language=es-es&sort_by=popularity.desc&api_key=ed1b952492d90faa859065763f81dad9';
    try {
      const res= await fetch(url);
      const datosApi = await res.json();
      return datosApi.results;
    } catch (error) {
      console.log(error);
    }
  
}

export default getMostRatedMovies