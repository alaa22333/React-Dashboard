import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import home from "../assets/home.png";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useStateContext } from "../Contexts/stateContext";
import { useUserContext } from "../Contexts/UserContext";
import "aos/dist/aos.css";
import Aos from "aos";
import loginimg from '../assets/loginimg.svg'
import { Footer } from "../Components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { colorTheme } = useStateContext();
  const { handleSignUp } = useUserContext();
  useEffect(() => {
    Aos.init({ delay: 200, duration: 1500 });
  }, []);
  return (
    <>
      <div className=" bg-zinc-400 min-h-full justify-center lg:justify-evenly flex flex-wrap items-start mx-auto px-2 md:px-10">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          className="lg:w-7/12 w-full md:block lg:mt-10  shrink-0
    "
        >
          <img className="max-w-full "  style={{height:'80vh'}} src={loginimg}></img>
        </div>
        <div
          className="  max-w-full pb-0  px-5 py-2 lg:mt-20   lg:w-4/12  mx-auto dark:darkBg  bg-white rounded-md   flex flex-col items-center    "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
        >
            <div className="text-center mt-10 ">
              {" "}
              <Typography
                style={{ color: colorTheme }}
                className="r font-bold md:text-2xl text-xl pt-5"
              >
                Welcome to our dashboard !
              </Typography>
              <Typography
                className="text-primary p-5  dark:text-white"
                variant="h4"
              >
                Sign Up
              </Typography>
            </div>
            <form className="flex flex-col flex-auto justify-between my-20 mt-0 ">
              <div className="flex flex-col gap-4 pb-1 flex-auto  justify-evenly ">
                <Input
                  type="email"
                  className="
                  
                 dark:text-white mx-auto w-30 md:w-full"
                  size="lg"
                  value={email}
                  label="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                
                />
                <Input
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  label="Password"
                />
              </div>

              <Checkbox
                className="p-2 "
                label={
                  <Typography className="text-sm whitespace-nowrap">
                    I agree the Terms and Conditions
                  </Typography>
                }
              />
              <Button
                onClick={(e) => {
                  handleSignUp(e, email, password);
                }}
                size="lg"
                style={{ background: colorTheme }}
                className="my-5 capitalize w-32  mx-auto md:w-full font-medium"
              >
                Sign up{" "}
              </Button>
            </form>
         
        </div>
      </div>
      <ToastContainer />
   
    </>
  );
};

export default SignUp;
