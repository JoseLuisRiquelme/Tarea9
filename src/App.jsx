import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './assets/comps/Menu';
import Slider from './assets/comps/Slider';
import Pilares from './assets/comps/Pilares';
import Footer from './assets/comps/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Slider/>
      <Pilares/>
      <Footer/>
  
    </>
  )
}

export default App

