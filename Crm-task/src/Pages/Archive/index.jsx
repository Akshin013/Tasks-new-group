import React, { useEffect, useState } from 'react'
import axios from 'axios';  
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Common/Navbar'

const Archive = () => {
  const archiveD = "http://localhost:3000"
  const [archive, setArchive] = useState([])
  useEffect(()=>{
    console.log(archiveD+"/"+"archive");
    axios.get(archiveD+"/"+"archive").then(({data})=>{
      
        console.log(data);
        setArchive(data)
        // console.log(archiveD);
         
    })
    },[])
 console.log(archive); 
    return (
    <div className='flex'>
      <Navbar/>
      <div className='grid grid-cols-4 w-full h-fit p-20 gap-5'>
  {archive.map(({id,name,email,phone})=>{
        // console.log(id);
        
        return(
          <div key={id} className='bg-gray-800  rounded-2xl text-white p-3'>
            <p>name: {name}</p>
            <p>email: {email}</p> 
            <p>phone number: {phone}</p> 
           <div className='flex gap-3.5'>       
          <button className='bg-yellow-400 border-1 cursor-pointer rounded-sm'>edit</button>
          <button onClick={()=>archiveF(id)} className='bg-red-700 border-1 cursor-pointer rounded-sm'>delete</button>
          </div>
          </div>
        )})}
      </div>
    </div>
  )
}

export default Archive
