import React from 'react'
import AIFESTlogo from '../assets/AIFEST-logo.png'

const content = [
    {
        img: AIFESTlogo,
        title: 'What is AIFEST ?',
        desc: 'All India Forum for English Students, Scholars and Trainers (AIFEST) has successfully promoted the cause of English Research and Studies in India since 1994 through the selfless service of its volunteers. Around 3500 new members joined AIFEST in the year that passed by (as of 31 August 2020) swelling the number of life-time members in AIFEST to 18K. As per the recommendations of the new Executive Committee, from 2020 onwards, school students will also be granted membership in AIFEST. Born on 19th June, 1994, AIFEST is a voluntary academic forum which tries to help the poor, the helpless and the academically deprived among the students, researchers and teachers of English. The forum is completely voluntary and not-for-profit, has neither funding nor any system of payment. Through our volunteers, we try to provide books and learning materials to poor students, we offer free guidance for researchers, we conduct free net English coaching for teacher aspirants, and we conduct programmes for improving the quality of English language and literature education. We provide access to free books, journals, notes, study materials and various audio and video lectures for the English undergraduate, postgraduate, MPhil and PhD students.'
    }
]

const Aifest = () => {
  return (
    <>
        <div className='w-[100%] sm:flex sm:items-center bg-red-300'>
            <div className='sm:w-[60%] sm:flex sm:flex-col items-center p-4 m-4 gap-5'>
                <h1 className='text-4xl'>{content[0].title}</h1>
                <p>{content[0].desc}</p>
            </div>
            <div className='sm:w-[40%] sm:flex sm:justify-center'>
                <img 
                    src={content[0].img}
                />
            </div>
        </div>
    </>
  )
}

export default Aifest