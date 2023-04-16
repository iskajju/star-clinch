import React, { useState } from 'react'
import InetrestedArtist from './InetrestedArtist'
import ArtistProfile from './ArtistProfile';

const Interested = () => {
  const [value, setValue] = useState(0);
  const [check, setCheck] = useState(1);
  return (
    <>
<div className='mt-[50px]' >
  <h4 className='text-[18px] md:text-[20px] text-[#000] font-semibold px-[15px] ' > You might be interested in</h4>
</div>
      <div
        className="flex transition-all duration-1000 "
        style={{
          transform: `translateX(${value}%)`,
        }}
      >
        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pr-0 ">
          <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-anchor-online.webp"
          />
          <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-celebrity-online.webp"
          />
        
         
        </div>
        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pr-0 ">
        <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-comedian-online.webp"
          />
          <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-dancer-online.webp"
          />
        </div>
        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pr-0 ">
        <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-dj-online.webp"
          />
          <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-instrumentalist-online.webp"
          />
        </div>
        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pr-0 ">
        <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-band-online.webp"
          />
          <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-magician-online.webp"
          />
        </div>
        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pr-0 ">
        <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-makeup-artist-online.webp"
          />
          <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-model-online.webp"
          />
        </div>
        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pr-0 ">
        <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-photographer-online.webp"
          />
          <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-singer-online.webp"
          />
        </div>
        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pr-0 ">
        <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-speaker-online.webp"
          />
          <InetrestedArtist
          image="https://starclinch.com/static/mobile/images/profile/book-variety-artist-online.webp"
          />
        </div>
      </div>
      <div className="hidden lg:flex justify-center mt-[16px] items-center gap-1">
        <button
          className={`w-[10px] h-[10px] ${
            check == 1 ? "bg-black" : "bg-[#ccc]" 
          } rounded-full`}
          onClick={() => {
            setValue(0);
            setCheck(1);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 2 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-100);
            setCheck(2);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 3 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-200);
            setCheck(3);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 4 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-250);
            setCheck(4);
          }}
        >
          {/* slider nav */}
        </button>
      </div>
      <div className="flex lg:hidden justify-center mt-[16px] items-center gap-1">
        <button
          className={`w-[10px] h-[10px] ${
            check == 1 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(0);
            setCheck(1);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 2 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-100);
            setCheck(2);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 3 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-200);
            setCheck(3);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 4 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-300);
            setCheck(4);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 5 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-400);
            setCheck(5);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 6 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-500);
            setCheck(6);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${
            check == 7 ? "bg-black" : "bg-[#ccc]"
          } rounded-full`}
          onClick={() => {
            setValue(-600);
            setCheck(7);
          }}
        >
          {/* slider nav */}
        </button>
      </div>
    </>
  );
}

export default Interested
