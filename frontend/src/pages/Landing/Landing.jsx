import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {NavLink, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import './landing.css'
import { login } from '../../features/auth/authSlice';


const Landing = () => {
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const {user , isLoading , isError , isSuccess , message} = useSelector((state) => state.auth)

    useEffect(()=>{
      if(isSuccess || user){
          navigate('/main')
      }
  },[user,isError,isSuccess,message,navigate,dispatch])

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    
    const onSubmit = (e)=>{
        console.log(e);
        dispatch(login(e))
        }

    

  return (
    <div>
       <section className='common' >
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Please enter the details</span>
               

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("email")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <button className='btn'>Sign In</button>
                </form>

                <span>
                <NavLink to={'/register'}>
                    {"Don't have an account? Sign Up"}
                  </NavLink>
                </span>

            </div>
        </div>
    </section>
    </div>
  )
}

export default Landing