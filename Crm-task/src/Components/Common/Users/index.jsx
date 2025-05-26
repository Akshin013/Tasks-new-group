import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom'
import EditUser from '../../../Pages/Edit';

const Users = () => {
    const [users, setUsers] = useState([])
    const [archive, setArhive] = useState([])

  const usersD = "http://localhost:3000" 
    useEffect(()=>{
    // console.log(usersD);
    axios.get(usersD+"/"+"users").then(({data})=>{
        // console.log(data);
        setUsers(data)    
    })
    },[])
    // console.log(users);
    
    const archiveF = (id)=>{
      const userUrl = `${usersD}/users/${id}`
      const archiveUrl = `${usersD}/archive`

      axios.get(userUrl).then(({data})=>{
        console.log('nayden', data);
        return axios.post(archiveUrl, data).then(()=>{
          console.log('dobavlen', data);
        
        return axios.delete(userUrl)
      })
      }).then(()=>{
        console.log('udalen');
      }).catch(error=>{
        console.log('error', error);
      })

    }
  return (
    <div className='flex'>
      <Navbar/>
      <div className='grid grid-cols-4 w-full h-fit p-20 gap-5'>
      {users.map(({id,name,email,phone})=>{
        // console.log(id);
        
        return(
          <div key={id} className='bg-gray-800  rounded-2xl text-white p-3'>
            <p>name: {name}</p>
            <p>email: {email}</p> 
            <p>phone number: {phone}</p> 
            <div className='flex gap-3.5'>       
          <button className='bg-yellow-400 border-1 cursor-pointer rounded-sm'>edit</button>
          <button onClick={()=>archiveF(id)} className='bg-red-700 border-1 cursor-pointer rounded-sm'>delete</button>
                <Link className='bg-white w-1/2 rounded-2xl text-center'  to="/Edit">Edit</Link>
                
          </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Users

//  СДЕЛАЛ ТАК ЧТО ВЫВДЯТСЯ ЮСЕРЫ ИЗ ДАТЫ 
