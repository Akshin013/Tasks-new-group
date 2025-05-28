import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../../../Pages/Home';
import Contact from '../../../Pages/Contact';
import About from '../../../Pages/About';

const Header = () => {
  return (
    <div className='w-full h-20'>
      <div className='bg-amber-600 h-full flex justify-between p-4 w-[80%] m-auto'>
        <div className='flex items-center'>
          <img className='' src='Images/Logo.png'/>
        </div>
        <input  className='bg-amber-800'/>
        <div className='flex bg-amber-700 text-lg items-center gap-16'>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Blog">Blog</Link>
        </div>
        <div className='flex gap-11 bg-amber-900'>
          <CiHeart  size={35}/>
          <SlBasket size={35}/>
          <CiUser   size={35}/>
        </div>
      </div>
    </div>
  )
}

export default Header
