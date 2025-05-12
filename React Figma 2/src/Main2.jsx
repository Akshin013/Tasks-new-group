import React from 'react'

const Main2 = () => {
  return (
    <div className='h-[50vh] w-full'>
        <div className='m-auto text-center w-[60%] h-[80%]'>
            <p className='font-normal text-3xl '>Why HelloFresh?</p>
        
            <div className='mt-9 grid grid-cols-4'>
                <div className='h-full w-full'>
                    <img src='../public/main2-img1.png' className='h-full'/>
                    <p className='text-[16px] font-semibold text-[#242424]'>No skimpin’ on the chicken!</p>
                    <p className='text-[16px] font-normal text-[#242424]'>Or steak, or fish, or plant <br/>protein.</p>
                </div>

                <div className='h-full w-full'>
                    <img src='../public/main2-img2.png' className='h-full'/>
                    <p className='text-[16px] font-semibold text-[#242424]'>No commitment whatsoever</p>
                    <p className='text-[16px] font-normal text-[#242424]'>Skipping weeks or cancelling <br/>is super easy.</p>
                </div>

                <div className='h-full w-full'>
                    <img src='../public/main2-img3.png' className='h-full'/>
                    <p className='text-[16px] font-semibold text-[#242424]'>The most 5-star reviews</p>
                    <p className='text-[16px] font-normal text-[#242424]'>Our huge recipe selection <br/>wows week after week.</p>
                </div>

                <div className='h-full w-full'>
                    <img src='../public/main2-img4.png' className='h-full'/>
                    <p className='text-[16px] font-semibold text-[#242424]'>Fresh and affordable</p>
                    <p className='text-[16px] font-normal text-[#242424]'>Chef-created deliciousness <br/>from $7.49 per meal.</p>
                </div>
            </div>
        </div>
            <div className='flex justify-center'>
                <button className='bg-white text-[#067A46] h-12 w-32 cursor-pointer border-2 border-[#067A46] rounded-[4px]'>
                    Get started
                </button>
            </div>
    </div>
  )
}

export default Main2
