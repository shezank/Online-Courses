
import { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types';

const Courses = ({handlerCartClick}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4'>
            {
                courses.map(course => <Course handlerCartClick={handlerCartClick} key={course.id} course={course} ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handlerCartClick: PropTypes.func
};


export default Courses;