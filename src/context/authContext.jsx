import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from 'react-query'
import request from "../config/request";
import { auth, verifyEmailLinkLogin } from "../config/firebase";


  const serverURL = import.meta.env.VITE_SERVER_URL || "http://localhost:5000";

const authContext = React.createContext({ user: {} });

export const useAuthContext = () => useContext(authContext);

export const AuthContextProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [setupCompleted, setSetupCompleted] = useState(false);
  const [counter, setCounter] = useState(0);
  const userDataQuery = useQuery(["userData"], async ()=>{
    const{ data } = await request.get("/user/fetchdata")
    return data
  },{enabled: !!(user && setupCompleted)})

  const limit = userDataQuery.isSuccess && userDataQuery.data?.monthly_limit || 30;
  const count = userDataQuery.isSuccess && userDataQuery.data?.monthly_requests_count || 0;
  const value = { user,setupCompleted, loading, error, setCounter ,userDataQuery,userData: userDataQuery.isSuccess ? userDataQuery.data : {},limit,count};
  
  console.log("userData",userDataQuery?.data)
  useEffect(() => {
    (async () => {
      if (user) {
        const accessToken  =  await user.getIdToken()
        request.defaults.headers.common["access-token"] =accessToken
        const setupResponse = await request.get("/user/setup")
        setSetupCompleted(true)
        console.log({setupResponse,accessToken});
        fetch(serverURL + "/getcookie?idToken=" + user.accessToken)
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            if (response.success) {
              Cookies.set("fb-session", response.sessionCookie);

            } else {
              // Cookies.remove("fb-session");
            }
          });
      } 
    })();
  }, [user]);
  useEffect(()=>{
    if(!user && !loading){
      verifyEmailLinkLogin()
    }
  },[loading])
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
