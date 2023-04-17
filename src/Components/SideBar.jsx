import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { links } from "../utilis/links";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../Contexts/stateContext";
import { useUserContext } from "../Contexts/UserContext";
import LinkButton from "./LinkButton";
import 'aos/dist/aos.css';
import Aos from 'aos'

const SideBar = () => {
  useEffect(() => {
    Aos.init({delay:200,duration:1500});
  }, [])
  const {  close, setClose, activeLink, colorTheme } =
    useStateContext();
const {logOut}=useUserContext()
  React.useEffect(() => {
    const handleSize = window.addEventListener("resize", () => {
      if (!close || (!close && window.innerWidth <= 900)) {
        window.innerWidth <= 960 && setClose(!close);
      } else {
        setClose(false);
      }
    });
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [window.innerWidth]);

  return (
    <div className={`flex flex-col pb-10 `} data-aos="fade-right"
    data-aos-offset="500"
    data-aos-easing="ease-in-sine">
      <Typography
        className="text-2xl md:text-3xl  text-primary dark:text-darkPrimary"
        variant="h3"
      >
      <Link to='/' style={{ color: colorTheme }}>  Teach</Link>Director
      </Typography>

      <div className="flex flex-col  gap-3 cursor-pointer ">
        {links.map((i,index) => {
          return (
            <div key={index} className="flex-col  flex gap-5 ">
              <span className="text-secondary pl-4 "> {i.title}</span>

              {i.links.map((item, index2) => {
                if (item.name === "Log Out") {
                  return (
                    <LinkButton 
                    key={index2}
                      name={item.name}
                      icon={item.icon}
                      func={() => {
                        if (innerWidth <= 900) {
                          setClose(true);
                        }
                        logOut();
                      }}
                    />
                  );
                }
                return (
                  <NavLink
                    key={index2}
                    
                    to={`/${
                      item.name === "Dashboard" ? "" : item.name.toLowerCase()
                    }`}
                  >
                    <LinkButton name={item.name} icon={item.icon} func={()=>{ if (innerWidth <= 900) {
                          setClose(true);
                        }}} />
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="absolute top-15 -right-2 md:hidden">
        <Button
          onClick={() => {
            if (!close && window.innerWidth <= 900) {
              setClose(!close);
            }
          }}
          variant="text"
          style={{ color: colorTheme }}
          className={`dark:bg-dark-bg  text-xl `}
          size="sm"
        >
          <CgClose />
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
