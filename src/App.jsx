import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import { Footer, NavBar, SettingsColors, SideBar } from "./Components";

import {
  Home,
  Users,
  Employees,
  Kanban,
  Calender,
  Orders,
  ChartsPage,
  Error,
  SignIn,
  SignUp,
  ProtectedPage,
} from "./pages";
import { useStateContext } from "./Contexts/stateContext";

import useAuth from "./custom-hooks/useAuth";
import { useUserContext } from "./Contexts/UserContext";

import SideBarLyout from "./pages/SideBarLyout";


function App() {
  const { close, colorTheme, handleColor,setTheme,theme,} = useStateContext();
 
  const { currentUser } = useAuth();

  return (
    <div className="flex    relative min-h-screen bg-bground  transition-all duration-300 dark:darkBg  flex-col ">
       <SettingsColors/>
      
      <div>
        <Routes>
          <Route element={<SideBarLyout/>}>
          <Route
            path="/"
            element={
              <ProtectedPage>
                <Home />
              </ProtectedPage>
            }
          /></Route>
          <Route element={<SideBarLyout/>}>
          <Route
            path="/orders"
            element={
              <ProtectedPage>
                <Orders />
              </ProtectedPage>
            }
          />
          </Route>
          <Route element={<SideBarLyout/>}>
          <Route
            path="/users"
            element={
              <ProtectedPage>
                <Users />
              </ProtectedPage>
            }
          /></Route>
         <Route element={<SideBarLyout/>}>
          <Route
            path="/employees"
            element={
              <ProtectedPage>
                <Employees />
              </ProtectedPage>
            }
          /></Route>
           <Route element={<SideBarLyout/>}>
          <Route
            path="/calendar"
            element={
              <ProtectedPage>
                <Calender />
              </ProtectedPage>
            }
          /></Route>
          <Route element={<SideBarLyout/>}>
          <Route
         
            path="/Charts"
            element={
              <ProtectedPage>
                {" "}
                <ChartsPage />
              </ProtectedPage>
            }
          /></Route>
          <Route path="/sign in" element={<SignIn />} />
          <Route path="/sign up" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
