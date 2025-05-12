import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-screen bg-[#363636] flex flex-col'>
        <div className=' w-[50%] m-auto grid grid-cols-2 mt-24'>
            <div className='flex flex-col'>
                <a href='#' className='text-[32px] text-white font-light'>КОНТАКТЫ</a>
                <a href='#' className='text-[16px] text-white font-bold mt-8'>ОБЩИЕ</a>
                <a href='#' className='text-[14px] text-white font-normal mt-6'>+(351) 282 405 600</a>
                <a href='#' className='text-[14px] text-white font-normal mt-5'>+(351) 282 405 697</a>
                <a href='#' className='text-[14px] text-white font-normal mt-5'>info@autodromodoalgarve.com</a>
                <a href='#' className='text-[16px] text-white font-bold mt-9'>БИЛЕТЫ</a>
                <a href='#' className='text-[14px] text-white font-normal mt-6'>+(351) 282 405 600</a>
                <a href='#' className='text-[14px] text-white font-normal mt-5'>tickets@autodromodoalgarve.com</a>
                <div className=''>

                </div>
            </div>

            <div>
                <a href='#' className='text-[16px] text-white mt-2 font-bold'>АДРЕС</a>
                <a href='#' className='text-[16px] text-white mt-6 font-normal'>Sitio do Escampadinho, Mexilhoeira Grande, 8500-148 Portimao, Portugal</a>
                <iframe className='mt-6' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac1801bc3262b5484c383654a1e56f5736a643e023566e51cff6947d5ff4899db&amp;source=constructor" width="480" height="400" frameborder="0"></iframe>
            </div>
        </div>
        
            <div className='w-[50%] m-auto flex justify-between '>
                <a href='#' className='font-normal text-white text-[14px]'>Design by Varvara Prokopchuk</a>
                <img className='' src={'../public/Logo.svg'}/>
                <a href='#' className='font-normal text-white text-[14px]'>Политика конфиденциальности</a>
            </div>
    </div>
  )
}

export default Footer
