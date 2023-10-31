import React from 'react'
import Member1 from '../assets/team/1.jpeg'
import Member2 from '../assets/team/2.jpeg'
import Member3 from '../assets/team/3.jpeg'
import Member4 from '../assets/team/4.jpeg'
import Member5 from '../assets/team/5.jpeg'
import Member6 from '../assets/team/6.jpeg'
import Founder from '../assets/team/founder.jpeg'

const Team = () => {

  const teammates = [
    { id: 0, name: 'Namrata Talukdar', address: 'Guwahati, India', role: 'Founder, Dreams Endeavour', img: Founder },
    { id: 1, name: 'Maria Alejandra Fumaroni', address: 'Dublin, Ireland', role: 'English language teacher', img: Member1 },
    { id: 2, name: 'R.Ragalatha', address: 'India', role: 'Asst.Professor', img: Member2 },
    { id: 3, name: 'Shivangi Gandhi', address: 'Haryana, India', role: 'Academic Service Counsellor', img: Member3 },
    { id: 4, name: 'Dr.L.Gayathri Devi', address: 'Virudhunagar, India', role: 'Assistant Professor', img: Member4 },
    { id: 5, name: 'Ms. Pranjal Bhatt', address: 'Valsad, India', role: 'Asst.Professor', img: Member5 },
    { id: 6, name: 'Priyanka Dutta', address: 'India', role: 'Asst. Professor', img: Member6 },
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
                        <p>{teammate.address}</p>
                        <p>{teammate.role}</p>
                    </div>                
                </div>
            ))}              
                      
        </div>
        
        
    </>
  )
}

export default Team