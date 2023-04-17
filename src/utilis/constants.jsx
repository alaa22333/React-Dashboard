import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {NavLink}from 'react-router-dom'
import { FiHome } from 'react-icons/fi'
import { Breadcrumbs,Checkbox,Tooltip, Typography} from '@material-tailwind/react'
import { useStateContext } from "../Contexts/stateContext";
import { useEffect } from "react";
export const errorFun=(message)=>{
    return  toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
}
export const Breadcrumb=({type,name})=>{
const {setActiveLink}=useStateContext()
useEffect(()=>{
setActiveLink(name)
},[name])
    return (<Breadcrumbs  className='bg-bcground  ' >
   <Tooltip content='Home'><NavLink className='dark:text-darkPrimary  opacity-60' to="/"  >
     <FiHome/>
    </NavLink></Tooltip> 
{ type&& <NavLink className="opacity-60 dark:text-darkPrimary ">
    {type}
    </NavLink>}
    <span className=' dark:text-darkPrimary  text-primary capitalize font-semibold'  >{name}</span>
  </Breadcrumbs>)
} 



export const ThemeCheckBox=({themeMode})=>{
  const {setTheme,theme}=useStateContext()
  return  <button  onClick={()=>{setTheme(themeMode)}}>
  <Checkbox
    className="p-2 rounded-full"
   
    label={
      <Typography   className="  text-primary capitalize dark:text-white whitespace-nowrap">
       {themeMode}
      </Typography>
    }
    checked={theme===themeMode&&true}
  /></button>
}