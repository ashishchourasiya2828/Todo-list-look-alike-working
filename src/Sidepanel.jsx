import React from 'react'
import Card from './Card'

const Sidepanel = ({users}) => {
    
    
  return (
    <div className='h-full w-1/2 overflow-y-auto p-8' >
        <h1 className='text-2xl mb-5 font-bold'>Contact List</h1>
        <div className='h-full w-full flex flex-col gap-4 ' >
            {users.map(function(user,idx){
                // console.log(user);
                
                return <Card key={idx} user={user}/>
            })}

        </div>
    </div>
  )
}

export default Sidepanel