import React, { useContext, useState, useEffect, useCallback } from 'react';
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Token को तुरंत state में भी अपडेट करें।
  };

  const isLoggedIn = !!token;
  console.log(`is logged in ${isLoggedIn}`);

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const userAuthentication = useCallback(async () => {
    if (!token) return; // अगर token नहीं है, तो API call न करें।

    try {
      const response = await fetch("http://localhost:4022/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`user data ${data.userData}`);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error Fetching user Data", error);
    }
  }, [token]); 

  useEffect(() => {
    userAuthentication();
  }, [userAuthentication]); 

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
