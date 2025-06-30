"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getArrivals } from "../services";
import { FlightData } from "../types";

export default function StatusPage() {
  const params = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const when = params.get("when");

  const [data, setData] = useState<FlightData[]>([]);

  useEffect(() => {
    getArrivals().then(setData);
  }, []);

  const filteredData = data.filter((flight) => {
    return flight.from === from && flight.to === to && flight.date === when;
  });

  return (
    <div className="p-5">
      <div className="max-w-200 m-auto flex flex-col">
        <div className="p-5 flex justify-between mb-10 border-b-1 border-gray-300">
          <h1>
            {from} - {to}
          </h1>
          <h1>{when}</h1>
        </div>
        {filteredData.map((flight) => {
          return (
            <div
              key={flight.id}
              className="flex justify-between p-5 border-b-1 border-gray-300"
            >
              <h2 className="text-lg font-bold">{flight.flightNumber}</h2>
              <p>{flight.time}</p>
              <p>{flight.remarks}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
