import {  Button, Input ,Tooltip} from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useStateContext } from '../Contexts/stateContext'
import {FaBars}from 'react-icons/fa'
import {MdDarkMode}from 'react-icons/md'
import {BsFillSunFill}from 'react-icons/bs'
import { Search, User } from 'heroicons-react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {MdLogin}from 'react-icons/md'
import {IoSettingsSharp,IoNotificationsSharp}from'react-icons/io5'
import { Breadcrumb } from '../utilis/constants'
import useAuth from '../custom-hooks/useAuth'
import { useUserContext } from '../Contexts/UserContext'
import 'aos/dist/aos.css';
import Aos from 'aos'


const NavBar = ({type,name}) => {

  useEffect(() => {
    Aos.init({duration:1500});
  }, [])
  const {currentUser}=useAuth()
  const {logOut}=useUserContext()
  const {active,closeSideBar,close,handleTheme,theme,colorTheme,handleSettings}=useStateContext()

  return (<>
    <div 
     className={`dark:text-darkPrimary  z-10  dark:bg-darkBg flex p-3  sticky   h-20 shadow-sm items-center transition-all duration-300 justify-between md:p-8 md:px-10  ${close?' ml-0 ':'  md:ml-72'}`}>

<div className='flex items-center ' data-aos="fade-down">
    <Button variant='text' size='sm' className='md:text-lg bloc lg:hidden'  onClick={closeSideBar}><FaBars style={{color:colorTheme}}/></Button>
    <Breadcrumb  type={type} name={name}/>
 </div>
    <div data-aos="fade-down" className='flex flex-row  justify-between items-center gap-2 '>
    
    <div className='flex gap-2 flex-nowrap dark:text-darkPrimary  text-primary' >
 

<Tooltip content='settings' >
<button className='animate-spin' onClick={handleSettings}><IoSettingsSharp/></button>
</Tooltip>

{currentUser ? (
            <Tooltip content='log out'>
            <button className='flex gap-2 items-center ' onClick={logOut}>
          <MdLogin className='md:hidden '/> <span className=' md:block'> Log Out </span>
          </button></Tooltip>
          ) : (
            <Tooltip content='sign in'>
            <NavLink className='flex gap-2 items-center ' to='/sign in'>
          <User className='md:hidden '/> <span className='md:block'> Sign In </span>
          </NavLink></Tooltip>
       )}
{ theme==='light'&&   <Tooltip content='Dark Mode'>
<button onClick={handleTheme}><MdDarkMode/></button></Tooltip>
}
{theme==='dark'&&<Tooltip content='light Mode'>
 <button  style={{color:colorTheme}}  onClick={handleTheme}><BsFillSunFill/></button></Tooltip>
}
    </div></div>
   
      
    </div> <ToastContainer/></>
  
  )}

export default NavBar
