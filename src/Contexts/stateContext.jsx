import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [close, setClose] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");
  const [colorTheme, setColorTheme] = useState("#1A97F5");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [setting, setSetting] = useState(false);

  const element = document.documentElement;
  const handleColor = (value) => {
    setColorTheme(value);
  };
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, []);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme, "theme");
  };

  const closeSideBar = () => {
    setClose(!close);
  };
  const handleSettings = () => {
    setSetting(!setting);
  };
  return (
    <StateContext.Provider
      value={{
        closeSideBar,

        close,
        setClose,
        cancel,
        setCancel,
        activeLink,
        setActiveLink,
        handleTheme,
        theme,
        colorTheme,
        setColorTheme,
        handleColor,
        setTheme,handleSettings,setting
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
