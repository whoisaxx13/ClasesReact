import React from 'react'

const guardarTarea = async(data) => {
  try{
    const options ={
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ ...data })
    };
    const res= await fetch("http://localhost:4500/tareas", options),
          json= await res.json();
        if(!res.ok) throw {status: res.status, statusText: res.statusText}
  }catch(error){
    console.log(error);
  }
}

export default guardarTarea