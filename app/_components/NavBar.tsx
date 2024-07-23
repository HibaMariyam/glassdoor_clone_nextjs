import Image from 'next/image'
import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

const NavBar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row px-4  bg-white justify-between items-center'>

                <Image src="/glassdoor.png" alt="logo" width={100} height={100} className='object-cover' />
                <div className='flex flex-row text-black text-sm font-semibold gap-6 

'>
                    <p className='border-white hover:border-b-2 pb-1 hover:border-green-500'>Communities</p>
                    <p className=' border-white hover:border-b-2 pb-1 hover:border-green-500'>Jobs</p>
                    <p className=' border-white hover:border-b-2 pb-1 hover:border-green-500'>Companies</p>
                    <p className='border-white  hover:border-b-2 pb-1 hover:border-green-500'>Salaries</p>
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
