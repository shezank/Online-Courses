import './App.css'
import Carts from './Components/Carts/Carts'
import Courses from './Components/Courses/Courses'
import Headers from './Components/Headers/Headers'

function App() {


  return (
    <>
      <Headers></Headers>

      <div className='flex gap-10 mx-20'>
        <Courses></Courses>
        <Carts></Carts>
      </div>
    </>
  )
}

export default App
