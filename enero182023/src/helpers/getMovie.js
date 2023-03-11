
const getMovie = async (id) => {
  const url=`https://api.themoviedb.org/3/movie/${id}?&language=es-es&api_key=ed1b952492d90faa859065763f81dad9`;
    try {
      const res= await fetch(url);
      const data = await res.json();
      return { data };
    } catch (error) {
      console.log(error);
    }
}

export default getMovie