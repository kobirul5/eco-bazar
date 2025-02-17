import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Rating() {
  return (
    <div>
      <h3 className="font-bold text-xl">Rating</h3>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 text-4xl'>
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
        </div>
        <div className='flex gap-2 text-4xl'>
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-gray-300" />
        </div>
        <div className='flex gap-2 text-4xl'>
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
        </div>
        <div className='flex gap-2 text-4xl'>
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
        </div>
        <div className='flex gap-2 text-4xl'>
          <FaStar className="text-orange-500" />
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
          <FaStar className="text-gray-300" />
        </div>
      </div>
    </div>
  )
}
