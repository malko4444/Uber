import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from './UserContext';

export default function userLogin() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserDataContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [userData,setUserData] = useState('')
  const loginUser = () => {
    console.log(email, password);
    const userData = {
      email,
      password
    }
    
    
    const res = axios.post("http://localhost:3000/user/login", userData)
      .then(response => {
        console.log("Status:", response.status);
        if (response.status === 200) {
          const data = response.data;
          setUserData(data);
          console.log("data", data.token);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate('/start');
        }
        console.log("Data:", response.data); // The response object containing token & user
      })
      .catch(error => {
        console.error("Error:", error);
      });


    setEmail('')
    setPassword('')

  }
  // const ans = useContext(UserDataContext)
  // console.log(ans);
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='mb-10 w-16 ml-4 ' src="assets/logo.png" alt="" />
        <div >
          <h3 className='mb-2 text-lg font-medium'>What's is your email</h3>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base  px-4 py-2 rounded border' required type="email" placeholder="Email" />
          <h3 className='mb-2 text-lg font-medium'>What's is your password</h3>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base  px-4 py-2 rounded border' required type="password" placeholder="Password" />
          <button onClick={loginUser} className='bg-[#111] text-white mb-7 w-full text-lg placeholder:text-base  px-4 py-2 rounded border' >Login
          </button>
          <p className='text-center'>new here? <Link to='/userSignup' className='text-blue-600'> Create New Account</Link></p>
        </div>
      </div>
      <div>
        <Link to='/captainLogin'>
          <button className='bg-green-900 text-white mb-7 w-full text-lg placeholder:text-base  px-4 py-2 rounded border'>
            Sign in as Captain
          </button></Link>
      </div>
    </div>
  )
}
