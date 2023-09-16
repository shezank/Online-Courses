
import PropTypes from 'prop-types';

const Course = ({ course, handlerCartClick }) => {
    const {img, course_name, price, hours, course_details } = course;

    return (
        <div className='p-3 rounded-xl bg-white space-y-4'>
            <div className='flex justify-center items-center'>
                <img src={img} alt="" />
            </div>
            <h1 className='text-xl pl-3 font-bold '>{course_name}</h1>
            <p className='text-gray-500 pl-3'>{course_details}</p>
            <div className='flex justify-between px-3'>
                <span className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    Price: ${price}</span> <span className='flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    Credit : {hours}hr</span>
            </div>
            <div className='text-center mt-4'>
                <button onClick={() => handlerCartClick(course)} className='bg-blue-500 text-white font-semibold px-20 py-4 rounded-xl text-xl w-full'>Click</button>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handlerCartClick: PropTypes.func
};

export default Course;