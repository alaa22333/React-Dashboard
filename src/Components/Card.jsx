import {
  CardHeader,
  Card,
  cardFooter,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";

import React, { useEffect } from "react";
import { useStateContext } from "../Contexts/stateContext";
import 'aos/dist/aos.css';
import Aos from 'aos'

const CardInfo = ({ title, icon, price, percentage, status }) => {
  const { close ,colorTheme} = useStateContext();
  useEffect(() => {
    Aos.init({delay:200,duration:1500});
  }, [])
  return (
    <div data-aos="zoom-out"
    data-aos-anchor-placement="bottom-bottom" className="w-full max-w-full px-1 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
  
        <Card className={` dark:darkBg  max-w-full  `}>
          
          <div className="relative flex-auto p-4 ">
          <div className="flex flex-row">
           <div className=" flex-none w-2/3 max-w-full ">
              
              <Typography className="text-secondary  font-medium ">
                {title}
              </Typography>
              <Typography
                variant="h5"
                className=" dark:text-darkPrimary  text-primary flex flex-row items-center gap-1"
              >
                {price}
                <span className={`text-${status}-500 font-semibold text-sm`}>
                  {percentage}
                </span>
              </Typography>
            </div>
            <div className=" max-w-full p-3  basis-1/3 w-2/12">
              <Button className="text-xl p-3" style={{background:colorTheme}} size="sm" variant="gradient">
                
                {icon}
              </Button>
            </div>
       </div>
        
          </div>
        </Card>
      </div>

  );
};

export default CardInfo;
