import React from 'react'

const getTime = async(localidad, pais, token) => {
  try {
    const res =await fetch("https://api.preciodelaluz.org/v1/prices/all?zone=PCB"),
        json= await res.json();
    return json;
  }catch(error){
    console.log(error)
  }
}

export default getTime