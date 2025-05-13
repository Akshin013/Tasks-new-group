import React from 'react'

const Header = () => {
    const links = [
        {id:0, title:"Our Plans",        path:"#"},
        {id:1, title:"How It",           path:"#"},
        {id:2, title:"Our Menus",        path:"#"},
        {id:3, title:"Gift Cards",       path:"#"},
        {id:4, title:"Sustainability",   path:"#"},
        {id:5, title:"Thanksgiving Box", path:"#"}
    ]
    return (
    <div className=''>
        <div className='h-12 flex justify-between p-[16px] w-full '>
            <div className='flex gap-6'>
                <div>
                    <img src={'../public/logo.png'}/>
                </div>
                <div className='font-semibold flex gap-6'>
                    {links.map(({id,title,path})=>{
                        return(
                            <a key={title} href='{path}'>{title}</a>
                        )
                    })}
                </div>
            </div>
            <div className=''>
                <button className='text-[#067A46] w-24 h-10 rounded-sm cursor-pointer border-[2px] '>    
                    Log in
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header
