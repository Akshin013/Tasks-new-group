import React from 'react'

const main5 = () => {
  return (
    <div className='bg-[#363636] h-screen flex flex-col justify-center gap-1 w-screen'>
      <div className='w-[50%] m-auto flex justify-between mt-16'>
        <div>
            <h1 className=' text-3xl font-light text-white'>СУПЕР ТРОФЕО ЭВО</h1>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-[14px] font-font-normal text-white'>Новый Huracán Super Trofeo EVO достигает еще больших высот, чем его <br/>прославленный предшественник, благодаря полностью переработанной <br/>аэродинамике. Huracán Super Trofeo EVO является идеальной стартовой <br/>площадкой для всех водителей, которые хотят начать карьеру в гонках <br/>класса GT.</p>
            <p className='text-[14px] font-font-normal text-white'>Huracán EVO — это эволюция самого успешного Lamborghini с двигателем <br/>V10. В результате тонкой настройки и усовершенствования <br/>существующих функций в сочетании с новыми конструктивными <br/>решениями, повышающими производительность, автомобиль <br/>выделяется своей способностью предугадывать и удовлетворять <br/>поведение, ожидания и желания водителя.</p>
        </div>
      </div>

    <div className='w-[40%] h-28 m-auto mt-[-400px] '>
        <img className='absolute ' src={'../public/main5-img1.png'}/>
        <img className='absolute mt-44 ml-56 ' src={'../public/main5-img2.png'}/>
        
    </div>

    <div className=' flex gap-7 w-screen justify-center text-white text-[14px] font-normal'>
            <div>
                <p>ПЕРЕМЕЩЕНИЕ <br/>5204 см³</p>
            </div>
            <div>
                <p>КРУТЯЩИЙ МОМЕНТ <br/>570 Нм при 6500 об/мин</p>
            </div>
            <div>
                <p>МОЩНОСТЬ (л.с.) / МОЩНОСТЬ (КВТ) <br/>620 л.с. при 8250 об/мин</p>
            </div>
            <div>
                <p>МАКС. СКОРОСТЬ <br/>325 км /ч</p>
            </div>
            <div>
                <p>0-100 КМ/Ч 2,9 с</p>                
            </div>
        </div>
    </div>
  )
}   

export default main5
