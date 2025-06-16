/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { BookingMenuTabsItem } from "./BookingMenuTabsItem";
import { BuyTicket } from "./TabItems/BuyTicket";
import { LiveMap } from "./TabItems/LiveMap";
import { Departure } from "./TabItems/Departure";
import { Arrival } from "./TabItems/Arrival";
import { Status } from "./TabItems/Status";
import { Booking } from "./TabItems/Booking";
import { Register } from "./TabItems/Register";

export function BookingMenuTabs() {
  const [activeTab, setActiveTab] = React.useState("buy");

  const tabsArray = [
    { keyId: 1, text: "Купить", id: "buy" },
    { keyId: 2, text: "Регистрация", id: "register" },
    { keyId: 3, text: "Бронирования", id: "booking" },
    { keyId: 4, text: "Статус", id: "status" },
    { keyId: 5, text: "Arrival", id: "arrival" },
    { keyId: 6, text: "Departure", id: "departure" },
  ];
  console.log(activeTab);

  return (
    <div className=" bg-gray-200">
      <div className="flex  gap-5 max-w-290 p-10 m-auto">
        <div className="flex flex-col w-[250px] gap-1">
          {tabsArray.map((tab) => (
            <BookingMenuTabsItem
              id={tab.id}
              text={tab.text}
              setActiveTab={setActiveTab}
              key={tab.keyId}
            />
          ))}
        </div>
        <div>
          {(() => {
            switch (activeTab) {
              case "buy":
                return <BuyTicket />;
              case "register":
                return <Register />;
              case "booking":
                return <Booking />;
              case "status":
                return <Status />;
              case "arrival":
                return <Arrival />;
              case "departure":
                return <Departure />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
