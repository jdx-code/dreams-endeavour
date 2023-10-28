import React from 'react'

const Team = () => {
  return (
    <>  
        
        <h1 className='text-center mt-8'>Our team</h1>
        
        <div className='flex flex-col items-center'>
            <div className='w-72 mt-8 mb-8 bg-red-300 border-2 border-yellow-300'>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                <p>I am name</p>
                <p>I am role</p>
            </div>
            <div className='w-72 mt-8 mb-8 bg-red-300 border-2 border-yellow-300'>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                <p>I am name</p>
                <p>I am role</p>
            </div>
            <div className='w-72 mt-8 mb-8 bg-red-300 border-2 border-yellow-300'>
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" />
                <p>I am name</p>
                <p>I am role</p>
            </div>            
        </div>
    </>
  )
}

export default Team