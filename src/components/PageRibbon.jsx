import React from 'react'

const PageRibbon = ({ pageTitle }) => {
  return (
    <>
        <div className='pageRibbon my-4 w-[68%] md:w-[45%] h-20 flex items-center'>
            <p className='pageTitle px-[3.5rem] text-4xl'> {pageTitle} </p>
        </div>        
    </>   
  )
}

export default PageRibbon