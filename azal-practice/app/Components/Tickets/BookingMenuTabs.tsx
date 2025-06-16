/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { BookingMenuTabsItem } from "./BookingMenuTabsItem";
import { BuyTicket } from "./BookingMenu/TabItems/BuyTicket";
import LiveMap from "./BookingMenu/TabItems/LiveMap";
import Departure from "./BookingMenu/TabItems/Departure";
import Arrival from "./BookingMenu/TabItems/Arrival";
import Status from "./BookingMenu/TabItems/Status";
import Booking from "./BookingMenu/TabItems/Booking";
import Register from "./BookingMenu/TabItems/Register";

export function BookingMenuTabs() {
  const [activeTab, setActiveTab] = React.useState("buy");

  const tabsArray = [
    { text: "Купить", id: "buy" },
    { text: "Регистрация", id: "register" },
    { text: "Бронирования", id: "booking" },
    { text: "Статус", id: "status" },
    { text: "Arrival", id: "arrival" },
    { text: "Departure", id: "departure" },
    { text: "Карта", id: "map" },
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
              case "map":
                return <LiveMap />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}
