import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import links from './Links';
import BurgerMenu from './BurgeMenu';
// import burgerFunc from './burgerFunc';
// import { burger } from './burgerFunc';
// import burgerFunc from './burgerFunc';

const Header = () => {
    const eStartup = "eStartup"
    // eStartup[0].style.color="red"
    // console.log(eStartup);

    const [burgerS, setBurgerS] = useState(false)
    // burgerFunc()
    console.log(burgerS);
    
    // console.log(burger);
    
    // const burgerSet = ()=>{
    //     // setBurgerS(burger)
    //     console.log(burgerS);
        
    // }
 const burgerFunc = () => {
        console.log("asdf");
        setBurgerS(!burgerS)
        console.log(burgerS);
    }

    // const aa = () => {
    // if(burgerS){
    // <BurgerMenu/>
    //     // console.log("ASd");
        
    // }else{
    //     console.log("Asfd");
    // }
    // }
    // aa()
    //         <div className='gap-8  text-red-800 text-[18px] items-center md:bg-red-400  md:flex md:gap-3  sm:flex sm:bg-blue-700 sm lg:bg-amber-600  '>

  return (
    
    <div className='w-[80%] m-auto flex items-center justify-betw   een h-15 '>
        <div className='text-4xl flex items-center '>
            <span style={{ color: 'green' }}>{eStartup[0]}</span>
             {eStartup.slice(1)}        
        </div>
            <div className=" sm:flex">

            {links.map(({id,title,path})=>{
            return(
                <p key={id}>{title}</p>
            )
        })}
      </div>
      {burgerS? <BurgerMenu/>: <p>sssss</p>}
        <div className='block md:hidden w-4'>
            <button onClick={burgerFunc} className=''>
            <FontAwesomeIcon size='xl' icon={faBars} />
        </button>
        </div>
    </div>
  )
}

export default Header
