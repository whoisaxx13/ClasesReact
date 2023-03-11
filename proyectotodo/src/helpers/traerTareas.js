import React from 'react'

const traerTareas = async() => {
  try{
    const res= await fetch("http://localhost:4500/tareas"),
          json= await res.json();
        if(!res.ok) throw {status: res.status, statusText: res.statusText}
    return json.reverse();
  }catch(error){
    console.log(error);
  }
}

export default traerTareas