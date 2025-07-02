"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useStateContext } from "../Components/context";

export default function BookingPage() {
  const params = useSearchParams();
  const surname = params.get("surname");
  const ticketNumber = params.get("ticketNumber");
  const router = useRouter();

  const { flightDB, ticketDB } = useStateContext();

  const filteredData = ticketDB.filter((ticket) => {
    return ticket.surname === surname && ticket.ticketNumber === ticketNumber;
  });

  let filteredFlight = {};

  flightDB.filter((flight) => {
    return filteredData.forEach((ticket) => {
      if (ticket.flightID === flight.id) {
        filteredFlight = flight;
      }
    });
  });

  return (
    <div className="min-h-[100vh] p-10 max-w-290 m-auto">
      {filteredData.map((ticket) => {
        return (
          <div key={ticket.id} className="bg-blue-100 p-10 rounded-[15px]">
            <div className="flex mb-10 justify-between text-[20px] font-[Manrope-Regular]">
              <div>
                {filteredFlight.from} - {filteredFlight.to}
              </div>
              <div className="text-center">
                <div>
                  <span className="font-[Manrope-Bold]">Tarix:</span>{" "}
                  {filteredFlight.date}
                </div>
                <div>
                  <span className="font-[Manrope-Bold]">Vaxt:</span>{" "}
                  {filteredFlight.time}
                </div>
              </div>
              <div>
                <span className="font-[Manrope-Bold]">Biletin Nömrəsi: </span>
                {ticket.ticketNumber}
              </div>
            </div>

            <div className="flex gap-10 text-[20px] font-[Manrope-Regular] mb-10">
              <div>
                <span className="font-[Manrope-Bold]">Ad: </span>
                {ticket.name}
              </div>
              <div>
                <span className="font-[Manrope-Bold]">Soyad: </span>
                {ticket.surname}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
