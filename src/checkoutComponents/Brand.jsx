import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Brand = () => {
    return (
        <div className='flex justify-between px-[15px] mb-[50px] ' >
            <div className=' max-w-[41.666667%]' >
                <h3 className='text-[28px] text-[#333] font-medium mb-[14px] ' >Why StarClinch</h3>
                <div className='flex mb-[12px] '>
                    <CheckCircleIcon className=' h-[16px] w-[16px] ' />
                    <p className='pl-[10px] text-[#212529] text-[16px]  '>
                        Reliable Booking Partner - 10K+ bookings in the last 8 years
                    </p>
                </div>
                <div className='flex mb-[12px] '>
                    <CheckCircleIcon className=' h-[16px] w-[16px] ' />
                    <p className='pl-[10px] text-[#212529] text-[16px]  '>

                        ONLY VC funded Entertainment startup
                    </p>
                </div>
                <div className='flex  mb-[12px]'>
                    <CheckCircleIcon className=' h-[16px] w-[16px] ' />
                    <p className='pl-[10px] text-[#212529] text-[16px] '>
                    Follow ESCROW model
                    </p>
                </div>
                <div className='flex mb-[12px]'>
                    <CheckCircleIcon className=' h-[16px] w-[16px] ' />
                    <p className='pl-[10px] text-[#212529] text-[16px] '>
                   Leverage the TECH; Hence, don't overcharge
                    </p>
                </div>
                <div className='flex mb-[12px]'>
                    <CheckCircleIcon className=' h-[16px] w-[16px] ' />
                    <p className='pl-[10px] text-[#212529] text-[16px] '>
                   
Specialized in CORPORATE Events
                    </p>
                </div>
            </div>

            <div className=' max-w-[50%] ' >
                <h3 className='text-[28px] text-[#333] font-medium ' >Brands we've worked with</h3>
                <div id='fluid' className=' lg:h-[500px] overflow-hidden' >
                <img src="https://stcdn.starclinch.in/images/home/our_brand_logos_new.svg" alt="" />

                </div>
            </div>
        </div>
    )
}

export default Brand
