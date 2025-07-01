"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getFlightData, getTicketData } from "../services";
import { TicketDB, FlightData } from "../types";

export default function RegisterPage() {
  const params = useSearchParams();
  const surname = params.get("surname");
  const ticketNumber = params.get("ticketNumber");

  const [data, setData] = useState<TicketDB[]>([]);
  const [flightData, setFlightData] = useState<FlightData[]>([]);

  useEffect(() => {
    getTicketData().then(setData);
    getFlightData().then(setFlightData);
  }, []);

  const filteredData = data.filter((ticket) => {
    return ticket.surname === surname && ticket.ticketNumber === ticketNumber;
  });

  let filteredFlight = {};

  flightData.filter((flight) => {
    return filteredData.forEach((ticket) => {
      if (ticket.flightID === flight.id) {
        filteredFlight = flight;
      }
    });
  });

  // const getRegistered = () => {
  //   fetch(
  //     `https://66ce31f6199b1d6286880fb0.mockapi.io/flight/TicketDB?id=${ticketId}`,
  //     {
  //       method: "PUT",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify({ registered: true }),
  //     }
  //   );
  // };

  return (
    <>
      {filteredData.map((ticket) => {
        return (
          <div key={ticket.id}>
            <div>
              <>
                <div>
                  {filteredFlight.from} - {filteredFlight.to}
                </div>
                <div>{filteredFlight.date}</div>
                <div>{filteredFlight.time}</div>
              </>
            </div>

            <div>{ticket.name}</div>
            <div>{ticket.surname}</div>
            <div>{ticket.ticketNumber}</div>
            {ticket.registered === true ? (
              <div>Вы уже зарегистрированы</div>
            ) : (
              <button>Зарегистрироваться</button>
            )}
          </div>
        );
      })}
    </>
  );
}
