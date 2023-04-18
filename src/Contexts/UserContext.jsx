import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../firebase.config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { errorFun } from "../utilis/constants";
import { useNavigate } from "react-router-dom";

import { setDoc, doc } from "firebase/firestore";

const UserContext = createContext();
export const ContextUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //sign in
  const handleGoogleSignIn= async()=>{
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        toast.success("You've successfully logged In!");
        navigate('/')
      });
    } catch (error) {
      toast.error("Invalid Sign In try again!");
    }
  };
  const handleSignIn = async (e, email, password) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);

      navigate("/");
      toast.success("you successfully logged in!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      setIsLoggedIn(false);
      errorFun("The email address is already in use");
      if (error.code == "auth/email-already-in-use") {
        errorFun("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        errorFun("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        errorFun("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        errorFun("The password is too weak.");
      }
    }
  };
  //sign up
  const handleSignUp = async (e, email, password) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const docRef = await setDoc(doc(db, "user", user.uid), {
        uid: user.uid,
        email,
        email: user.email,
      });
      navigate("/");
      toast.success("you've already signed up!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      errorFun("The email address is already in use");
      if (error.code == "auth/email-already-in-use") {
        errorFun("The email address is already in use");
      } else if (error.code == "auth/invalid-email") {
        errorFun("The email address is not valid.");
      } else if (error.code == "auth/operation-not-allowed") {
        errorFun("Operation not allowed.");
      } else if (error.code == "auth/weak-password") {
        errorFun("The password is too weak.");
      }
    }
  };

  //log out
  const logOut = async () => {
    try {
      await signOut(auth);

      navigate("/sign in");
      setIsLoggedIn(false);
      toast.success("You are logged out please, sign in!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      errorFun(error.message);
    }
  };
  return (
    <UserContext.Provider
      value={{
        handleSignIn,
        user,
        handleSignUp,
        logOut,
        setUser,handleGoogleSignIn
      
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
