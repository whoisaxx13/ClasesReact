const getPoster = async (ruta) => {
  const url=`https://image.tmdb.org/t/p/original/${ruta}`;
    try {
      const res= await fetch(url);
      const datosApi = await res.json();
      return datosApi;
    } catch (error) {
      console.log(error);
    }
}

export default getMovie