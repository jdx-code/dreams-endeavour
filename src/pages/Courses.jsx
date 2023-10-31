import React from 'react'
import CourseCards from '../components/CourseCards'
import Footer from '../components/Footer'
import PageRibbon from '../components/PageRibbon'

const Courses = () => {
  return (
    <>
        <PageRibbon pageTitle="Courses"/>
        <CourseCards />
        <Footer />
    </>
  )
}

export default Courses