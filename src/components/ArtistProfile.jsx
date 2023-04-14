import React from 'react'

const ArtistProfile = ({photo, name , city}) => {
  return (
    <div className='flex flex-col ' >
        <div>
            <img className='rounded-lg h-[160px] w-[160px] ' src={photo} alt="" />
        </div>
        <div className='flex flex-col items-center mt-[10px]  ' >
            <h4 className='text-sm text-[#333] font-bold mb-[3px] ' >{name}</h4>
            <p className='text-sm text-[#333]  '>{city}</p>
        </div>
      
    </div>
  )
}

export default ArtistProfile
