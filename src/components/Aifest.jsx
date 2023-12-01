import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 
import AIFESTlogo from '../assets/AIFEST-logo.png'

const content = [
    {
        img: AIFESTlogo,
        title: 'About AIFEST..',
        desc: 'All India Forum for English Students, Scholars and Trainers (AIFEST) has successfully promoted the cause of English Research and Studies in India since 1994 through the selfless service of its volunteers. Around 3500 new members joined AIFEST in the year that passed by (as of 31 August 2020) swelling the number of life-time members in AIFEST to 18K. As per the recommendations of the new Executive Committee, from 2020 onwards, school students will also be granted membership in AIFEST. Born on 19th June, 1994, AIFEST is a voluntary academic forum which tries to help the poor, the helpless and the academically deprived among the students, researchers and teachers of English. The forum is completely voluntary and not-for-profit, has neither funding nor any system of payment. Through our volunteers, we try to provide books and learning materials to poor students, we offer free guidance for researchers, we conduct free net English coaching for teacher aspirants, and we conduct programmes for improving the quality of English language and literature education. We provide access to free books, journals, notes, study materials and various audio and video lectures for the English undergraduate, postgraduate, MPhil and PhD students. Dreams Endeavour collaborates with this boon to the society of English scholars and students to help every individual make a mark in their professional career.'
    }
]

const Aifest = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
        // Fire the animation
        mainControls.start("visible")

        }
    }, [isInView])

  return (
    <>    
        <div ref={ref} className='flex flex-col'>
            <motion.h1 
                variants = {{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ 
                    duration:0.5, delay: 0.25 
                }}
                className='mt-12 text-3xl md:text-4xl mb-8 text-center'
            >
                Collaboration with AIFEST
            </motion.h1>
            <div className='w-[100%] flex flex-col-reverse lg:flex-row'>            
                <motion.div 
                    variants = {{
                        hidden: { opacity: 0, x: 95},
                        visible: { opacity: 1, x: 0},
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ 
                        duration:0.5, delay: 0.25 
                    }}
                    className='items-center p-4 m-4 gap-5 lg:w-[62%]'
                >
                    <h1 className='text-3xl md:text-4xl mb-5'>{content[0].title}</h1>
                    <p>{content[0].desc}</p>
                </motion.div>
                <div className='mx-auto lg:w-[38%] flex justify-center items-center'>
                    <motion.img
                        variants = {{
                            hidden: { opacity: 0, x: -95},
                            visible: { opacity: 1, x: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ 
                            duration:0.5, delay: 0.25 
                        }} 
                        src={content[0].img}
                    />
                </div>
            </div>
        </div>         
    </>
  )
}

export default Aifest