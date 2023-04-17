import { Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { NavBar } from "../Components";
import {
  LineChart,
  Map,
  PieChart,
  BarChart,
  Area,
  DoughnutChart,
  MixedChart,
} from "../Components/Charts/index";
import { useStateContext } from "../Contexts/stateContext";
import useAuth from "../custom-hooks/useAuth";
import "aos/dist/aos.css";
import Aos from "aos";

const ChartsPage = () => {
  useEffect(() => {
    Aos.init({ delay: 200, duration: 1500 });
  }, []);
  const { currentUser } = useAuth();
  const { colorTheme } = useStateContext();
  
  return (
    <>
      {currentUser && (
        <div>
          <NavBar name="Charts" type="Pages" />
        </div>
      )}
      <div className="lg:ml-80 min-h-screen   px-5  mx-auto  text-primary">
        <div className=" w-full  ">
          <Typography
            variant="h3"
            className="dark:text-darkPrimary py-5  "
            style={{ color: colorTheme }}
          >
            Charts
          </Typography>

          <div
         
            className="flex flex-wrap -mx-3"
          >
            <LineChart />
            <BarChart />
          </div>
          <div
         
            className="flex flex-wrap -mx-3"
          >
            <PieChart />
            <DoughnutChart />
          </div>
          <div
          
            className="flex flex-wrap -mx-3"
          >
            <MixedChart />
            <Area />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartsPage;
