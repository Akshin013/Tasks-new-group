import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Users = () => {
  const [usersD, setUsersD] = useState([])
  
    const users = "http://localhost:3000/users"
  useEffect(()=>{
    console.log(users);
    axios.get(users ).then(({data}) => {
      setUsersD(data)
      console.log(usersD);

      // console.log(data);
        
      // data.forEach(({id, firstName}) => {
      //   // console.log(id);
      //   // console.log(firstName);
      // setUsersD(id)
      // console.log(usersD);
      
      // });
    })

  },[])

  const editUser = (id, firstName) => {
    console.log(id);
    
  }
 const [inputValue, setInputValue] = useState("");
    const handleSubmit = () => {
    console.log("Значение:", inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    axios.post(users).then(res => console.log(res.data))
  };
  const deleteUser = (id) => {
    console.log(id);
    // console.log(users +"/"+id);
    console.log(users +"/"+"is56789d");
    
    axios.delete(users+"/"+id).then((res) => {
        // alert("Silindi")
        // const _users = usersD.filter((user) => user.id !== id)
        // setUsersD(_users)
        console.log(res);
        
      }) 
    // console.log("dsf");
    // const isAgree = confirm("Da?")
    // if(isAgree){
    //   axios.delete(usersD+id).then((res) => {
    //     alert("Silindi")
    //     const _users = usersD.filter((user) => user.id !== id)
    //     setUsersD(_users)
    //   }) 
    // }
  }
  // console.log(usersD);
  return (
    <div className='w-[60%] m-auto border-2 rounded-sm text-center'>
      USERS
      <div className='flex w-1/2 m-auto gap-3 justify-center'>
          <input type='text' value={inputValue} className='border-1 rounded-sm'  onChange={handleChange}/>
          <button className='bg-green-700 text-white p-1 border-1 cursor-pointer rounded-sm' onClick={handleSubmit}>
            Add
          </button>
         
      </div>
      <div className=' flex flex-col gap-4 p-2'>
        { 
          usersD.map(({id, firstName})=>{
            return(
              <div className='border-2 flex p-2 justify-between' key={id}>
                <p>{firstName}</p>
                <div className='flex gap-3.5'>
                  <button className='bg-yellow-300 p-1 border-1 cursor-pointer rounded-sm' onClick={()=>editUser(id)}>Edit</button>
                  <button className='bg-red-800 text-white p-1 border-1 cursor-pointer rounded-sm' onClick={()=>deleteUser(id)}>Delete</button>
                </div>
                
              </div>
              )
          })}
          
      </div>
    </div>
  )
}

export default Users
