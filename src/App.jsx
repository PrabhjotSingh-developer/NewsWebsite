import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import NewsBoard from './Components/NewsBoard/NewsBoard.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  const [menubar,setMenubar]= useState(false);
  const [category,setCategory] = useState("General")
  useEffect(()=>{},[category])
  return (
    <div className=''>

      <Navbar menubar={menubar} setMenubar={setMenubar} setCategory={setCategory}/>
      
     <div className={`${menubar?"hidden":""}`}>

      <NewsBoard category={category}/>
      <Footer/>
     </div>
      
    </div>
  
  )
}

export default App
