// app/context/StateProvider.tsx
"use client";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

const StateContext = createContext();

export function StateProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState({});
  const [userLogged, setUserLogged] = useState(false);

  const ticketDB = [
    {
      id: 1,
      flightID: 1,
      name: "Ilyas",
      surname: "Shakhmuradov",
      birthday: "17.03.2004",
      ticketNumber: "213123",
      type: "Budget",
      registered: false,
    },
    {
      id: 2,
      flightID: 7,
      name: "Ali",
      surname: "Aliyev",
      birthday: "12.02.2004",
      ticketNumber: "AD1213",
      type: "Business",
      registered: true,
    },
    {
      id: 3,
      flightID: 4,
      name: "Musa",
      surname: "Alasgarov",
      birthday: "23.06.2004",
      ticketNumber: "2121GB",
      type: "Classic",
      registered: false,
    },
  ];

  const flightDB = [
    {
      id: 1,
      date: "29.06.2025",
      time: "15:30",
      from: "Baku",
      to: "Tbilisi",
      flightNumber: "AZ1142",
      gate: "A101",
      remarks: "On Flight",
      type: "Departure",
    },
    {
      id: 2,
      date: "29.06.2025",
      time: "11:10",
      from: "Moscow",
      to: "Baku",
      flightNumber: "AA1722",
      gate: "101A",
      remarks: "gate open",
      type: "Arrival",
    },
    {
      id: 3,
      date: "01.07.25",
      time: "09:10",
      from: "Moscow",
      to: "Tbilisi",
      flightNumber: "A722",
      gate: "1B",
      remarks: "cancelled",
      type: "Outside",
    },
    {
      id: 4,
      date: "05.07.2025",
      time: "22:15",
      from: "Tel-Aviv",
      to: "Tehran",
      flightNumber: "JEW1941",
      gate: "HIT12",
      remarks: "On time",
      type: "Outside",
    },
    {
      id: 5,
      date: "15.07.2025",
      time: "15:30",
      from: "Baku",
      to: "Tbilisi",
      flightNumber: "AZ1142",
      gate: "A101",
      remarks: "On Flight",
      type: "Departure",
    },
    {
      id: 6,
      date: "16.07.2025",
      time: "15:30",
      from: "Baku",
      to: "Tbilisi",
      flightNumber: "AZ1142",
      gate: "A101",
      remarks: "On Flight",
      type: "Departure",
    },
    {
      id: 7,
      date: "06.07.2025",
      time: "11:10",
      from: "Moscow",
      to: "Baku",
      flightNumber: "AA1722",
      gate: "101A",
      remarks: "gate open",
      type: "Arrival",
    },
    {
      id: 8,
      date: "13.07.2025",
      time: "11:10",
      from: "Moscow",
      to: "Baku",
      flightNumber: "AA1722",
      gate: "101A",
      remarks: "gate open",
      type: "Arrival",
    },
    {
      id: 9,
      date: "29.06.2025",
      time: "15:10",
      from: "Moscow",
      to: "Baku",
      flightNumber: "AA1717",
      gate: "10A",
      remarks: "Delayed",
      type: "Arrival",
    },
    {
      id: 10,
      date: "29.06.2025",
      time: "07:10",
      from: "Moscow",
      to: "Baku",
      flightNumber: "A1715",
      gate: "101A",
      remarks: "gate open",
      type: "Arrival",
    },
    {
      id: 11,
      date: "29.06.2025",
      time: "23:50",
      from: "Moscow",
      to: "Baku",
      flightNumber: "AA1722",
      gate: "101A",
      remarks: "canceled",
      type: "Arrival",
    },
  ];
  return (
    <StateContext.Provider
      value={{
        userData,
        setUserData,
        userLogged,
        setUserLogged,
        flightDB,
        ticketDB,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
export function useStateContext() {
  return useContext(StateContext);
}
