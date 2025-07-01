// app/context/StateProvider.tsx
"use client";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

const StateContext = createContext();

export function StateProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState({});
  const [userLogged, setUserLogged] = useState(false);
  return (
    <StateContext.Provider
      value={{ userData, setUserData, userLogged, setUserLogged }}
    >
      {children}
    </StateContext.Provider>
  );
}
export function useStateContext() {
  return useContext(StateContext);
}
