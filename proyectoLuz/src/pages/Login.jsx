import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState:{ errors }, watch} =useForm();
  const miSubmit = (data)=>{
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(miSubmit)}>
      <div>
        <label>Username</label>
        <input type="text" {...register('username',{
          required: true,
          maxLenght: 20,
        })} />
        {errors.username?.type === "required" && <p style={{color:"red"}}>Este campo es obligatorio</p>}
        {errors.username?.type === "maxLength" && <p style={{color:"red"}}>Este campo no puede tener más de 15 caracteres</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password',{
          required: true,
          maxLenght: 20,
        })} />
        {errors.password?.type === "required" && <p style={{color:"red"}}>Este campo es obligatorio</p>}
        {errors.password?.type === "maxLength" && <p style={{color:"red"}}>Este campo no puede tener más de 15 caracteres</p>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  )
}

export default Login