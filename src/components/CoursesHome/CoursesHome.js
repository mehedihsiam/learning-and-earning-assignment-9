import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseHome from '../CourseHome/CourseHome';
import './CorsesHome.css'

const CoursesHome = () => {
    const [coursesHome, setCoursesHome] = useState([])
    useEffect(() => {
        fetch('coursesHome.Json')
            .then(res => res.json())
            .then(data => setCoursesHome(data))
    }, [])
    return (
        <div className="container">
            <h2 className="mt-5 text-center title">Our Courses</h2>
            <div className="course-container">
                {
                    coursesHome.map(courseHome => <CourseHome
                        key={courseHome.key}
                        course={courseHome}
                    ></CourseHome>)
                }
            </div>
            <Button className="btn btn-warning">
                <Link to='/courses' className='button-text'>See all Courses</Link>
            </Button>
        </div>
    );
};

export default CoursesHome;