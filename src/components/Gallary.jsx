import React from 'react'
import ImageGallary from './ImageGallary'
import { Link } from 'react-router-dom'

const Gallary = () => {
  return (
    <>
      <div className='my-[40px] flex'>
        <div className='flex items-center rounded-md shadow-[#9e9e9e40] shadow-md p-[5px] h-[42px] w-[107px] ' >
          <img className='h-[33px] w-[32px] mr-[5px] ' src="https://starclinch.com/static/mobile/images/profile/gallery_icon.svg" alt="" />
          <p className=' text-sm text-[#000] font-medium '>Gallery</p>
        </div>
      </div>
      <ImageGallary />
      <div className='flex items-center justify-center mt-[50px] ' >

        <Link to="/cart/checkout" >
          <button className='text-[15px] font-bold w-full md:w-[300px] rounded-[20px] h-[42x] header-button p-[8px]'>See Price And Book </button>

        </Link>
      </div>
    </>
  )
}

export default Gallary
