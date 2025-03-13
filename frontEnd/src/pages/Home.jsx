import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='bg-gray-300'>

      <div className='bg-cover bg-bottom  h-screen pt-5  flex justify-between  flex-col w-screen'
        style={{ backgroundImage: "url('assets/main1.jpg')" }}>
        <img className='w-14 ml-4 ' src="assets/logo.png" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='text-3xl font-bold'>Get started with Uber</h2>
          <Link to='userLogin'>
            <button className='w-full bg-black py-3 rounded mt-5  text-white'>Continue</button></Link>
        </div>
      </div>
    </div>
  )
}
