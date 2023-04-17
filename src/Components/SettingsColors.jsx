import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { Checkbox, Typography } from "@material-tailwind/react";
import { themeColors } from "../utilis/dashboardData";
import { ThemeCheckBox } from "../utilis/constants";
import { useStateContext } from "../Contexts/stateContext";

const SettingsColors = () => {
  const {
    close,
    colorTheme,
    handleColor,
    setTheme,
    theme,
    handleSettings,
    setting,
  } = useStateContext();

  return (
    <div className="absolute top-60 right-0 z-10 ">
      <div className="relative">
        <div className=" w-14  z-10 p-1  bg-gray-300 dark:darkBg dark:text-white rounded-lg ">
          <div className="p-2 text-xl ">
            <button className="animate-spin " onClick={handleSettings}>
              <IoSettingsSharp />
            </button>
          </div>
        </div>
        {setting && (
          <div className="md:w-80 w-52 absolute h-43 bg-gray-300 transition duration-300 dark:bg-primary rounded-lg -top-40 right-16 md:right-15 z-10">
            <div className="flex flex-col mx-auto p-3 z-12">
              <div className="md:my-10 ">
                <Typography className="text-center text-primary dark:text-white  text-xl">
                  Color Themes{" "}
                </Typography>
                <div className="flex flex-wrap mx-auto p-3">
                  {themeColors.map((item, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          handleColor(item.color);
                        }}
                      >
                        <Checkbox
                          className="p-2 rounded-full  border-none"
                          checked={item.color === colorTheme ? true : false}
                          key={i}
                          style={{ background: `${item.color}` }}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="flex flex-wrap justify-center">
                  <Typography
                    className={` text-${colorTheme} text-center  text-primary dark:text-white text-xl`}
                  >
                    {" "}
                    Mode System{" "}
                  </Typography>
                  <div className="gap-6 flex justify-center p-5  ">
                    <ThemeCheckBox themeMode="dark" />
                    <ThemeCheckBox themeMode="light" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="  absolute text-gray-300   -z-10 dark:text-primary text-4xl  -top-24 md:-top-32 -right-5">
                <IoMdArrowDropright />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsColors;
