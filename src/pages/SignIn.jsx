import {
  Button,
  Card,
  Checkbox,
  Input,
  typography,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loginimg from "../assets/loginimg.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { errorFun } from "../utilis/constants";
import { useStateContext } from "../Contexts/stateContext";
import { useUserContext } from "../Contexts/UserContext";
import "aos/dist/aos.css";
import Aos from "aos";
import { Divider } from "@mui/material";
import { IoLogoGoogle } from "react-icons/io";
import { Footer } from "../Components";

const SignIn = () => {
  const { colorTheme } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignIn, handleGoogleSignIn } = useUserContext();
  useEffect(() => {
    Aos.init({ delay: 200, duration: 1500 });
  }, []);
  return (
    <>
      <div className="  bg-zinc-400 min-h-full justify-center lg:justify-evenly flex flex-wrap items-start mx-auto px-2 md:px-10">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          className="lg:w-7/12 w-full lg:mt-10  md:block  shrink-0
      "
        >
          <img className="max-w-full " style={{height:'80vh'}} src={loginimg}></img>
        </div>
        
          <div className=" max-w-full pb-0  px-5 py-2 lg:mt-20   lg:w-4/12  mx-auto dark:darkBg  bg-white rounded-md   flex flex-col items-center   "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic" >
            <div className="text-center ">
              {" "}
              <Typography
                style={{ color: colorTheme }}
                className="r font-bold md:text-2xl text-xl pt-5"
              >
                Welcome to our dashboard !
              </Typography>
              <Typography
                className="text-primary my-3  dark:text-white"
                variant="h4"
              >
                Sign In
              </Typography>
            </div>
            <form className="w-60  md:my-2 md:mt-0 ">
              <Button
                variant='filled'
              color="red"
                onClick={handleGoogleSignIn}
                 className="text-white bg-deep-orange-900 w-full justify-center items-center flex gap-2"
              >
                <IoLogoGoogle className="text-xl" /> Sign In with Google
              </Button>
            </form>
            <div className="flex w-full mx-auto justify-center py-4  items-center flex-nowrap  flex-row ">
              <hr className="w-1/4 dark:border-secondary  border-black" />
              <Typography
                style={{ color: colorTheme }}
                className="px-2 w-1.2/4"
              >
                
                Or Sign with
              </Typography>
              <hr className="w-1/4 dark:border-secondary  border-black" />
            </div>
            <form className="flex  flex-col  justify-between my-10  md:my-20 md:mt-0 ">
              <div className="flex flex-col gap-y-2  justify-evenly ">
                <Input
                  type="email"
                  className="
                  
                 dark:text-white  "
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
                  <Typography  className= "dark:text-white text-sm whitespace-nowrap">
                    I agree the Terms and Conditions
                  </Typography>
                }
              />

              <Button
                onClick={(e) => handleSignIn(e, email, password)}
                size="lg"
                className="my-5 capitalize font-medium mx-auto w-32 md:w-full "
                style={{ background: colorTheme }}
             
              >
                Sign In{" "}
              </Button>
              <Typography className='dark:text-white'>
                You don't have an account?
                <Link to="/sign up" style={{ color: colorTheme }}>
                  {" "}
                  Sign Up
                </Link>
              </Typography>
            </form>
       
        </div>
      </div>
      <ToastContainer />
   
    </>
  );
};

export default SignIn;
