
import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';
import { toast } from 'react-toastify';

const Carts = ({ carts, hours, prices}) => {

    const remaing = 20 - hours;
    const defualtReaming = 0; 
    return (
        <div className='lg:w-1/4 bg-white p-4 space-y-3 rounded-xl h-min lg:m-0 my-10'>
            <h1 className='text-blue-500 text-lg font-bold'>Credit Hour Remaining {remaing > 0? remaing :  toast.warning("Credit Hour Remaining 0") && defualtReaming    } hr</h1>
            <hr />
            <div>
                <h2 className='text-2xl font-bold'>Course Name</h2>
                <div>
                    {
                        carts.map((cart, idx) => <Cart key={idx} id={idx} cart={cart}></Cart>)
                    }
                </div>
            </div>
            <hr />

            <p className='text-gray-400 font-medium'>Total Credit Hour : {hours}</p>
            <hr />
            <h3 className=' text-gray-500 font-semibold text-xl'>Total Price : {prices} USD</h3>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array.isRequired,
    prices: PropTypes.number,
    hours: PropTypes.number.isRequired

};

export default Carts;