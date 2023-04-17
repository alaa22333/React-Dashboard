import { Card, Typography } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import { dataPie ,optionsPie} from '../../utilis/dashboardData'
import "aos/dist/aos.css";
import Aos from "aos";

const PieChart = () => {
  useEffect(() => {
    Aos.init({ delay: 400, duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up"  data-aos-easing="linear"  className=" p-4  w-full max-w-full  shrink-0 md:flex-0 md:w-6/12 h-80 ">
    <Card className="p-4 mx-auto dark:darkBg ">
      <Typography className=" dark:text-darkPrimary text-primary text-xl" variant="h6">
        Pie Chart
      </Typography>
     <div className='w-64  h-72 mx-auto '> <Pie  data={dataPie} options={optionsPie} />
     </div>  </Card></div>
  )
}

export default PieChart
