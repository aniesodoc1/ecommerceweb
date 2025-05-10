import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";


export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const currentUser = useSelector(state => state.user.user);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
  const newSocket = io(import.meta.env.VITE_SERVER_URL, {
    withCredentials: true,
  });
  setSocket(newSocket);

  return () => {
    newSocket.disconnect();
  };
}, []);


  useEffect(() => {
  currentUser && socket?.emit("newUser", currentUser.id);

    currentUser && socket?.emit("newUser", currentUser.id);

  }, [currentUser, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
