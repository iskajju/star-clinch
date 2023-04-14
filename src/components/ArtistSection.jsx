import React, { useState } from 'react'
import ArtistProfile from './ArtistProfile'

const ArtistSection = () => {
    const [scroll,setScroll]= useState(false)
    const rightScroll =()=>{
        setScroll(true)
        console.log("true")
        
    }
    const leftScroll = ( ) =>{
        setScroll(false)
        console.log("false")

    }
  return (
    <div>
    <div className='mt-[50px] mb-[30px] flex w-full '>
      <div className='flex items-center rounded-sm px-[15px] ' >
        <img className='h-[33px] w-[32px] mr-[15px] ' src="https://stcdn.starclinch.in/mobile/images/profile/similar_artist_icon_v2.svg" alt="" />
        <p className=' text-[20px] text-[#000] font-medium '>Similar Artists you may like</p>
      </div>
    </div>

    <div className='flex items-center overflow-hidden ' >
        <div className={`flex min-w-[100%] transition-all duration-500 ${scroll ? "translate-x-[-50%]" : "translate-x-[0%]"}   `}  >

        
        <div className='flex justify-around  min-w-[100%] '>

       <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/godse.jpg" name="Mugdha Godse 2" city='Mumbai' />
       <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/a11fed94-8b07-412d-879e-f944d29c19a3.jpg" name="Aadil Chahal" city='Mumbai' />
       <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aafreen-vaz-profile.jpg" name="Aafreen Vaz" city='Mumbai' />
       <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aartii-nagpal-profile.jpg" name="Aartii Nagpal" city='Mumbai' />
        </div>
        <div className='flex justify-around min-w-[50%]  ' >
       <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aashi-sharma-profile.jpg" name="Aashi Sharma" city='Mumbai' />
       <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/Aatish-Bhattacharya2-750x450.jpg" name="Aatish Bhattacharya" city='Mumbai' />
        </div>

       
        </div>

    </div>
    <div className=' flex items-center justify-center gap-2 mt-[17px] mb-[50px] '>
        <button onClick={leftScroll} className={`h-[10px] w-[10px]  rounded-full  ${scroll ? "bg-[#ccc]" : "bg-black" } `}></button>
        <button onClick={rightScroll} className={`h-[10px] w-[10px]  rounded-full ${scroll ?  "bg-black ": "bg-[#ccc]" } `}></button>
    </div>

    </div>
  )
}

export default ArtistSection
