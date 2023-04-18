import React from 'react'
import useAuth from '../custom-hooks/useAuth'
import {useNavigate }from 'react-router-dom'
const ProtectedPage = ({children}) => {
    const navigate=useNavigate()
    const {currentUser}=useAuth()

    if(!currentUser){
        navigate('/sign in')
    }
    else{
     return children
 }
  
}

export default ProtectedPage
