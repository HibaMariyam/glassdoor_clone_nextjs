'use client'
import moment from 'moment';
import Image from 'next/image'
import { LiaRupeeSignSolid } from "react-icons/lia";
import React, { useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";


const JobCard = ({ job, selectedJob, setSelectedJob }: {
    job: Job,
    selectedJob?: Job | null,
    setSelectedJob: React.Dispatch<React.SetStateAction<Job | null>>
}) => {

    const selected = selectedJob?.id === job.id

    return (
        <div>
            <div
                className={`flex flex-col gap-2 border  p-4 rounded-lg w-full ${selected ? 'border-gray-300' : 'border-white'}`}
                onClick={() => setSelectedJob(job)}
            >
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row items-center'>
                        <div className='rounded-full border border-gray-300 h-8 w-8 mr-3'>
                            <Image src={job.company.logo} alt="logo" width={100} height={100} className='object-cover rounded-full' />
                        </div>
                        <div className='flex flex-row text-xs text-black'>
                            <p className='mr-3'>{job.company.name}</p>
                            <p className='flex flex-row gap-1 items-center'>4.4 <span className='opacity-70  mb-1'><IoIosStar size={11} /></span></p>
                        </div>
                    </div>

                    <IoBookmarkOutline className='text-gray-700' size={20} />
                </div>
                <p className='text-sm font-semibold text-black text-start'>{job.title}</p>
                <div className='flex flex-row justify-between text-xs text-gray-700'>
                    <p>{job.location}</p>

                    <p>
                        {
                            moment(job.created_at).fromNow()
                        }
                    </p>
                </div>
                <div className='text-xs  flex flex-row items-center text-gray-700 text-start'><span><LiaRupeeSignSolid /></span>{job.salary}</div>

            </div>
            {!selected &&
                <hr></hr>
            }
        </div>




    )
}


export default JobCard
