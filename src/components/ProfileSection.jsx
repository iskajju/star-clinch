import React from 'react'


export default function ProfileSection({ photo }) {
    return (
        <div className='flex flex-col md:flex-row pt-[15px] pb-[15px] ' >
            {/* profile Image */}
            <div className='w-full md:w-[389px] ' >
                <img className='h-full w-full rounded-t-[10px] mb-[56px] ' src={photo} alt="" />
            </div>
            {/* profile details */}
            <div className=' md:pl-[55px] md:pt-[62px] ' >
                <div>
                    <h2 className='text-[24px] text-[#343a40] font-medium leading-[29px] mb-[8px] ' >Ranbir Kapoor</h2>
                    <h3 className='text-[16px] text-[#6c757d] font-medium leading-[19px] mb-[8px] '>(CELEBRITY APPEARANCE)</h3>
                    <h4 className='text-[14px] text-[#6c757d] font-bold  leading-[17px] '>Mumbai, Maharashtra</h4>
                </div>
                <div>
                <button className='w-full text-[16px] font-bold md:w-[300px] rounded-[20px] h-[42x] mt-[25px] mb-[20px] header-button p-[7px]'>See Price And Book </button>
                <p className='text-[16px] text-[#212529] ' >The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor is one of the finest
                <br /> actors in Bollywood and is a true versatile performer</p>
                
                </div>
            </div>

        </div>
    )
}
