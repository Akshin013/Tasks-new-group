import React from 'react'

const main2 = () => {
  return (
    <div className=' h-screen w-screen flex'>
      <div className=' w-[50%] m-auto mt-[70px]'>
        <div className=''>
            <h1 className='text-black   text-3xl'>СУПЕР ТРОФЕО МИРОВОЙ ФИНАЛ</h1>
        </div>
        <div className='flex gap-5 mt-[30px]'>
            <p className='text-black font-normal text-[14px]'>Мировой финал Lamborghini завершает каждый сезон Super Trofeo с 2013 <br/>года. Каждый год гонщики всех континентальных чемпионатов <br/>отправляются на разные трассы и принимают участие в двух 50-<br/>минутных спринтерских гонках, где определяется победитель в общем <br/>зачете. как чемпион мира Lamborghini. Мировой финал Lamborghini — это <br/>не только крупнейший гоночный уик-энд года, но и настоящий фестиваль <br/>автоспорта, который привлекает поклонников со всего мира.</p>
            <p className='text-black font-bold text-[14px]'>Парад владельцев, превью и развлечения в паддоке для болельщиков — <br/>это лишь некоторые из мероприятий, организованных в рамках <br/>мероприятия.</p>
        </div>
        <img src={'../public/main2-img.png'} className='w-full mt-10'/>
      </div>
    </div>
  )
}

export default main2
