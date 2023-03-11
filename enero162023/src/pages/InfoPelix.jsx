import React from 'react'

const InfoPelix = () => {
  return (
    <div className='container'>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src={`https://image.tmdb.org/t/p/original/${}`} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export const getMovie = async (id) => {
  const url=`https://api.themoviedb.org/3/movie/${id}?&language=es-es&api_key=ed1b952492d90faa859065763f81dad9`;
    try {
      const res= await fetch(url);
      const datosApi = await res.json();
      return datosApi;
    } catch (error) {
      console.log(error);
    }
}
export default InfoPelix