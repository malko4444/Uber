import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function UserLogout() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    console.log("token in the logout page ",token);
    
    
        useEffect(()=>{
            axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                console.log("the data after logout",res);
                localStorage.removeItem('token');
                navigate('/userLogin') 
            })
        },[])
      return (
    <div>UserLogout</div>
  )
}
