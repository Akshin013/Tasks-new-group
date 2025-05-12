import React from 'react'

const Header = () => {
  return (
    <div className=''>
        <div className='h-12 flex justify-between p-[16px] w-full '>
            <div className='flex gap-6'>
                <div>
                    <img src={'../public/logo.png'}/>
                </div>
                <div className='font-semibold flex gap-6'>
                    <a href='#'>Our Plans</a>
                    <a href='#'>How It Works</a>
                    <a href='#'>Our Menus</a>
                    <a href='#'>Gift Cards</a>
                    <a href='#'>Sustainability</a>
                    <a href='#'>Thanksgiving Box</a>
                </div>
            </div>
            <div className=''>
                <button className='text-[#067A46] w-24 h-10 rounded-sm cursor-pointer border-[2px] '>    
                    Log in
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
