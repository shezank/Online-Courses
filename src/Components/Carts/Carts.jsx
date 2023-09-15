
import PropTypes from 'prop-types';

const Carts = cart => {
    return (
        <div className='w-1/4 bg-white p-4 space-y-3 rounded-xl'>
            <h1 className='text-blue-500 text-xl font-bold'>Credit Hour Remaining 7 hr</h1>
            <hr />
            <h2 className='text-2xl font-bold'>Course Name</h2>
            <hr />
            <p className='text-gray-400 font-medium'>Total Credit Hour : 13</p>
            <hr />
            <h3 className=' text-gray-500 font-semibold text-xl'>Total Price : 48000 USD</h3>


        </div>
    );
};

Carts.propTypes = {
    cart: PropTypes.array,
    
};

export default Carts;