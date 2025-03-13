import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function captainLogin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [captainData,setCaptainData] = useState('')
    const loginUser = ()=>{
        console.log(email,password);
        const captainData = {
          email,
          password
        }
        console.log(captainData);
        setEmail('')
        setPassword('')
        
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
       <div>
       <img className='mb-10 w-16 ml-4 ' src="assets/logo.png" alt="" />
        <div >
            <h3 className='mb-2 text-lg font-medium'>What's is your email</h3>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base  px-4 py-2 rounded border' required type="email" placeholder="Email" />
            <h3 className='mb-2 text-lg font-medium'>What's is your password</h3>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base  px-4 py-2 rounded border' required type="password" placeholder="Password" />
            <button onClick={ loginUser} className='bg-[#111] text-white mb-7 w-full text-lg placeholder:text-base  px-4 py-2 rounded border' >Login
            </button>
            <p className='text-center'>Join a fleet? <Link to='/captainSignup' className='text-blue-600'> Register as a captain</Link></p>
        </div>
       </div>
       <div>
        <Link to='/userLogin'>
        <button className='bg-orange-500 text-white mb-7 w-full text-lg placeholder:text-base  px-4 py-2 rounded border'>
            Sign in as User
        </button></Link>
       </div>
    </div>
  )
}
