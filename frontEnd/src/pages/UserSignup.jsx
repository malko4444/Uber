import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  { UserDataContext } from './UserContext';

export default function UserSignup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const{userData, setUserData} = useContext(UserDataContext);

    const registerUser = async() => {
        const newUserData = {
            fullname: {
                firstName,
                lastName
            },
            email,
            password
        };
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUserData);
        console.log(res.status);
        
        if(res.status === 201) {
            const data = res.data;
            setUserData(data.user);
            console.log("data", data);
            
            navigate('/start');
            
        }
        // console.log(userData);
    };

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='mb-10 w-16 ml-4' src="assets/logo.png" alt="" />
                <div>
                    <div className='flex gap-4'>
                        <div className='w-1/2'>
                            <h3 className='mb-2 text-lg font-medium'>First Name</h3>
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border' required type="text" placeholder="First Name" />
                        </div>
                        <div className='w-1/2'>
                            <h3 className='mb-2 text-lg font-medium'>Last Name</h3>
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border' required type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <h3 className='mb-2 text-lg font-medium'>Email</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border' required type="email" placeholder="Email" />
                    <h3 className='mb-2 text-lg font-medium'>Password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border' required type="password" placeholder="Password" />
                    <button onClick={registerUser} className='bg-[#111] text-white mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border'>Register</button>
                    <p className='text-center'>Already have an account? <Link to='/userLogin' className='text-blue-600'>Login here</Link></p>
                </div>
            </div>
            <div>
                <Link to='/captainLogin'>
                    <button className='bg-green-900 text-white mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border'>
                        Sign in as Captain
                    </button>
                </Link>
            </div>
        </div>
    );
}
