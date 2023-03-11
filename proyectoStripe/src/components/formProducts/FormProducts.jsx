import React from 'react'


const FormProducts = ({ products , setProducts, totalPayment, setTotalPayment }) => {
  function handleProduct(e){
    e.preventDefault();
    const miObj= [ ...products ],
      name= document.querySelector('#name').value,
      price= document.querySelector('#price').value;
    miObj.push( { name, price });
    setTotalPayment(totalPayment+parseFloat(price));
    setProducts(miObj);
  }
  return (
    <div>
      <form >
        <input type="text" placeholder='Producto' id='name' /> <br /><br />
        <input type="number" placeholder='€' id='price' /> <br /><br />
        <button onClick={handleProduct}>Agregar Producto</button>
      </form>
    </div>
  )
}

export default FormProducts