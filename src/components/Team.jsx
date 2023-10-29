import React from 'react'

const Team = () => {

  const teammates = [
    { id: 1, name: 'Mary Jane', role: 'Founder', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
    { id: 2, name: 'Svetlana Kodak', role: 'Co-Founder', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
    { id: 3, name: 'Rob Thompson', role: 'Manager', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80' },
  ]  

  return (
    <>  
        
        <h1 className='text-center mt-8 text-4xl'>Our team</h1>
        
        <div className='flex flex-col items-center sm:flex-row sm:justify-center sm:flex-wrap'>
            
            {teammates.map((teammate)=> (
                <div key={teammate.id} className='w-72 mt-8 mb-8 p-2 border-2 border-blue-200 shadow-2xl rounded-lg sm:mx-4'>
                    <img className="rounded-md" src={teammate.img} />
                    <div className='text-center p-2'>
                        <p>{teammate.name}</p>
                        <p>{teammate.role}</p>
                    </div>                
                </div>
            ))}
            
                      
        </div>
    </>
  )
}

export default Team