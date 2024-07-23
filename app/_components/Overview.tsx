import React from 'react'

const Overview = () => {
    return (
        <div className='flex flex-col'>
            <p className='text-xl font-medium text-black text-start mb-2'>Company Overview</p>
            <div className='flex flex-row w-full gap-20'>
                <div className='flex flex-col gap-2 w-1/2'>
                    <div className='flex flex-row justify-between text-black text-sm'>
                        <h1 className='font-semibold'>Size</h1>
                        <p>1 to 50 employees</p>
                    </div>
                    <div className='flex flex-row justify-between text-black text-sm'>
                        <h1 className='font-semibold'>Type</h1>
                        <p>Private Practice / Firm</p>
                    </div>
                    <div className='flex flex-row justify-between text-black text-sm'>
                        <h1 className='font-semibold'>Sector</h1>
                        <p>--</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-1/2'>
                    <div className='flex flex-row justify-between text-black text-sm'>
                        <h1 className='font-semibold'>Founded</h1>
                        <p>--</p>
                    </div>
                    <div className='flex flex-row justify-between text-black text-sm'>
                        <h1 className='font-semibold'>Industry</h1>
                        <p>--</p>
                    </div>
                    <div className='flex flex-row justify-between text-black text-sm'>
                        <h1 className='font-semibold'>Revenue</h1>
                        <p>Unknown/Non Applicable</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
