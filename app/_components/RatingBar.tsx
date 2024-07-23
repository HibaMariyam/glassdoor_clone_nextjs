import React from 'react'
import { IoStarSharp } from 'react-icons/io5'

const RatingBar = () => {
    return (
        <div className='flex flex-row items-center justify-start '>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2 '>
                    <IoStarSharp size={15} className='text-black' />
                    <IoStarSharp size={15} className='text-black' />
                    <IoStarSharp size={15} className='text-black' />
                    <IoStarSharp size={15} className='text-black' />
                    <IoStarSharp size={15} className='text-gray-200' />
                </div>
                <span className='text-xs text-black mt-1 ml-2'>5.0</span>

            </div>

        </div>
    )
}

export default RatingBar
