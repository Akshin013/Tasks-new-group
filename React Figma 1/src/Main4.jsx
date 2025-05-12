import React from 'react'

const Main4 = () => {
  return (
    <div className='bg-[url(../public/main4-bg.jpg)] flex justify-between flex-col bg-no-repeat bg-cover h-screen w-screen '>
        <div className='flex w-[50%] m-auto mt-10'>
            <div>
                <h1 className='text-3xl font-light'>ТРЕК ПОРТИМАО</h1>
                <p  className='text-[14px] font-normal'>Autodromo Internacional do Algarve находится в одноименном регионе на <br/>юге Португалии, недалеко от города Портиман. Открытый в октябре 2008 <br/>года автогоночный комплекс является одним из самых современных в <br/>Европе, раскинувшись на площади около 300 гектаров среди холмов, <br/>окружающих португальский город, а длина самой трассы составляет <br/>4684 метра.</p>
            </div>
            <div></div>
        </div>
        
        <div className='w-[50%] m-auto'>
            <img src={'../public/main4-img.png'}/>
        </div>
    </div>
  )
}

export default Main4
