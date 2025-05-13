import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[35vh]  felx flex-col'>
        <div className='w-[60%] m-auto flex gap-24 mt-3'>
            <div className='flex flex-col'>
                <p className='text-[#242424] text-[16px] font-semibold'>HelloFresh</p>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Students</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Blog</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Recipes</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Hero Discounts</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Recipe Directory</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>California Supply Chains Act</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Delivery Options</a>
            </div>
            <div className='flex flex-col'>
                 <p className='text-[#242424] text-[16px] font-semibold'>Our company</p>
                 <a href='#' className='text-[#067A46] text-[14px] font-normal'>HelloFresh Group</a>
                 <a href='#' className='text-[#067A46] text-[14px] font-normal'>Sustainability</a>
                 <a href='#' className='text-[#067A46] text-[14px] font-normal'>Careers</a>
                 <a href='#' className='text-[#067A46] text-[14px] font-normal'>Press</a>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#242424] text-[16px] font-semibold'>Work with us</p>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Partner</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Influencers</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Affiliates</a>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#242424] text-[16px] font-semibold'>Contact us</p>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Help Center & FAQ</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Partnership Inquiries</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Corporate Sales</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Do Not Sell My Personal <br/>Information</a>
            </div>
        </div>
        <hr className='text-[#E4E4E4] mt-20'/>
        <div className='flex w-[60%] h-8 mt-9 m-auto justify-between'>
            <div className='flex gap-5'>
                <p className='text-[#242424] text-[14px] font-normal'>© HelloFresh 2022</p>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Terms and Conditions</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Privacy</a>
                <a href='#' className='text-[#067A46] text-[14px] font-normal'>Accessibility</a>
            </div>


            <div className='flex gap-2'>
                <div className='h-6 w-6 bg-[#1877F2] rounded-[100%]'>
                    <img src='../public/footer-img1.png'/>
                </div>
                <div className='h-6 w-6 bg-[#1DA1F2] rounded-[100%]'>
                    <img src='../public/footer-img2.png'/>

                </div>
                <div className='h-6 w-6 bg-[#E1306C] rounded-[100%]'>
                    <img src='../public/footer-img3.png'/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
