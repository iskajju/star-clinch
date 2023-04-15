import React, { useState } from 'react'
import InetrestedArtist from './InetrestedArtist'

const Interested = () => {
  const [scrollbar, setScrollbar]=useState(1)
  const carsoulSecond = document.getElementById('carsoul-second')

  const menu = () =>{
    carsoulSecond.style.transform = "translate(0%)"
    setScrollbar(1);
  }
  const menu1 = () =>{
    carsoulSecond.style.transform = "translate(-100%)"
    setScrollbar(2);
  }
  const menu2 = () =>{
    carsoulSecond.style.transform = "translate(-200%)"
    setScrollbar(3);
  }
  const menu3 = () =>{
    carsoulSecond.style.transform = "translate(-300%)"
    setScrollbar(4);
  }
  const menu4 = () =>{
    carsoulSecond.style.transform = "translate(-400%)"
    setScrollbar(5);
  }
  const menu5 = () =>{
    carsoulSecond.style.transform = "translate(-500%)"
    setScrollbar(6);
  }
  const menu6 = () =>{
    carsoulSecond.style.transform = "translate(-600%)"
    setScrollbar(7);
  }
  const [scrollbardeskstop, setScrollbardeskstop]=useState(2)
  const carsoulSeconddeskstop = document.getElementById('carsoul-second')

  const menudeskstop = () =>{
    carsoulSeconddeskstop.style.transform = "translate(0%)"
    setScrollbardeskstop(1);
  }
  const menu1deskstop = () =>{
    carsoulSeconddeskstop.style.transform = "translate(-100%)"
    setScrollbardeskstop(2);
  }
  const menu2deskstop = () =>{
    carsoulSeconddeskstop.style.transform = "translate(-200%)"
    setScrollbardeskstop(3);
  }
  const menu3deskstop = () =>{
    carsoulSeconddeskstop.style.transform = "translate(-300%)"
    setScrollbardeskstop(4);
  }

 

  return (
    <div className='px-[15px] ' > 
    <div>
        <h4 className='text-[18px] md:text-[20px] text-black font-medium mb-[30px] '>You might be interested in</h4>

    </div>
    {/* Mobile */}

    <div className='overflow-hidden ' >

      <div id='carsoul-second' className={`flex items-center min-w-[100%] transition-all duration-1000  `} >

        <div className={`flex items-center min-w-[100%] md:min-w-[50%]  `} >
        <InetrestedArtist image='https://starclinch.com/static/mobile/images/profile/book-anchor-online.webp' />
        <InetrestedArtist image="https://starclinch.com/static/mobile/images/profile/book-celebrity-online.webp" />
        </div>

        <div className='flex items-center   min-w-[100%] md:min-w-[50%] ' >
        <InetrestedArtist image='https://starclinch.com/static/mobile/images/profile/book-comedian-online.webp' />
        <InetrestedArtist image="https://starclinch.com/static/mobile/images/profile/book-dancer-online.webp" />
        </div>

        <div className='flex items-center min-w-[100%] ' >
        <InetrestedArtist image='https://starclinch.com/static/mobile/images/profile/book-dj-online.webp' />
        <InetrestedArtist image="https://starclinch.com/static/mobile/images/profile/book-instrumentalist-online.webp" />
        </div>

        <div className='flex items-center min-w-[100%] ' >
        <InetrestedArtist image='https://starclinch.com/static/mobile/images/profile/book-band-online.webp' />
        <InetrestedArtist image="https://starclinch.com/static/mobile/images/profile/book-magician-online.webp" />
        </div>

        <div className='flex items-center min-w-[100%] ' >
        <InetrestedArtist image='https://starclinch.com/static/mobile/images/profile/book-makeup-artist-online.webp' />
        <InetrestedArtist image="https://starclinch.com/static/mobile/images/profile/book-model-online.webp" />
        </div>

        <div className='flex items-center min-w-[100%] ' >
        <InetrestedArtist image='https://starclinch.com/static/mobile/images/profile/book-photographer-online.webp' />
        <InetrestedArtist image="https://starclinch.com/static/mobile/images/profile/book-singer-online.webp" />
        </div>

        <div className='flex items-center min-w-[100%] ' >
        <InetrestedArtist image='https://starclinch.com/static/mobile/images/profile/book-speaker-online.webp' />
        <InetrestedArtist image="https://starclinch.com/static/mobile/images/profile/book-variety-artist-online.webp" />
        </div>
      </div>

   
    <div className=' flex items-center justify-center gap-2 mt-[17px] mb-[50px] '>
        <button onClick={menu}  className={`h-[10px] w-[10px]  rounded-full   ${scrollbar=== 1 ? "bg-black " : "bg-[#ccc]"} `}></button>
        <button onClick={menu1} className={`h-[10px] w-[10px]  rounded-full   ${scrollbar=== 2 ? "bg-black " : "bg-[#ccc]"}  `}></button>
        <button onClick={menu2} className={`h-[10px] w-[10px]  rounded-full   ${scrollbar=== 3 ? "bg-black " : "bg-[#ccc]"}  `}></button>
        <button onClick={menu3} className={`h-[10px] w-[10px]  rounded-full   ${scrollbar=== 4 ? "bg-black " : "bg-[#ccc]"}  `}></button>
        <button onClick={menu4} className={`h-[10px] w-[10px]  rounded-full   ${scrollbar=== 5 ? "bg-black " : "bg-[#ccc]"}  `}></button>
        <button onClick={menu5} className={`h-[10px] w-[10px]  rounded-full   ${scrollbar=== 6 ? "bg-black " : "bg-[#ccc]"}  `}></button>
        <button onClick={menu6} className={`h-[10px] w-[10px]  rounded-full   ${scrollbar=== 7 ? "bg-black " : "bg-[#ccc]"}  `}></button>
     
    </div>
 
    </div>
    {/* Mobile */}
   
    </div>
    
  )
}

export default Interested
