import { Card, Typography } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { dataArea, dataLineChart, optionsArea, optionsLine } from '../../utilis/dashboardData'
import "aos/dist/aos.css";
import Aos from "aos";

const Area = () => {
  useEffect(() => {
    Aos.init({ delay: 400, duration: 1000 });
  }, []);

  return (
    <div data-aos="zoom-in-up"  data-aos-easing="linear" className=" p-4  w-full max-w-full  shrink-0 md:flex-0 md:w-6/12 h-80 ">
    <Card className="p-4 bg-primary dark:darkBg  dark:text-darkPrimary">
      <Typography className="text-white  text-xl" variant="h6">
        Area Chart
      </Typography>
     
      <Line data={dataArea} options={optionsArea} />
    </Card></div>
  )
}

export default Area
