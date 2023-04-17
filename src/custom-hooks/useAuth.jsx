import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

import { auth } from '../firebase.config'


const useAuth = () => {
const [currentUser,setCurrentUser]=useState(null)
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(user)=>{
           if(user){
            setCurrentUser(user)
           }else{
            setCurrentUser(null)
           }
         })
         return ()=>unSubscribe()
       })

       return{ currentUser}

 
}

export default useAuth