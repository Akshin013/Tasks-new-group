import React from 'react'

const Main1 = () => {
  return (
    <div className='h-[85vh] flex justify-center bg-[url(../public/main1-bg.jpg)]  bg-no-repeat bg-contain'>
      <div className='mt-48 flex flex-col'>
        <h1 className='text-center font-normal text-4xl'>Take the stress <br/> out of mealtime</h1>
        <p className='text-center mt-3 font-normal text-[20px]'>America's Most Popular Meal Kit</p>
        <button className='bg-[#067A46] rounded-sm text-white text-[16px] font-semibold h-12 w-36 cursor-pointer m-auto'>
          View our plans
        </button>
      </div>
    </div>
  )
}

export default Main1 
