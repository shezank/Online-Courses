import { useState } from 'react'
import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import Headers from './Components/Headers/Headers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts, setCarts] = useState([]);
  const [hours, setHours] = useState(0);
  const [prices, setPrices] = useState(0);

  const handlerCartClick = (cart) => {

    const newHours = hours + cart.hours;
    const isExist = carts.find(item => item.id === cart.id);
    if (isExist) {
      return toast.warning('Already Added')
    }
    else if (newHours > 20) {
      return toast.error('Not Enough Remiaining Hours');
    }
    else {
      const newCarts = [...carts, cart];
      setCarts(newCarts);
      setHours(newHours);
      toast.success('Successfully Add Your Course')
    }

    const newPrice = (prices + cart.price).toFixed(2);
    const pricesNumbers = parseFloat(newPrice)
    setPrices(pricesNumbers);

  }


  return (
    <>
      <Headers></Headers>
      <div className='lg:flex lg:gap-10 lg:mx-14 mx-5'>
        <Courses handlerCartClick={handlerCartClick}></Courses>
        <Carts carts={carts} hours={hours} prices={prices} ></Carts>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}

        ></ToastContainer>
      </div>
    </>
  )
}

export default App
