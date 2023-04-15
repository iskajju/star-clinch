import React from 'react'

const InetrestedArtist = ({image}) => {
  return (
    <div className='mr-[10px] flex justify-center items-center' >
      <img className='w-[148px] lg:w-[250px]  rounded-lg' src={image} alt="loading..." />
    </div>
  )
}

export default InetrestedArtist
