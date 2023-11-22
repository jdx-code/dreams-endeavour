import React from 'react'
import CourseCards from '../components/CourseCards'
import Footer from '../components/Footer'
import PageRibbon from '../components/PageRibbon'
import Payments from '../components/Payments'

const Courses = () => {
  return (
    <>
        <PageRibbon pageTitle="Courses"/>
        <CourseCards />
        <Payments />
        <Footer />
    </>
  )
}

export default Courses