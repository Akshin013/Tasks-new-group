import React from 'react'

const Main3 = () => {
  return (
    <div className='h-[50vh]'>
        <div className='w-[60%] h-[80%] m-auto grid grid-cols-2 grid-rows-1'>
            <div className='rounded-4xl'>
                <img src='../public/main3-img.png' className='h-full'/>
            </div>

            <div className='rounded-4xl flex flex-col'>
                <p className='font-normal text-[23px] text-[#242424] ml-3 text-center'>What’s inside each box?</p>
                <p className='font-normal text-[16px] text-[#242424] ml-3'>✓ Easy-to-follow recipes with clear nutritional info</p>
                <p className='font-normal text-[16px] text-[#242424] ml-3'>✓ High-quality ingredients sourced straight from the farm</p>
                <p className='font-normal text-[16px] text-[#242424] ml-3'>✓ Convenient meal kits that fit perfectly in the fridge</p>
                <p className='font-normal text-[16px] text-[#242424] ml-3'>✓ A fun cooking experience that makes you feel unstoppable</p>
                <a className='font-normal text-[16px] text-[#067A46] ml-3' href='#'>✓ Innovative packaging designed to reduce waste</a>
                <button className='bg-[#067A46] cursor-pointer h-12 rounded-[4px] w-[90%] m-auto'>
                    View our plans
                </button>
            </div>
        </div>
    </div>
  )
}
export default Main3
