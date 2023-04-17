import { Card, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { dataBarCarts, optionsBarCarts } from "../../utilis/dashboardData";
import "aos/dist/aos.css";
import Aos from "aos";

const BarChart = () => {
  useEffect(() => {
    Aos.init({ delay: 400, duration: 900 });
  }, []);

  return (
    
    <div data-aos="fade-left"  data-aos-easing="linear" className=" p-4   w-full max-w-full  shrink-0 md:flex-0 md:w-6/12 h-80 ">
    <Card className="p-4 dark:darkBg ">
      <Typography className="text-primary  dark:text-darkPrimary text-xl" variant="h6">
        Bar Chart
      </Typography>
      <Bar data={dataBarCarts} options={optionsBarCarts} />
    </Card></div>
  );
};

export default BarChart;
