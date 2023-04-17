import { Card, Typography } from '@material-tailwind/react'

import React, { useEffect } from 'react'
import { Chart } from 'react-chartjs-2'
import { mixedChartsData, optionsMixed } from '../../utilis/dashboardData'
import "aos/dist/aos.css";
import Aos from "aos";

const MixedChart = () => {
  useEffect(() => {
    Aos.init({ delay: 400, duration: 1000 });
  }, []);

  return (
    <div  data-aos="zoom-out-right"  data-aos-easing="linear" className=" p-4  w-full max-w-full  shrink-0 md:flex-0 md:w-6/12 h-80 ">
    <Card className="p-4 mx-auto bg-primary dark:darkBg  ">
      <Typography className="text-white text-xl" variant="h6">
    Mixed Chart
      </Typography>
     <Chart data={mixedChartsData}  options={optionsMixed} />
      </Card></div>
  )
}

export default MixedChart
