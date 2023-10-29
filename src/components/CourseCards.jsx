import React from 'react'
import CourseOne from '../assets/c1.jpg'
import CourseTwo from '../assets/c2.jpg'
import CourseThree from '../assets/c3.jpg'
import CourseFour from '../assets/c4.jpg'
import CourseFive from '../assets/c5.jpg'
import CourseSix from '../assets/c6.jpg'


const CourseCards = () => {

  const freeCourses = [
    { id: 1, name: 'Spoken English', desc: 'Introduction, Grammar, Reading, Conversational Skills, Vocabulary Pronunciation.', price: 'FREE', img: CourseOne },
    { id: 2, name: 'Personality Development', desc: 'Introduction, Developing personality, Communication skills, Body language', price: 'FREE', img: CourseTwo },
    { id: 3, name: 'Job seeker’s know-how', desc: 'How to apply for different jobs, opening account in LinkedIn and other online platforms', price: 'FREE', img: CourseThree },
    { id: 4, name: 'Employability Skills', desc: 'Communication skills, Writing skills, Interview skills, Presentation skills, Dress code ethics', price: 'FREE', img: CourseFour },
    { id: 5, name: 'Grooming', desc: 'Dressing skills, Lifestyle tips , Personal hygiene, Conversational skills, Body language', price: 'FREE', img: CourseFive },
    { id: 6, name: 'Interview Skills', desc: 'Interview preparation, Common Interview Questions, CV/Cover-letter, Mock Interviews.', price: 'FREE', img: CourseSix },
  ]
  
  const premiumCourses = [
    { id: 1, name: 'Spoken English', desc: 'Introduction, Grammar, Reading, Conversational Skills, Vocabulary Pronunciation.', price: 'FREE', img: CourseOne },
    { id: 2, name: 'Personality Development', desc: 'Introduction, Developing personality, Communication skills, Body language', price: 'FREE', img: CourseTwo },
    { id: 3, name: 'Job seeker’s know-how', desc: 'How to apply for different jobs, opening account in LinkedIn and other online platforms', price: 'FREE', img: CourseThree },    
  ]

  return (
    <>  
        
        <h1 className='text-center mt-8 text-4xl'>Free Courses</h1>
        
        <div className='flex flex-col items-center sm:flex-row sm:justify-center sm:flex-wrap'>
            
            {freeCourses.map((course)=> (
                <div key={course.id} className='w-72 mt-8 mb-8 p-2 border-2 border-blue-200 shadow-2xl rounded-lg sm:mx-4'>
                    <img className="rounded-md" src={course.img} />
                    <div className='text-center p-2'>
                        <p>{course.name}</p>
                        <p>{course.desc}</p>
                    </div>                
                </div>
            ))}            
                      
        </div>


        <h1 className='text-center mt-8 text-4xl'>Premium Courses</h1>
        
        <div className='flex flex-col items-center sm:flex-row sm:justify-center sm:flex-wrap'>
            
            {premiumCourses.map((course)=> (
                <div key={course.id} className='w-72 mt-8 mb-8 p-2 border-2 border-blue-200 shadow-2xl rounded-lg sm:mx-4'>
                    <img className="rounded-md" src={course.img} />
                    <div className='text-center p-2'>
                        <p>{course.name}</p>
                        <p>{course.desc}</p>
                    </div>                
                </div>
            ))}            
                      
        </div>
    </>
  )
}

export default CourseCards