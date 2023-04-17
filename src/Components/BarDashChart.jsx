import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useStateContext } from "../Contexts/stateContext";
import { barChartData, dataBar, optionsBar } from "../utilis/dashboardData";
import "aos/dist/aos.css";
import Aos from "aos";

const BarDashChart = () => {
  const {colorTheme}=useStateContext()
  useEffect(() => {
    Aos.init({ delay: 400, duration: 1000 });
  }, []);

  return (
    <Card  data-aos="fade-right"  data-aos-easing="linear"
    className="w-full  max-w-full shrink-0  md:w-7/12 dark:darkBg  ">
      <div className="w-11/12  mx-auto pt-1  ">
        <Card className="dark:darkBg">
          <Bar
          style={{background:colorTheme}}
            className=" rounded-lg  "
            data={dataBar}
            options={optionsBar}
          />
        </Card>
      </div>

      <div className=" mt-4  ">
        <Typography
          className="text-primary  dark:text-darkPrimary ml-5 flex flex-col -mb-3 "
          variant="h6"
        >
          Active Users
          <span className="text-secondary dark:text-darkPrimary font-light">
            (+23%) than last week
          </span>
        </Typography>
      </div>
      <CardFooter className="flex items-center justify-between flex-auto px-4  flex-wrap">
        {barChartData.items.map((item,i) => {
          const { icon, label, progress } = item;
          return (
            <div key={i} className=" flex flex-col p-1  dark:text-darkPrimary text-primary  ">
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  className="p-2 rounded-lg   "
               style={{background:icon.color}}
                >
                  {icon.ele}
                </Button>
                {label}
              </div>

              <div className=" mt-3 ">
                <Typography
                  variant="h5"
                  className=" text-lg md:text-xlg dark:text-darkPrimary text-primary"
                >
                  {progress.content}
                </Typography>
                <Progress
                  className="w-12  dark:text-darkPrimary"
                  value={progress.percentage}
                />
              </div>
            </div>
          );
        })}
      </CardFooter>
    </Card>
  );
};

export default BarDashChart;
