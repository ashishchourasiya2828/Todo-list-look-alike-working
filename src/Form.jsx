import React from 'react'
import { useForm } from 'react-hook-form'
const Form = ({form}) => {
  const {register,handleSubmit,reset} = useForm()
  const handleuser = (data)=>{
    console.log(data);
    
    form((prev)=>[...prev,data])
    reset();
  }
  const checkHandler = (e) => {
    // console.log(e.target.checked);
    
  }
  return (
    <div className='h-full w-1/2 p-8 bg-white rounded-lg '>
      <h1 className='text-2xl font-bold ' >Add Contact</h1>
      <form onSubmit={handleSubmit(data=>handleuser(data))}>

      <h2 className='text-xl font-semibold mb-2 mt-5'>Name*</h2>
      <input {...register("name")} className='px-4 py-2 border-2 border-zinc-400 rounded-md w-full mb-5 ' type="text"  placeholder='Enter name' />
      <h2 className='text-xl font-semibold mb-2 mt-5'>Company*</h2>
      <input {...register("company")} className='px-4 py-2 border-2 border-zinc-400 rounded-md w-full mb-5 ' type="text"  placeholder='Enter company' />
      <h2 className='text-xl font-semibold mb-2 mt-5'>Phone*</h2>
      <input {...register("phone")} className='px-4 py-2 border-2 border-zinc-400 rounded-md w-full mb-5 ' type="number"  placeholder='Enter phone number' />
      {/*check box*/}
      <input {...register("check")} type="checkbox" onChange={checkHandler}  /> <label className='text-zinc-400' htmlFor="">Favourite</label>

      <button className='px-[20vw] rounded-md py-3 text-xl mt-9 bg-blue-600 text-white font-semibold  ' >Submit</button>
      </form>

    </div>
  ) 
}

export default Form