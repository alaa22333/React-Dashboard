import { useState } from "react";
import { Routes, Route ,useNavigate} from "react-router-dom";
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
import { ContextUserProvider, useUserContext } from "./Contexts/UserContext";

import SideBarLyout from "./pages/SideBarLyout";


function App() {
 
  const { currentUser } = useAuth();
  const navigate=useNavigate()
  return (
    <ContextUserProvider>
    <div className="flex    relative min-h-screen bg-bground  transition-all duration-300 dark:darkBg  flex-col ">
       <SettingsColors/>
      
      <div>
        <Routes>
          <Route
            path="/"
            element={
             currentUser ?  <ProtectedPage>
                <SideBarLyout/>
                <Home />
              </ProtectedPage>:<SignIn/>}
           
            
          />
          <Route
            path="/orders"
            element={
              <ProtectedPage>
                <SideBarLyout/>
                <Orders />
              </ProtectedPage>
            }
          />
          
          <Route
            path="/users"
            element={
              <ProtectedPage>
                <SideBarLyout/>
                <Users />
              </ProtectedPage>
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedPage>
                <SideBarLyout/>
                <Employees />
              </ProtectedPage>
            }
          />
           <Route
            path="/calendar"
            element={
              <ProtectedPage>
                <SideBarLyout/>
                <Calender />
              </ProtectedPage>
            }
          />
          <Route
         
            path="/Charts"
            element={
              <ProtectedPage>
             <SideBarLyout/>
                <ChartsPage />
              </ProtectedPage>
            }
          />
          <Route path="/sign in" element={<SignIn />} />
          <Route path="/sign up" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer/>
    </div>
      </ContextUserProvider>
  );
}

export default App;
