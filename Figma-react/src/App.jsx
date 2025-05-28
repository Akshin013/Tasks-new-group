import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
const App =()=> {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboub' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>    
        <Route path='/Blog' element={<Blog/>}/>    
      </Routes> 
    </div>
  )
}

export default App
