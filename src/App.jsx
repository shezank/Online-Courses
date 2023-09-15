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
  // const [remaing, setReming] = useState(20);

  const handlerCartClick = (cart, id) => {

    const isExist = carts.find(item => item.id === id);
   
    if(isExist){
     return toast.warning('Already Added')
    }
    else{
      const newCarts = [...carts, cart];
      setCarts(newCarts);
      toast.success('Add Successfull')
    }

    if(hours>= 20){
     return toast.warning('Total Cradit Hours Over');
    }
    else{
      const newHours = hours + cart.hours;
      setHours(newHours);
    }

    
    const newPrice = (prices + cart.price).toFixed(2);
    const pricesNumbers = parseFloat(newPrice)
    setPrices(pricesNumbers);


  }


  return (
    <>
      <Headers></Headers>
      <div className='flex gap-10 mx-20'>
        <Courses handlerCartClick={handlerCartClick}></Courses>
        <Carts carts={carts} hours={hours} prices={prices} ></Carts>
        <ToastContainer
        position="top-left"
        autoClose={2000}
        
        ></ToastContainer>
      </div>
    </>
  )
}

export default App
