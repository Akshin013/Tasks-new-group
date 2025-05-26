import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Common/Navbar'
import axios from 'axios'

const AddUsers = () => {
  const users = "http://localhost:3000/users"
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [numberValue, setNomberValue] = useState('')
  // const [newUser, setNewUser] = useState({})
  const addF =()=>{
    console.log(nameI);
  }
  const nameChange = (event) => {
  setNameValue(event.target.value)
  }
  const emailChange = (event) => {
  setEmailValue(event.target.value)
  }
  const nomberChange = (event) => {
  setNomberValue(event.target.value)
  }
  // useEffect(() => {
  // console.log('Пользователь изменён:', newUser) 
  // }, [newUser])
  const handleSubmit = () => {
    console.log('name:',   nameValue)
    console.log('email:',  emailValue)
    console.log('nomber:', numberValue)
    console.log(nameValue);
    console.log(emailValue);
    console.log(numberValue);
    
    const userData = {
      "name": nameValue,
      "email": emailValue,
      "phone": numberValue
    }
    console.log(userData);
    
    axios.post(users, userData).then(response => {
    console.log('Пользователь добавлен:', response.data)
  })
  .catch(error => {
    console.error('Ошибка при добавлении:', error)
  })
  }
  
  return (
    <div className='flex'>
      <Navbar/>
      <div className=' w-full h-screen  p-20'>
        <div className='bg-gray-800 w-full h-full rounded-2xl flex'>
          <div className=' w-[30%] m-auto flex flex-col  mt-auto gap-5'>
            <input className='bg-white h-13 border-2 rounded-2xl' value={nameValue}   placeholder='name'   onChange={nameChange}   type='text'/>
            <input className='bg-white h-13 border-2 rounded-2xl' value={emailValue}  placeholder='email'  onChange={emailChange}  type='text'/>
            <input className='bg-white h-13 border-2 rounded-2xl' value={numberValue} placeholder='nomber' onChange={nomberChange} type='number'/>
            <button onClick={handleSubmit} className='bg-white h-13 border-2 rounded-2xl'>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}
   
export default AddUsers
