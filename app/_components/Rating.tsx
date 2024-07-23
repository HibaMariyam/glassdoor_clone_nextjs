import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import RatingBar from './RatingBar';
const Rating = () => {
    return (
        <div className='flex flex-row w-full justify-between gap-32'>
            <div className="flex flex-col items-center gap-6 w-1/2">
                <div className='flex flex-row items-center justify-start'>
                    <p className='text-sm mt-1 mr-2 text-green-600 font-medium'>4.4</p>
                    <IoStarSharp size={25} className='text-green-600' />
                    <IoStarSharp size={25} className='text-green-600' />
                    <IoStarSharp size={25} className='text-green-600' />
                    <IoStarSharp size={25} className='text-green-600' />
                    <IoStarSharp size={25} className='text-gray-200' />
                </div>
                <div className='flex flex-row justify-between w-full text-black text-sm font-semibold items-center place-content-center'>
                    <div className='flex flex-col items-center w-16 justify-center '>
                        <div className='h-16 w-16 rounded-full bg-white border-8 border-black  place-content-center mb-2'>100%</div>
                        <p className='text-xs font-normal'>Recommended to a friend</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-16 '>

                        <div className='h-16 w-16 rounded-full bg-white border-8 border-zinc-200 place-content-center mb-2'>N/A</div>
                        <p className='text-xs font-normal'>Approve of CEO</p>
                    </div>
                    <div className='flex flex-col items-center justify-center w-16 mb-3'>
                        <div className='h-16 w-16 rounded-full bg-zinc-200 border-8 border-zinc-200  justify-center flex flex-row items-center mb-2'><RiUserStarLine size={25} /></div>
                        <p className='text-xs font-normal'>0 Ratings</p>
                    </div>


                </div>


            </div>
            <div className='flex flex-col gap-2 w-1/2 mt-4'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <p className='text-sm text-nowrap text-black mr-2'>Career Opportunities</p>
                    <RatingBar />
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                    <p className='text-sm text-nowrap text-black mr-2'>Comp and Benefits</p>
                    <RatingBar />
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                    <p className='text-sm text-nowrap text-black mr-2'>Culture and values</p>
                    <RatingBar />
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                    <p className='text-sm text-nowrap text-black mr-2'>Senior management</p>
                    <RatingBar />
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                    <p className='text-sm text-nowrap text-black mr-2'>Work/Life Balance</p>
                    <RatingBar />
                </div>
            </div>



        </div>

    )
}

export default Rating
