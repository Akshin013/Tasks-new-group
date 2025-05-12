import React from 'react'

const Main1 = () => {
  return (
    <div className='bg-[url(../public/bg-main1.jpg)] bg-center bg-no-repeat bg-cover min-w-screen min-h-screen '>
      <div className='bg-[#D9D9D900] h-20 m-auto w-[70%] flex justify-between '>
          <div className=' w-[40%] flex align-sub gap-10'>
              <a className='mt-5' href='#'>О гонке</a>
              <a className='mt-5' href='#'>Трек</a>
              <a className='mt-5' href='#'>Lamborghini Super trofeo</a>
              <a className='mt-5' href='#'>Новости</a>
          </div>
          <div className=' w-[20%] flex justify-center'>
              <img src={'../public/Logo.svg'} alt="BigCo Inc. logo" className=' h-[150%] mt-2.5'/>
          </div>
          <div className=' w-[40%]   flex gap-10'>
              <a className='mt-5' href='#'>Купить билеты</a>
              <a className='mt-5' href='#'>Смотреть онлайн</a>
              <a className='mt-5' href='#'>Контакты</a>
          </div>
      </div>

      <div className='w-[60%] m-auto  text-center mt-10 '>
        <h1 className='text-[76px] font-normal text-[#040404]'>LAMBORGHINI SUPER TROFEO</h1>
        <h2 className='text-[48px] font-normal text-[#040404]'>Гранд-финал 2022</h2>
        <h2 className='text-[34px] font-normal text-[#9F6B08]'>3-6 ноября</h2>
        <hr className='w-[35%] m-auto mt-2'/>
        <h1 className='text-[15px] font-normal text-[#363636] mt-2'>автодром Портимао,Португалия</h1>
      </div>
      <div className=' w-[50%] m-auto'>
      <img  src={'../public/main1-arrow.png'} className='h-9 w-9 m-auto mt-[500px]'/>
      </div>
    </div>
  )
}

export default Main1
