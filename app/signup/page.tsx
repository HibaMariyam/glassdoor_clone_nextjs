'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

const SignUp = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    return (
        <div className='flex flex-col p-16 gap-3 h-[100vh] w-[100vw] bg-white'>
            <h1 className='text-3xl font-semibold text-black mb-5'>Create an account</h1>
            <form className='flex flex-col gap-3' id='signup'
                onSubmit={async (e) => {
                    e.preventDefault()
                    const name = e.target.name.value
                    const email = e.target.email.value
                    const password = e.target.password.value
                    const password_confirmation = e.target.password_confirmation.value

                    console.log(name, email, password, password_confirmation)
                    try {
                        setLoading(true)
                        await fetch('https://job.kunjappu.online/api/register/', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json', 'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name,
                                email,
                                password,
                                password_confirmation
                            })
                        }
                        )

                        setLoading(false)
                        if (password === password_confirmation) {
                            alert('Account created successfully')
                            router.push('/login')
                        } else {
                            alert('passwords do not match')
                        }
                    } catch (error) {
                        setLoading(false)
                        console.log('error is', error)
                    }
                }}
            >
                <input
                    className='border border-gray-300 p-3 rounded-lg w-full bg-gray-100 text-gray-900 text-sm focus:border-green-500 focus:outline-none'
                    placeholder='Enter your name'
                    name="name"
                    type='text'
                    required={true}
                ></input>
                <input
                    className='border border-gray-300 p-3 rounded-lg w-full bg-gray-100 text-gray-900 text-sm focus:border-green-500 focus:outline-none'
                    placeholder='Enter your email'
                    name="email"
                    type='email'
                    required={true}
                ></input>
                <input
                    className='border border-gray-300 p-3 rounded-lg w-full bg-gray-100 text-gray-900 text-sm focus:border-green-500 focus:outline-none'
                    placeholder='Enter your password'
                    name="password"
                    type='password'
                    required={true}
                ></input>
                <input
                    className='border border-gray-300 p-3 rounded-lg w-full bg-gray-100 text-gray-900 text-sm focus:border-green-500 focus:outline-none'
                    placeholder='Enter your password'
                    name="password_confirmation"
                    type='password'
                    required={true}
                ></input>
                <div className='flex flex-row justify-center'>
                    {loading && <CgSpinner className='text-gray-500 animate-spin text-center' size={40} />}
                </div>
                <button className='bg-green-500 opacity-80 hover:opacity-100 p-3 mt-10 rounded-lg w-full text-white' form='signup' type='submit'>Register</button>
            </form>

        </div>
    )
}

export default SignUp
