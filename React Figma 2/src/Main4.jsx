import React from 'react'

const Main4 = () => {
  return (
    <div className='bg-red-800 w-full h-[50vh]'>
        <div className='w-[60%] bg-blue-900 m-auto'>
            <p className='font-normal text-3xl  text-[#242424] text-center'>Over 30+ fresh recipes every week</p>
            <p className='font-normal text-[16px] text-[#242424] text-center'>Easy meals designed by professional chefs and nutritionists</p>
        </div>
        <div className='bg-amber-300 w-[60%] m-auto flex gap-5'>
            <div className=''><img src='../public/main4-btn-l.png'/></div>
            <div className=''><img src='../public/main4-img1.png'/></div>
            <div className=''><img src='../public/main4-img2.png'/></div>
            <div className=''><img src='../public/main4-img3.png'/></div>
            <div className=''><img src='../public/main4-img4.png'/></div>
            <div className=''><img src='../public/main4-btn-r.png' className=''/></div>
        </div>
    </div>
  )
}

export default Main4
