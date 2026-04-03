import React from 'react'
import "./Contact.css"
import {useForm} from "react-hook-form"

function Contact() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Submit Successfully ✔✔")
    reset();
  }

  return (
    <div className='contact' onSubmit={handleSubmit(onSubmit)}>
      <form>
        <input {...register("name", {
          required: true
        })} type='text' placeholder='Username...' />
        {errors.name && errors.name.type === "required" ? <span style={{ color: '#f7931e', fontWeight: "600" }}>Name is Required</span> : null}
        
        <input {...register("password", {
          required: true,
          minLength: 8
        })} type='password' placeholder='Password...' />
        {errors.password && errors.password.type === "required" ? <span style={{ color: '#f7931e', fontWeight: "600" }}>Password is Required</span> : null}
        {errors.password && errors.password.type === "minLength" ? <span style={{ color: '#f7931e', fontWeight: "600" }}>Minimum 8 characters are required</span> : null}

        <input {...register("email", {
          required: true
        })} type='email' placeholder='Email...' />
        {errors.email && errors.email.type === "required" ? <span style={{ color: '#f7931e', fontWeight: "600" }}>Email is Required</span> : null}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact