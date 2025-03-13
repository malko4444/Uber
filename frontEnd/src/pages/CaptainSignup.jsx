import React, { useState } from 'react';

export default function CaptainSignup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [capacity, setCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const registerCaptain = () => {
        const captainData = {
            fullName: {
                firstName,
                lastName
            },
            age: parseInt(age),
            email,
            password,
            vehicle: {
                color: vehicleColor,
                plateNumber,
                capacity: parseInt(capacity),
                vehicleType
            },
            location: {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            }
        };
        console.log(captainData);
        setFirstName('');
        setLastName('');
        setAge('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setPlateNumber('');
        setCapacity('');
        setVehicleType('');
        setLat('');
        setLng('');
        
    };

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='mb-10 w-16 ml-4' src='assets/logo.png' alt='' />
                
                <div className='flex gap-x-4 mb-7'>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='bg-[#eeeeee] w-1/2 text-lg placeholder:text-base px-6 py-2 rounded border' required type='text' placeholder='First Name' />
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='bg-[#eeeeee] w-1/2 text-lg placeholder:text-base px-4 py-2 rounded border' required type='text' placeholder='Last Name' />
                </div>

                <h3 className='mb-2 text-lg font-medium'>What's your age?</h3>
                <input value={age} onChange={(e) => setAge(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border' required type='number' placeholder='Age' />
                
                <h3 className='mb-2 text-lg font-medium'>What's your email?</h3>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border' required type='email' placeholder='Email' />
                
                <h3 className='mb-2 text-lg font-medium'>What's your password?</h3>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border' required type='password' placeholder='Password' />
                
                <h3 className='mb-2 text-lg font-medium'>Vehicle Details</h3>
                <div className='flex gap-x-4 mb-7'>
                    <input value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} className='bg-[#eeeeee] w-1/2 text-lg placeholder:text-base px-4 py-2 rounded border' required type='text' placeholder='Vehicle Color' />
                    <input value={plateNumber} onChange={(e) => setPlateNumber(e.target.value)} className='bg-[#eeeeee] w-1/2 text-lg placeholder:text-base px-4 py-2 rounded border' required type='text' placeholder='Plate Number' />
                </div>
                <div className='flex gap-x-4 mb-7'>
                    <input value={capacity} onChange={(e) => setCapacity(e.target.value)} className='bg-[#eeeeee] w-1/2 text-lg placeholder:text-base px-4 py-2 rounded border' required type='number' placeholder='Capacity' />
                    <input value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className='bg-[#eeeeee] w-1/2 text-lg placeholder:text-base px-4 py-2 rounded border' required type='text' placeholder='Vehicle Type' />
                </div>

                <h3 className='mb-2 text-lg font-medium'>Location Details</h3>
                <div className='flex gap-x-4 mb-7'>
                    <input value={lat} onChange={(e) => setLat(e.target.value)} className='bg-[#eeeeee] w-1/2 text-lg placeholder:text-base px-4 py-2 rounded border' required type='number' placeholder='Latitude' />
                    <input value={lng} onChange={(e) => setLng(e.target.value)} className='bg-[#eeeeee] w-1/2 text-lg placeholder:text-base px-4 py-2 rounded border' required type='number' placeholder='Longitude' />
                </div>

                <button onClick={registerCaptain} className='bg-[#111] text-white mb-7 w-full text-lg placeholder:text-base px-4 py-2 rounded border'>Register</button>
            </div>
        </div>
    );
}