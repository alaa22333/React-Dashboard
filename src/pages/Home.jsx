import React, { useEffect } from "react";
import { Tooltip } from "@material-tailwind/react";
import {
  BarDashChart,
  CardInfo,
  LineDashChart,
  ChartDashboard,
  NavBar,
  Footer,
} from "../Components";
import { todaysData } from "../utilis/dashboardData";
import { useStateContext } from "../Contexts/stateContext";
import useAuth from "../custom-hooks/useAuth";
import { DoughnutChart, PieChart } from "../Components/Charts";
import { useUserContext } from "../Contexts/UserContext";
import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ delay: 400, duration: 1500 });
  }, []);

  const { currentUser } = useAuth();

  return (
    <>
      {currentUser && (
        <div>
          <NavBar name="Dashboard" />
        </div>
      )}
      <div className="md:px-10 px-4 w-full-mx-3    mx-auto lg:ml-72">
        <div className={` flex flex-wrap shrink-0 `}>
          {todaysData.map((item,i) => {
            const { status, icon, title, price, percentage } = item;
            return (

              <CardInfo
              key={i}
                title={title}
                percentage={percentage}
                price={price}
                icon={icon}
                status={status}
              />
            );
          })}

          <div
           
            className="
           mt-5 w-full flex gap-3 flex-wrap  shrink-0  md:flex-nowrap "
          >
            <BarDashChart />
            <LineDashChart />
          </div>
        </div>
        <div
       
          className="flex flex-wrap pb-10 -mx-3"
        >
          <PieChart />
          <DoughnutChart />
        </div>
         
      </div>
    
    </>
  );
};

export default Home;
