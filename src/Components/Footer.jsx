import { Typography } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { useStateContext } from '../Contexts/stateContext';
import { useLocation } from 'react-router-dom';
import "aos/dist/aos.css";
import Aos from "aos";

const Footer = () => {
  
    const {  colorTheme } =  useStateContext();
const location=useLocation()
  return (
    <div className='mt-[2rem] dark:darkBg bg-primary absolute bottom-0  w-full  mx-auto  '>
      <Typography className={`text-white   ${location.pathname==='/sign in'|| location.pathname==='/sign up'? ' pl:0': 'lg:pl-40 '} py-4 text-center`} >All Rights reserved <span style={{color:colorTheme}}>{new Date().getFullYear()}</span> </Typography>
    </div>
  )
}

export default Footer
