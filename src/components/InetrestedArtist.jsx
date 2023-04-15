import React from 'react'

const InetrestedArtist = ({image}) => {
  return (
    <div className='h-full w-full mr-[10px]   ' >
      <img className='min-h-[192px] max-h-[269px] lg:min-w-[147px] lg:max-w-[205px]  rounded-t-lg' src={image} alt="loading..." />
    </div>
  )
}

export default InetrestedArtist
