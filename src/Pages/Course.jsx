import React from 'react'
import Layout from '../Template/Layout'
import CourseCard from '../Components/CourseCard'
const Course = () => {
  return (
    <Layout>
        <h1>หลักสูตรที่เปิดสอน</h1>
        <hr />
        <CourseCard
        title="Basic React Native"
        Duration="5 day"
        Price={7500}
        />
        <CourseCard
        title="Power BI Dashboard"
        Duration="4 day"
        Price={5500}
        />
        <CourseCard
        title="UI Design with Figma"
        Duration="3 day"
        Price={5000}
        />
        <CourseCard
        title="Cross Platform with Flutter"
        Duration="5 day"
        Price={6500}
        />
    </Layout>
  )
}

export default Course