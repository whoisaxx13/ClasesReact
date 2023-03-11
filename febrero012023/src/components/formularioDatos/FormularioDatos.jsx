import React from 'react';
import { useForm } from 'react-hook-form';
import { validarEdad } from '../misValidaciones';
const FormularioDatos = () => {
  const { register, handleSubmit, formState:{ errors }, watch} =useForm({
    defaultValues: { 
      nombre: "Mario"
    }
  });
  const miSubmit = (data)=>{
    console.log(data);
  }
  const tieneCarnet =watch('carnet')
  return (
    <div>
      <form onSubmit={handleSubmit(miSubmit)}>
        <div>
          <label >Nombre</label>
          <input type="text" {...register("nombre", {
            required: true,
            maxLength: 15,
          })} />
          {errors.nombre?.type === "required" && <p style={{color:"red"}}>Este campo es obligatorio</p>}
          {errors.nombre?.type === "maxLength" && <p style={{color:"red"}}>Este campo no puede tener más de 15 caracteres</p>}
        </div>
        <div>
          <label >Apellidos</label>
          <input {...register("apellidos")} type="text" />
        </div>
        <div>
          <label >Edad</label>
          <input {...register("edad" , {
            required: true,
            validate: validarEdad,
            min: 18,
            max: 99,
          })} type="number" />
          {errors.edad?.type === "required" && <p style={{color:"red"}}>Este campo es obligatorio</p>}
          {errors.edad?.type === "min" && <p style={{color:"red"}}></p>}
          {errors.edad && <p style={{color:"red"}}>Introduzca una edad válida</p>}

        </div>
        <div>
          <label >Email</label>
          <input {...register("email",{
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} type="text" />
          {errors.email?.type === "pattern" && <p style={{color:"red"}}>Introduzca un email válido</p>}

        </div>
        <div>
          <label >CP</label>
          <input {...register("cp" ,{
            minLength: 5,
            maxLength: 5,
            pattern: /^[1-9]\d{4}$/gm
          })} type="text" />
          {errors.cp?.type === "pattern" && <p style={{color:"red"}}>Introduzca un código postal válido</p>}

        </div>
        <div>
          <select {...register("localidad")} >
            <option value="andalucia">Andalucía</option>
            <option value="no_andalucia">Fuera de Andalucía</option>
          </select>
        </div>
        <div>
          <input type="submit" />
        </div>
        <label >{watch('nombre')}</label>
        <div>
          <label >Dispone de carnet de conducir</label>
          <input type="checkbox" {...register("carnet")}/>
        </div>
        {
          tieneCarnet&&
          (<div>
            <label >Fecha de expedicion</label>
            <input type="date" {...register("datecarnet")}/>
          </div>)
        }
      </form>
    </div>

  )
}

export default FormularioDatos