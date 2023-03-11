
const getUsers = async () => {
  const url='https://reqres.in/api/users?page=1';
  try {
    const res= await fetch(url);
    const datosApi = await res.json();
    return datosApi.data;
  } catch (error) {
    console.log(error);
  }

}

export default getUsers