import { useState } from 'react'
import Users from './Components/Common/Users'
import Navbar from './Components/Common/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Archive from './Pages/Archive'
import AddUsers from './Pages/AddUsers'
import EditUser from './Pages/Edit'
function App() {
  return(
    <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/Archive' element={<Archive/>}/>
      <Route path='/AddUsers' element={<AddUsers/>}/>
      <Route path='/Edit' element={<EditUser/>}/>
    </Routes>
    )

}

export default App
