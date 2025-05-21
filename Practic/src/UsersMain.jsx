import React, { useEffect, useState } from 'react'
import axios from "axios";
const UsersMain = () => {
  const [user, setUser] = useState([])
  const users = "http://localhost:3000/users"
  // console.log(users);
  // console.log("users");
  
  // useEffect(() => {
  //   axios.get(users).then(({data})=>{

  //     data.forEach(({id, name}) => {
  //         // console.log(id);
  //         console.log(name);
  //         // setUser(data)
  //         let a = id
  //         return(
  //           <p>{id}</p>
  //         )
  //     });      
  //   })
  // })
  
  const ff = () => {
    axios.get(users).then(({data})=>{

      data.forEach(({id, name}) => {
          // console.log(id);
          console.log(name);
          // setUser(data)
          let a = id
          return(
            <p>{id}</p>
          )
      }); 
  })
  
  return (
    <div className='bg-amber-900 h-9 w-6 '>
  
    </div>
  )
}

export default UsersMain
