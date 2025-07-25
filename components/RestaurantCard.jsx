import React from 'react'

function RestaurantCard({name, cuisine , location , rating, time , image}) {
  return (
    <div className='bg-white rounded-lg shawdow-sm p-3 w-full max-w-[180px] hover:shadow-md text-sm transition'>
        <div className='img w-full h-32 mb-3 rounded-md overflow-hidden flex items-center justify-center bg-gray-100' >
            <img src = {image} className='w-full h-full object-cover'/>
        </div>
        <div className='font-semibold text-gray-800 truncate'>{name}</div>
        <div className='text-gray-500 text-xs truncate'>{cuisine}</div>
        <div className='text-gray-500 text-xs truncate'>{location}</div>
        <div className='flex justify-between items-center mt-2 text-xs'>
            <span className='bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium'>
            ⭐ {rating}
            </span>
            <span>
                {time} min
            </span>
            </div>

      
    </div>
  )
}

export default RestaurantCard
