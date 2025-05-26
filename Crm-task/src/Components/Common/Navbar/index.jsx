import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-800 h-screen w-[20%] flex flex-col  justify-center gap-3 text-3xl'>
      <Link className='bg-white w-1/2 rounded-2xl text-center'  to="/">Users</Link>
      <Link className='bg-white w-1/2 rounded-2xl text-center'  to="/AddUsers">Add user</Link>
      <Link className='bg-white w-1/2 rounded-2xl text-center'  to="/Archive">Archive</Link>
      <Link className='bg-white w-1/2 rounded-2xl text-center'  to="/Edit">Edit</Link>
    </div>
  )
}

export default Navbar
