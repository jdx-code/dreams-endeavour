import React from 'react'
import CourseCards from '../components/CourseCards'
import PageRibbon from '../components/PageRibbon'

const Courses = () => {
  return (
    <>
        <PageRibbon pageTitle="Courses"/>
        <CourseCards />
    </>
  )
}

export default Courses