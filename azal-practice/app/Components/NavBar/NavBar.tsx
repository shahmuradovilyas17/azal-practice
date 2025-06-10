"use client";
// import React, { useState } from "react";
import { NavBarButton } from "./NavBarButton";
import { NavBarContent } from "./NavBarContent";
import { NavBarServices } from "./NavBarServices";

export function NavBar() {
  // const [contentState, setContentState] = useState({
  //   buy: true,
  //   register: false,
  //   bookings: false,
  //   flightStatus: false,
  //   arrival: false,
  //   departure: false,
  //   liveMap: false,
  // });

  return (
    <div id="top-section" className="w-full">
      <div id="top-section-container" className="max-w-290 w-full relative">
        <div>
          <div id="top-section-container-root" className="mt-10">
            <div>
              <div
                id="top-section-container-root-tabs"
                className="flex gap-2 overflow-x-auto text-white "
              >
                <NavBarButton text="Купить билет" stateName="buy" />
                <NavBarButton text="Регистрация на рейс" stateName="register" />
                <NavBarButton text="Мои бронирования" stateName="bookings" />
                <NavBarButton text="Статус рейса" stateName="flightStatus" />
                <NavBarButton text="Arrival" stateName="arrival" />
                <NavBarButton text="Departure" stateName="departure" />
                <NavBarButton text="Live Map" stateName="liveMap" />
              </div>
              <NavBarContent />
            </div>
            <NavBarServices />
          </div>
        </div>
      </div>
    </div>
  );
}
