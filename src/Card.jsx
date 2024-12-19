import React from 'react'

const Card = (user) => {
  console.log(user.user);
  
  return (
    <div className='bg-white p-5 h-[10vw] w-full rounded-md ' >
      <h1 className='text-xl font-semibold' >Name : {user.user.name}</h1>
      <h1 className='text-xl font-semibold' >Company : {user.user.company}</h1>
      <h1 className='text-xl font-semibold' >Phone : {user.user.phone}</h1>
      <div className=' w-full  ' >

        {user.user.check ? <div className='text-white text-sm w-fit rounded-[3vw] px-2 py-1 bg-orange-500 font-semibold'>favourite</div> : ""}
      </div>
    </div>
  )
}

export default Card