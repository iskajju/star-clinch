import React from 'react'

const Gallary = () => {
  return (
    <>
    <div className='my-[40px] flex'>
      <div className='flex items-center rounded-sm shadow-[#ccc] shadow-sm p-[5px] h-[42px] w-[107px] ' >
        <img className='h-[33px] w-[32px] mr-[5px] ' src="https://starclinch.com/static/mobile/images/profile/gallery_icon.svg" alt="" />
        <p className=' text-sm text-[#000] font-medium '>Gallery</p>
      </div>
    </div>
      <div className='flex items-center justify-center ' >
      <button className='text-[15px] font-bold w-[300px] rounded-[20px] h-[42x] header-button p-[8px]'>See Price And Book </button>
      </div>
    </>
  )
}

export default Gallary
