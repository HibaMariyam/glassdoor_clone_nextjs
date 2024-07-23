import Image from 'next/image'
import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const NavBar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row pl-4 pr-4 pb-3  bg-white justify-between items-center '>

                <Image src="/glass.png" alt="logo" width={150} height={150} className='object-cover ' />
                <div className='flex flex-row text-black text-sm font-semibold gap-6 

'>
                    <p className='border-white hover:border-b-4 pb-1 hover:border-green-500'>Communities</p>
                    <p className=' border-white hover:border-b-4 pb-1 hover:border-green-500'>Jobs</p>
                    <p className=' border-white hover:border-b-4 pb-1 hover:border-green-500'>Companies</p>
                    <p className='border-white  hover:border-b-4 pb-1 hover:border-green-500'>Salaries</p>
                </div>
                <div className='flex flex-row gap-3 text-black text-sm font-semibold'>
                    <IoMdSearch size={20} />
                    <p>Search</p>
                    <IoMdNotificationsOutline size={20} />
                    <FaRegCircleUser size={20} />


                </div>




            </div>
            <hr className='w-full mb-7'></hr>
        </div>

    )
}

export default NavBar
