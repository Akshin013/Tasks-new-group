import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5501/db.json')
      .then(response => {
        setUsers(response.data);
        // console.log(id);
        
      })
      .catch(error => {
        console.error('Ошибка при получении пользователей:', error);
      });
  }, []);

  // const deleteFunc = (id) =>{
  //   // console.log(a);
  //   // console.log("asd");
  //     axios.delete(`http://127.0.0.1:5501/db.json/users/${id}`)
  //   .then(response => {
  //     console.log('Удалено успешно', response.data);
  //   })
  //   .catch(error => {
  //     console.error('Ошибка при удалении:', error);
  //   });
    
  // }
  console.log("http://127.0.0.1:5501/db.json/2");
  
    return (
    <div className=''>
      <input type='text'/>
      <button>
        Add
      </button>

<div bg-amber-600>
  
      <h1 className='text-xl font-bold mb-2'>Пользователи</h1>
      <div className='bg-amber-200 '>
        {users.map(user => (
          <div key={user.id} className='mb-1 flex justify-between border'>
            {user.name}
            {/* <button onClick={() => 
              axios.delete(`http://127.0.0.1:5501/db.json/user/${user.id}`)
            } className='bg-red-500 cursor-pointer m-1'>
              Delete
            </button> */}
            <button onClick={() =>
            
      axios.delete(`http://127.0.0.1:5501/db.json/${user.id}`)
    .then(response => {
      console.log('Удалено успешно', response.data);
    })
    .catch(error => {
      console.error('Ошибка при удалении:', error);
    })}
              
             className='bg-red-500 cursor-pointer m-1'>
              delete 
              </button>   
          </div>
        ))}
      </div>
</div>

    </div>
    )
  
}

export default Users
