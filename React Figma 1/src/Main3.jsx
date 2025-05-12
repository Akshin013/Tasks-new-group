import React from 'react'

const Main3 = () => {
  return (
    <div className='h-screen w-screen'>
        <div className='flex w-[50%] m-auto  justify-between'>
            <div className='flex flex-col gap-7'>
                <h1 className='text-3xl font-light'>КОМАНДЫ СУПЕР ТРОФЕО</h1>
                <p  className='text-[14px] font-normal'>Все автомобили, которые участвуют в чемпионатах <br/>Lamborghini Super Trofeo, управляются частными <br/>командами, которые используют свой опыт для тонкой <br/>настройки их для водителей. Для каждого<br/> континентального чемпионата Lamborghini Super Trofeo <br/>существуют рейтинги пилотов и команд.</p>
                <p  className='text-[14px] font-normal'>Пилоты и команды, участвующие в континентальной <br/>серии, каждый год соревнуются друг с другом в Гранд <br/>Финале Lamborghini, мероприятии, которое завершает <br/>спортивный сезон Super Trofeo. Две квалификационные <br/>сессии и две гонки определяют чемпионов мира серии. <br/>Каждый год Гранд-финал проводится на разных трассах, и <br/>в прошлых выпусках он уже затрагивал европейский, <br/>азиатский и американский континенты.</p>
            </div>
            <div className=''>
                <img src={'../public/main3-img.png'}/>
            </div>
        </div>  
        <div className='flex w-[50%] m-auto mt-20 justify-between'>
            <div className='flex flex-col gap-7 '>
               <h1 className='text-3xl font-light'>календарь сезона Super <br/>Trofeo Europe 2022 года</h1>     
               <h2 className='text-[14px] font-normal'>14 в истории серии GT, посвященный автомобилям Lamborghini <br/>Huracan Super Trofeo Evo. Шесть этапов, в общей сложности 12 <br/>гонок и 600 минут соревнований будут разыграны на <br/>некоторых из самых престижных трасс Европы.</h2>     
            </div>
            <div className='flex  gap-2.5'>
                <hr/>


                <div>
                    <p className=''>Этап 1:</p>
                    <p className=''>Этап 2:</p>
                    <p className=''>Этап 3:</p>
                    <p className=''>Этап 4:</p>
                    <p className=''>Этап 5:</p>
                    <p className=''>Этап 6:</p>
                    <p className=''>Этап 7:</p>
                </div>
                <div>
                    <p className=''>Имола (Италия)</p>
                    <p className=''>Ле-Кастелле (Франция)</p>
                    <p className=''>Мизано (Италия)</p>
                    <p className=''>Спа-Франкоршам (Бельгия)</p>
                    <p className=''>Барселона (Испания)</p>
                    <p className=''>Портимао (Португалия)</p>
                    <p className=''>Портимао (Португалия)</p>
                </div>
                <div>
                    <p className=''>1-3 апреля</p>
                    <p className=''>3–5 июня</p>
                    <p className=''>1–3 июля</p>
                    <p className=''>29–30 июля</p>
                    <p className=''>30 сентября–2 октября</p>
                    <p className=''>3-4 ноября</p>
                    <p className=''>5-6 ноября</p>
                </div>


                <hr/>

            </div>
        </div>
    </div>
  )
}

export default Main3
