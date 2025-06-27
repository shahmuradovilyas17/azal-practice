"use client";
import { BookingMenuSelect } from "./Components/Tickets/BookingMenuSelect";
import { TicketsMenuTabs } from "./Components/Tickets/BookingMenu/TicketsMenuTabs";
import { Header } from "./Components/Tickets/Header";
import "./globals.css";
import { SpecialOffers } from "./Components/Tickets/Special Offers/SpecialOffers";
import { PopularDestinations } from "./Components/Tickets/PopularDestinations/PopularDestinations";
import { Footer } from "./Components/Tickets/Footer";
import { HotelsMenuTab } from "./Components/Hotels/HotelsMenuTab";
import React from "react";

export default function Home() {
  const [activeSelect, setActiveSelect] = React.useState("tickets");
  return (
    <>
      <div className="">
        <Header />
        <BookingMenuSelect setActiveSelect={setActiveSelect} />
        {(() => {
          switch (activeSelect) {
            case "tickets":
              return <TicketsMenuTabs />;
            case "hotels":
              return <HotelsMenuTab />;
            default:
              return null;
          }
        })()}
        <SpecialOffers />
        <PopularDestinations />
        <Footer />
      </div>
    </>
  );
}
