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
import { FiSearch } from 'react-icons/fi';
const Header = () => {
  return (
    <div className='w-full h-20'>
      <div className='h-full flex justify-between p-4 w-[80%] m-auto'>
        <div className='flex items-center'>
          <img className='' src='Images/Logo.png'/>
        </div>
<div class="relative">
  <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
    </svg>
  </span>
  <input className="pl-10 py-2 text-[14px] rounded w-full bg-[#F5F5F5]" type='text' placeholder='Search'/>
</div>        
        <div className='flex  text-lg items-center gap-16'>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Blog">Blog</Link>
        </div>
        <div className='flex gap-11'>
          <CiHeart  size={35}/>
          <Link to="/Basket">
          <SlBasket size={35}/>
          </Link>

          <CiUser   size={35}/>
        </div>
      </div>
    </div>
  )
}

export default Header
