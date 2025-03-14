import React,{useContext, useEffect} from 'react'
import { UserDataContext } from './UserContext'
import { useNavigate } from 'react-router-dom'
export default function UserProtectedWrapper({
    children
}) {
  const token = localStorage.getItem('token')
    const navigate = useNavigate()
    console.log("token the",token);
    
    useEffect(()=>{
      if(!token){
        console.log("the token is not there");
        
        navigate('/UserLogin')
    }
    },[])
    return (
    <>
     {children}
     </>
  )
}
