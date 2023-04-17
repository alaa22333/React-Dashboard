import { Card, Typography } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { dataLineChart ,optionsLineChart} from '../../utilis/dashboardData' 
import "aos/dist/aos.css";
import Aos from "aos";

const LineChart = () => {
  useEffect(() => {
    Aos.init({ delay: 400, duration: 1000 });
  }, []);

  return (
    <div  data-aos="zoom-in-right"  data-aos-easing="linear" className=" p-4  w-full max-w-full  shrink-0 md:flex-0 md:w-6/12 h-80 ">
    <Card className="p-4 dark:darkBg">
    <Typography className="text-primary dark:text-darkPrimary  md:text-xl " variant="h6">
     Line Chart 
    </Typography>
    <Line data={dataLineChart} options={optionsLineChart} />
  </Card></div>
  )
}

export default LineChart
