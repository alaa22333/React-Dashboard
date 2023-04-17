import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../Contexts/stateContext";

const LinkButton = ({name,func,icon}) => {
    const activeClass =
    "flex gap-3 w-full items-center   dark:bg-secDrBg/60  bg-white shadow-sm  rounded-lg";
  const normalClass =
    "flex gap-3 w-full items-center  dark:text-darkPrimary  dark:darkBg  bg-bground shadow-sm  rounded-lg";
 
    const {activeLink,colorTheme}=useStateContext()
  return (
   
      <Button
   
        size="sm"
        onClick={func}
        className={`${
          activeLink.toLowerCase() === name.toLowerCase()
            ? activeClass
            : normalClass
        }`}
        color="white"
      >
        <span
        
          style={{ background: colorTheme }}
          className={` text-lg dark:bg-darkBg shadow-lg ${
            activeLink.toLowerCase() === name.toLowerCase() &&
            ` dark:bg-darkBg dark:text-white`
          } rounded-lg p-2`}
          >
          {icon}
        </span>
        {name}
      </Button>

  );
};

export default LinkButton;

