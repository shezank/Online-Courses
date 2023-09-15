
import PropTypes from 'prop-types';

const Cart = ({cart, id}) => {
const {course_name} = cart;

    return (
        <div>
            <ol>
                <li className='text-gray-500 text-lg'>{id + 1}. {course_name}</li>
            </ol>
            
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
};

export default Cart;