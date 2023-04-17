import React from "react";
import { Outlet } from "react-router-dom";
import { SettingsColors, SideBar } from "../Components";
import { useStateContext } from "../Contexts/stateContext";

const SideBarLyout = () => {
  const { close } = useStateContext();
  return (
    <>
      <div
        className={`shadow-xl overflow-auto   capitalize dark:darkBg  lg:w-72 w-64 lg:p-7 pl-4 p-10  lg:pt-8 dark:text-darkPrimary text-primary   z-30 bg-bground h-100  fixed transition-all duration-300  ${
          close ? " -translate-x-full" : " translate-x-0 "
        }`}
      >
        <SideBar />{" "}
      </div>

      <Outlet />
    </>
  );
};

export default SideBarLyout;
