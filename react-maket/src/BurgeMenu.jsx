import React, { useState } from 'react'
import links from './Links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
// import burgerFunc from './burgerFunc';
// import { burger } from './burgerFunc';
const burgerMenu = () => {
  const [bur, setBur] = useState(false)
  
  const setBurg=()=>{
    setBur(!bur)
    console.log(bur);
    console.log("daa");
    
  }
  //  ТУТ МОЖНО СДЕЛАТЬ ФУНК КОТОРА ЯМЕНЯЕТ БУРГ
  return ( 
    
    <div>

       <div className='bg-red-700 w-screen h-screen    m-auto '>
       <button onClick={setBurg} className='w-full h-full'>
            <FontAwesomeIcon size='xl' icon={faBars} />
      </button> 
    {links.map(({id,title,path})=>{
      <p>{title}</p>
    })}
    </div>
    </div>
  )
  
}

export default burgerMenu
