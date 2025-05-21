import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
const Main1 = () => {
  return (

    <div className='bg-gray-100 w-full h-screen flex flex-col sm:w-screen sm:h-screen absolute'>
      <div className='grid grid-cols-1 w-[80%] h-[40vh  ] m-auto mt-10 md:grid md:grid-cols-2'>
        <div className='rounded-3xl '>
          <h1 className='text-4xl font-semibold ml-13 mt-18'>eStartup</h1>
          <p className='text-gray-900 ml-13 mt-6'>Sed aytem laudantiun dolores. Voluptatem itaque ea consequatur eveniet. <br />Eum quas beatae cumque eum quaerat</p>
          
          <div className='flex w-auto h-12 ml-13 mt-6 gap-4 items-center'>
            <button className='rounded-4xl w-[160px] cursor-pointer h-full'>Get Started</button>
            <div className='flex gap-2  '>
              <FontAwesomeIcon icon={faCirclePlay} size='xl' style={{ color: '#028b02' }} />
              <p>Watch Vido</p>
            </div>
          </div>
        </div>

        <div className='rounded-3xl flex items-center justify-center'>
          <img className='h-full' src='../public/main1-img.jpg'/>
        </div>
      </div>

      <div className='w-[80%] m-auto grid h-[40vh] gap-5  sm:grid-cols-2 md: grid-cols-1 lg:grid-cols-4'>
        <div className='bg-white flex justify-center items-center '>
          <div>
            <img src='../public/main1-img1.jpg'/>
            <p>Lorem Impsu</p>
          </div>
        </div>

        <div className='bg-white flex justify-center items-center'>
          <div>
            <img src='../public/main1-img2.jpg'/>
           <p>Sed ut perspiciatis</p>
          </div>        
        </div>

        <div className='bg-white flex justify-center items-center'>
          <div>
            <img src='../public/main1-img3.jpg'/>
            <p>Magni Dolores</p>
          </div> 
        </div>

        <div className='bg-white flex justify-center items-center'>
          <div>
            <img src='../public/main1-img4.jpg'/>
            <p>Nemo Enim</p>
          </div> 
        </div>

      </div>
    </div>
  )
}

export default Main1
