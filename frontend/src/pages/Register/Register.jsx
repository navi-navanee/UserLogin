import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './register.css'

const Register = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    
    const onSubmit = (e)=>{
        console.log(e);
        }

  return (
    <div>
           <section className='common' >
        <div className="register">
            <div className="col-1">
                <h2>Sign Up</h2>
                <span>Please enter the details</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder='username' />
                    <input type="text" {...register("email")} placeholder='email' />
                    <input type="text" {...register("password")} placeholder='password' />
               
                    <button className='btn'>Sign Up</button>
                </form>

                <span>
                <NavLink to={'/'}>
                    {"Don't have an account? Sign In"}
                  </NavLink>
                </span>

            </div>
        </div>
    </section>
    </div>
  )
}

export default Register