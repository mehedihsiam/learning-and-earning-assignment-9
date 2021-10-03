import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'
const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container">
            <h2 className="mt-5 text-center title">Our Courses</h2>
            <div className="course-container">
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;