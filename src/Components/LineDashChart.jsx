import { Card, CardBody, Typography } from "@material-tailwind/react";
import { ArrowUp } from "heroicons-react";
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { lineChartData, optionsLine } from "../utilis/dashboardData";
import "aos/dist/aos.css";
import Aos from "aos";

const LineDashChart = () => {
  useEffect(() => {
    Aos.init({ delay: 400, duration: 1000 });
  }, []);
  return (
    
    <Card  data-aos="zoom-in-left"  data-aos-easing="linear" className=" bg-white max-w-full w-full dark:text-darkPrimary  shrink-0  md:w-5/12 dark:darkBg ">
      <div className="flex flex-col p-3">
        <Typography
          variant="h5"
          className='capitalize  text-primary   dark:text-darkPrimary'
        >
          Sales overview
        </Typography>
        <Typography className="flex ">
          <span className="text-green-300">
            <ArrowUp />
          </span>
          4% more in 2023
        </Typography>
      </div>
      
      <div className=" flex-auto   p-4 ">
       
       
        <Line data={lineChartData} options={optionsLine} /></div>
   
    </Card>
  );
};

export default LineDashChart;
