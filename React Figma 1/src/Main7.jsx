import React from 'react'

const Main7 = () => {
  return (
    <div className='h-screen w-screen mt-4 '>
        <div className='w-[50%] m-auto '>
            <h1 className='text-3xl font-light'>БЛОГ</h1>
        </div>

        <div className='w-[50%] m-auto mt-2.5 gap-6 flex justify-center'>
            <img className='w-3.5' src={'../public/main7-arr-l.png'}/>
            <img className='w-3.5' src={'../public/main7-arr-r.png'}/>
        </div>

        <div className='flex w-[50%] mt-4 justify-between m-auto'>
          <div className=''>
            <img className='w-[100%]' src={'../public/main7-grid-img1.png'}/>
            <p className='font-normal mt-2.5 text-[20px]'>НЕЛЬСОН ПИКЕ СТАЛ ПОБЕДИТЕЛЕМ ГРАНД-<br/>ФИНАЛА В ПОРТИМАНЕ</p>
            <p className='text-[14px] mt-2.5 font-normal'>Нельсон Пике-младший из Ansa Motorsports обеспечил возвращение <br/>титула Lamborghini Super Trofeo Grand Finals в Северную Америку <br/>впервые с 2017 года после победы и второе место в паре 50-минутных <br/>гонок на Autodromo Nacionale do Algarve в Портимане.Между тем, титул... <br/>Pro-Am был подорван, поскольку Брайан Ортис и Себастьян Карасо из...</p>
            <p>Читать подробнее...</p>
          </div>

          <div className=''>
              <img className='w-[100%]' src={'../public/main7-grid-img2.png'}/>
              <p className='font-normal mt-2.5  text-[20px]'>ГРАНД ФИНАЛ. ДЕНЬ 1 </p>
              <p className='text-[14px] mt-2.5 font-normal'>Утренний дождь означал, что мокрая гонка была объявлена ​​до старта, и <br/>перед большинством экипажей стоял выбор: использовать слики или <br/>мокрые шины. Большинство участников предпочли мокрую трассу, но <br/>поулист Спинелли начал гонку на сликах и сразу же поплатился за это. <br/>Huracan № 61 опустился вниз, заняв всего 28-е место, поскольку...</p>
              <p>Читать подробнее...</p>
          </div>
        </div>

        <div className='w-[50%] flex m-auto  mt-9 gap-18'>
          <div className='flex flex-col'>
            <div>
              <p className='mt-2 text-[12px] text-[#9F6B08] font-normal'>Чемпион Am</p>
              <p className='mt-2 text-[14px] font-bold'>Анджей Левандовски</p>
              <p className='mt-2 text-[14px] font-normal'>«Я очень доволен титулом, моей второй победой в Am и четвертой в Super <br/>Trofeo, мне очень приятно делать это в этом году, потому что уровень <br/>соревнований очень высок. Должен сказать, сегодня было довольно легко, <br/> так как я все время контролировал ситуацию».</p>
            </div>
            <div>
              <p className='mt-2 text-[12px] text-[#9F6B08] font-normal'>Обладатель кубка Lamborghini</p>
              <p className='mt-2 text-[14px] font-bold'>Жерар ван дер Хорст</p>
              <p className='mt-2 text-[14px] font-normal'>«Я очень доволен титулом, моей второй победой в Am и четвертой в Super <br/>Trofeo, мне очень приятно делать это в этом году, потому что уровень <br/>соревнований очень высок. Должен Обладатель кубка Lamborghini <br/>добавил: «Здорово выиграть титул, спустя четыре года после последнего...</p>
            </div>
          </div>
          <div>
            <img className='' src={'../public/main7-img.png'}/>              
          </div>
        </div>
    </div>
  )
}

export default Main7
