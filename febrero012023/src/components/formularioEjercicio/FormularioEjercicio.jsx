import React from 'react'
import { useForm } from 'react-hook-form';
import getTime from '../../helpers/getTime';
const FormularioEjercicio = ({ setTime }) => {
  const { register, handleSubmit, formState:{ errors }, watch} =useForm();
  const completed= watch('name')&&watch('place')&&watch('country')
  const miSubmit= (data)=>{
    getTime(data.place, data.country, data.token)
    .then((res)=>{
      setTime(res);
    })
  }
  return (
    <form onSubmit={handleSubmit(miSubmit)}>
      <div>
        <label>Nombre</label>
        <input type="text" {...register("name",{
          required: true,
          maxLength: 20,
        })} />
      </div>
      <div>
        <label>Localidad</label>
        <input type="text" {...register("place",{
          required: true,
          maxLength: 200,
        })}/>
      </div>
      <div>
        <label>Pais</label>
        <input type="text" {...register("country",{
          required: true,
          maxLength: 200,
        })}/>
      </div>
      {
        completed&&(
          <>
            <div>
              <label >Token</label>
              <input type="text" {...register("token",{
                required:true,
              })} />
            </div>
            <div>
              <input type="submit" />
            </div>
          </>
        )
      }
    </form>
  )
}

export default FormularioEjercicio