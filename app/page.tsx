"use client";
import { BookingMenuSelect } from "./Components/Tickets/BookingMenuSelect";
import { TicketsMenuTabs } from "./Components/Tickets/BookingMenu/TicketsMenuTabs";
import "./globals.css";
import { SpecialOffers } from "./Components/Tickets/Special Offers/SpecialOffers";
import { PopularDestinations } from "./Components/Tickets/PopularDestinations/PopularDestinations";
import { HotelsMenuTab } from "./Components/Hotels/HotelsMenuTab";
import React from "react";
import { SpecialOffersHotels } from "./Components/Hotels/SpecialOffersHotels/SpecialOffersHotels";
import { PopularPlaces } from "./Components/Hotels/PopularPlaces/PopularPlaces";

export default function Home() {
  const [activeSelect, setActiveSelect] = React.useState("tickets");
  return (
    <>
      <div className="">
        <BookingMenuSelect
          setActiveSelect={setActiveSelect}
          activeSelect={activeSelect}
        />
        {(() => {
          switch (activeSelect) {
            case "tickets":
              return (
                <>
                  <TicketsMenuTabs />
                  <SpecialOffers />
                  <PopularDestinations />
                </>
              );
            case "hotels":
              return (
                <>
                  <HotelsMenuTab />
                  <SpecialOffersHotels />
                  <PopularPlaces />
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
    </>
  );
}
