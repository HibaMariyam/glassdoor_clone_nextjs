'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosStar } from 'react-icons/io'
import { BsThreeDots } from "react-icons/bs";
import { IoBookmarkOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from "react-icons/md";
import Overview from './Overview';
import Rating from './Rating';
import RatingBar from './RatingBar';

const JobDetailCard = ({ job }: { job: Job }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setDescriptionExpanded(!isDescriptionExpanded);
    };

    const shortDescription = job.description.slice(0, 100) + '...';
    return (
        <div className="flex flex-col   border border-gray-300 h-full pl-6  pr-6 pt-6 pb-20 rounded-lg w-full overflow-y-auto">
            <div className='flex flex-row w-full items-center'>
                <div className='flex flex-row items-center'>
                    <div className='rounded-full border border-gray-300 h-10 w-10 mr-3'>
                        <Image src={job.company.logo} alt="logo" width={100} height={100} className='object-cover rounded-full' />
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row text-md text-black font-medium'>
                            <p className='mr-3'>{job.company.name}</p>
                            <p className='flex flex-row gap-1 items-center font-medium text-xs'>4.4 <span className='opacity-70  mb-1'><IoIosStar size={12} /></span></p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex flex-row text-black justify-between'>
                <p className='text-xl font-semibold mt-2'>{job.title}</p>
                <div className='flex flex-row items-center gap-2'>
                    <div className=' bg-gray-100 rounded-md place-content-center flex flex-row p-3 text-black'>
                        <BsThreeDots size={20} />
                    </div>
                    <div className=' bg-gray-100 rounded-md place-content-center flex flex-row p-3 text-black'>
                        <IoBookmarkOutline size={20} />
                    </div>
                    <div className=' bg-green-400 rounded-md text-sm font-medium place-content-center flex flex-row p-3 text-black'>
                        Apply on emplopyer Site
                    </div>
                </div>


            </div>
            <p className='text-gray-900 text-sm text-start '>{job.location}</p>
            <p className='text-gray-900 text-sm text-start mt-10 '> {isDescriptionExpanded ? job.description : shortDescription}</p>
            <p className='flex flex-row text-green-700 text-sm text-start items-center font-semibold mt-5'
                onClick={toggleDescription}
            >Show more <span className='ml-3' ><MdKeyboardArrowDown size={25} /></span></p>
            <hr className='w-full my-6'></hr>

            <Overview />
            <hr className='w-full my-6'></hr>
            <div className='flex flex-col gap-1'>
                <p className='text-xl font-medium text-black text-start mb-2'>TechRish Solutions Ratings</p>

                <Rating />
                <hr className='w-full my-6'></hr>
                <div className='flex flex-row justify-center gap-6'>
                    <div className=' bg-gray-100 rounded-md place-content-center flex flex-row p-3 text-black'>
                        <IoBookmarkOutline size={20} />
                    </div>
                    <div className=' bg-green-400 rounded-md text-sm font-medium place-content-center flex flex-row p-3 text-black'>
                        Apply on emplopyer Site
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JobDetailCard
