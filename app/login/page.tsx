'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

const LoginPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
    <div className='flex flex-col p-10 gap-4 bg-white min-h-screen min-w-screen overflow-hidden place-content-center'>
      <h1 className='text-3xl text-green-700 font-semibold'>Welcome to GlassDooor!</h1>
      <form className='flex flex-col gap-4' id='login'
        onSubmit={async (e) => {
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value
          console.log(email, password)
          try {
            setLoading(true)
            const res = await fetch('https://job.kunjappu.online/api/login/', {

              method: 'POST',
              headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                password
              })
            })
            if (res.ok) {
              setLoading(false)
              router.push('/')
            } else {
              setLoading(false)
              alert('Invalid credentials')
            }
          } catch (error) {
            console.log("error is ", error)
          }
        }}
      >
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
        <div className='flex flex-row justify-center'>
          {loading && <CgSpinner className='text-gray-500 animate-spin text-center' size={40} />}
        </div>


        <button className='bg-green-500 opacity-80 hover:opacity-100 p-3 rounded-lg w-full text-white' form='login' type='submit'>Login</button>

      </form>




    </div>
  )
}

export default LoginPage
