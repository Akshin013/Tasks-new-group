import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";

const Main4 = () => {
    const products = "http://localhost:3000/productsMain4"
    const [productsD, setProductsD] = useState([])
    useEffect(()=>{
    axios.get(products).then(({data})=>{
        console.log(data);
        setProductsD(data)
    console.log(productsD);
        
    })
    console.log(products);
    
    },[])
    console.log(productsD);

    const likeChange = ({id})=>{
        console.log(id);
        axios.get(products+"/"+id).then
        console.log(products+"/"+id);
        
    }

    return (
        <div className='w-full mt-16'>
            <div className='w-[80%] h-fit m-auto flex flex-col'>
                <div className='flex gap-7'>
                    <a href='#' className='text-[18px] text-[#000000] font-medium'>New Arrival</a>
                    <a href='#' className='text-[18px] text-[#8B8B8B] font-medium'>Bestseller</a>
                    <a href='#' className='text-[18px] text-[#8B8B8B] font-medium'>Featured Products</a>
                </div> 
                <div className='grid w-full h-fit grid-cols-4 mt-6 gap-4'>
                    {productsD.map(({id,name,price,liked,image})=>{
                        return(
                            <div key={id} className='bg-[#F6F6F6] rounded-[9px] h-[430px] p-5 border-1 border-[#000000]'>
                                <div className='flex justify-end' onClick={() => likeChange({id})}>
                                    {liked? <FcLike size={30}/>:<IoIosHeartEmpty size={30} />}
                                </div>
                                <div className='flex justify-center'>
                                    <img src={image}/>
                                </div>
                                <p className='text-[16px] text-[#000000] font-medium'>{name}</p>
                                <p className='text-2xl text-[#000000] font-semibold text-center'>{price}</p>
                                <div className='flex justify-center'>
                                    <button className='bg-[#000000] rounded-[8px] w-28 h-12 text-[14px] cursor-pointer text-[#FFFFFF]'>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main4
