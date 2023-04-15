import React, { useState } from 'react'
import ArtistProfile from './ArtistProfile'

const ArtistSection = () => {
  const [active, setActive] = useState(1)
  const carsoul = document.getElementById('carsoul')
  const carsoulDesktop = document.getElementById('carsoulDesktop')
  const firstScroll = () => {
    carsoul.style.transform = "translatex(0%)"
    setActive(1)
  }
  const secondScroll = () => {
    carsoul.style.transform = "translatex(-100%)"
    setActive(2)
  }
  const thirdScroll = () => {
    carsoul.style.transform = "translatex(-200%)"
    setActive(3)
  }
  const firstScrollDesktop = () => {
    carsoulDesktop.style.transform = "translatex(0%)"
    setActive(1)
  }
  const secondScrollDesktop = () => {
    carsoulDesktop.style.transform = "translatex(-50%)"
    setActive(2)
  }

  return (
    <div className='' >
      <div className='flex mt-[50px] mb-[30px]  w-full '>
        <div className='flex items-center rounded-sm px-[15px] ' >
          <img className='h-[33px] w-[32px] mr-[15px] ' src="https://stcdn.starclinch.in/mobile/images/profile/similar_artist_icon_v2.svg" alt="" />
          <p className=' text-[20px] text-[#000] font-medium '>Similar Artists you may like</p>
        </div>
      </div>

{/* Mobile */}
      <div className='flex flex-col md:hidden items-center overflow-hidden ' >
        <div id='carsoul' className={` flex min-w-[100%] transition-all duration-700`} >

          <div className='flex justify-around min-w-[200%] md:min-w-[100%] '>

            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/godse.jpg" name="Mugdha Godse 2" city='Mumbai' />
            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/a11fed94-8b07-412d-879e-f944d29c19a3.jpg" name="Aadil Chahal" city='Mumbai' />
            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aafreen-vaz-profile.jpg" name="Aafreen Vaz" city='Mumbai' />
            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aartii-nagpal-profile.jpg" name="Aartii Nagpal" city='Mumbai' />
          </div>

          <div className='flex justify-around min-w-[100%] md:min-w-[50%]  ' >

            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aashi-sharma-profile.jpg" name="Aashi Sharma" city='Mumbai' />
            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/Aatish-Bhattacharya2-750x450.jpg" name="Aatish Bhattacharya" city='Mumbai' />
          </div>

        </div>

      <div className=' flex items-center justify-center gap-2 mt-[17px] mb-[50px] '>
        <button onClick={firstScroll} className={`h-[10px] w-[10px]  rounded-full  ${active === 1 ? "bg-black " : "bg-[#ccc]"} `}></button>
        <button onClick={secondScroll} className={`h-[10px] w-[10px]  rounded-full  ${active === 2 ? "bg-black " : "bg-[#ccc]"} `}></button>
        <button onClick={thirdScroll} className={`h-[10px] w-[10px]  rounded-full  ${active === 3 ? "bg-black " : "bg-[#ccc]"} `}></button>
      </div>

      </div>
{/* Mobile */}
{/* dekstop */}
      <div className='hidden md:inline-flex flex-col items-center overflow-hidden m-auto' >


        <div id='carsoulDesktop' className={`flex items-center min-w-[100%] transition-all duration-700`} >

          <div className='flex justify-around min-w-[200%] md:min-w-[100%] '>

            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/godse.jpg" name="Mugdha Godse 2" city='Mumbai' />
            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/a11fed94-8b07-412d-879e-f944d29c19a3.jpg" name="Aadil Chahal" city='Mumbai' />
            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aafreen-vaz-profile.jpg" name="Aafreen Vaz" city='Mumbai' />
            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aartii-nagpal-profile.jpg" name="Aartii Nagpal" city='Mumbai' />
          </div>

          <div className='flex justify-around min-w-[100%] md:min-w-[50%]  ' >

            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aashi-sharma-profile.jpg" name="Aashi Sharma" city='Mumbai' />
            <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/Aatish-Bhattacharya2-750x450.jpg" name="Aatish Bhattacharya" city='Mumbai' />
          </div>

        </div>
        <div className=' flex items-center justify-center gap-2 mt-[17px] mb-[50px] '>
          <button onClick={firstScrollDesktop} className={`h-[10px] w-[10px]  rounded-full  ${active === 1 ? "bg-black " : "bg-[#ccc]"} `}></button>
          <button onClick={secondScrollDesktop} className={`h-[10px] w-[10px]  rounded-full  ${active === 2 ? "bg-black " : "bg-[#ccc]"} `}></button>
        </div>
      </div>
 {/* dekstop */}

    </div>
  )
}

export default ArtistSection
