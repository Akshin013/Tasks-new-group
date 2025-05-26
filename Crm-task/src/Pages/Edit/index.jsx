import React from 'react'
import Navbar from '../../Components/Common/Navbar'
const EditUser = (props) => {
  return (
    <div className='flex'>
      <Navbar/>
        <div className=' w-full h-screen p-20'>
            <div className='bg-gray-800 w-full h-full rounded-2xl flex'>
              <div className=' w-[30%] m-auto flex flex-col  mt-auto gap-5'>
                <input className='bg-white h-13 border-2 rounded-2xl'    placeholder='name'    type='text'/>
                <input className='bg-white h-13 border-2 rounded-2xl'   placeholder='email'   type='text'/>
                <input className='bg-white h-13 border-2 rounded-2xl'  placeholder='nomber'  type='number'/>
                <button  className='bg-white h-13 border-2 rounded-2xl'>Add</button>
              </div>
              <p> {props.name}</p>
            </div>
        </div>
    </div>
  )
}

export default EditUser
