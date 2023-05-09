import React, { useState } from "react";
import ArtistProfile from "./ArtistProfile";

function SimilarArtist() {
  const [value, setValue] = useState(0);
  const [check, setCheck] = useState(1);
  return (
    <>
      <div className='flex mt-[50px] mb-[30px]  w-full '>
        <div className='flex items-center rounded-sm px-[15px] ' >
          <img className='h-[33px] w-[32px] mr-[15px] ' src="https://stcdn.starclinch.in/mobile/images/profile/similar_artist_icon_v2.svg" alt="" />
          <p className=' text-[20px] text-[#000] font-medium '>Similar Artists you may like</p>
        </div>
      </div>



      <div
        className="flex transition-all duration-700"
        style={{
          transform: `translateX(${value}%)`,
        }}
      >
        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] ">
          <ArtistProfile
            photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/godse.jpg"
            imageAlt=""
            name="Mugdha Godse"
            city="Mumbai"
            />
          <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/a11fed94-8b07-412d-879e-f944d29c19a3.jpg" name="Aadil Chahal" city='Mumbai' />
        </div>

        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pl-0 ">
          <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aafreen-vaz-profile.jpg" name="Aafreen Vaz" city='Mumbai' />
          <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aartii-nagpal-profile.jpg" name="Aartii Nagpal" city='Mumbai' />
        </div>

        <div className="flex justify-around min-w-full lg:min-w-[50%] px-[15px] md:pl-0 ">
          <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aashi-sharma-profile.jpg" name="Aashi Sharma" city='Mumbai' />
          <ArtistProfile photo="https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/Aatish-Bhattacharya2-750x450.jpg" name="Aatish Bhattacharya" city='Mumbai' />
        </div>
      </div>

      <div className="hidden lg:flex justify-center mt-[16px] items-center gap-1">
        <button
          className={`w-[10px] h-[10px] ${check == 1 ? "bg-black" : "bg-[#ccc]"
            } rounded-full`}
          onClick={() => {
            setValue(0);
            setCheck(1);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${check == 2 ? "bg-black" : "bg-[#ccc]"
            } rounded-full`}
          onClick={() => {
            setValue(-50);
            setCheck(2);
          }}
        >
          {/* slider nav */}
        </button>
      </div>
      <div className="flex lg:hidden mt-[16px] justify-center items-center gap-1">
        <button
          className={`w-[10px] h-[10px] ${check == 1 ? "bg-black" : "bg-[#ccc]"
            } rounded-full`}
          onClick={() => {
            setValue(0);
            setCheck(1);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${check == 2 ? "bg-black" : "bg-[#ccc]"
            } rounded-full`}
          onClick={() => {
            setValue(-100);
            setCheck(2);
          }}
        >
          {/* slider nav */}
        </button>
        <button
          className={`w-[10px] h-[10px] ${check == 3 ? "bg-black" : "bg-[#ccc]"
            } rounded-full`}
          onClick={() => {
            setValue(-200);
            setCheck(3);
          }}
        >
          {/* slider nav */}
        </button>
      </div>
    </>
  );
}

export default SimilarArtist;
