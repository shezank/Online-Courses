
import PropTypes from 'prop-types';

const Course = ({course, handlerCartClick}) => {
    const {id, img, course_name, price, hours,course_details} = course;
    
    return (
        <div className='p-3 rounded-xl bg-white space-y-4'>
            <div className='flex justify-center items-center'>
            <img src={img} alt="" />
            </div>
            <h1 className='text-xl pl-3 font-bold '>{course_name}</h1>
            <p className='text-gray-500 pl-3'>{course_details}</p>
            <div className='flex justify-between px-3'>
                <span>Price: ${price}</span> <span>Credit : {hours}hr</span>
            </div>
            <div className='text-center mt-4'>
            <button onClick={()=>handlerCartClick(course, id)} className='bg-blue-500 text-white font-semibold px-20 py-4 rounded-xl text-xl w-full'>Click</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handlerCartClick: PropTypes.func
};

export default Course;