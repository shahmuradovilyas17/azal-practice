"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FlightData } from "../types";
import { useStateContext } from "../Components/context";

export default function StatusPage() {
  const params = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const when = params.get("when");

  const [data, setData] = useState<FlightData[]>([]);

  const { flightDB } = useStateContext();

  useEffect(() => {
    setData(flightDB);
  }, [flightDB]);

  const filteredData = data.filter((flight) => {
    return flight.from === from && flight.to === to && flight.date === when;
  });

  return (
    <div className="p-5 min-h-[100vh]">
      <div className="max-w-200 m-auto flex flex-col">
        <div className="p-5 flex justify-between mb-10 border-b-1 border-gray-300 text-[24px] font-[Manrope-Bold]">
          <h1>
            {from} - {to}
          </h1>
          <h1>{when}</h1>
        </div>
        {filteredData.map((flight) => {
          return (
            <div key={flight.id}>
              <div className="flex justify-between p-10  bg-blue-200 rounded-t-[15px]">
                <h2 className="text-[18px] font-[Manrope-Regular]">
                  {flight.flightNumber}
                </h2>
                <p className="text-[18px] font-[Manrope-Regular]">
                  {flight.time}
                </p>
                <p className="text-[18px] font-[Manrope-Regular]">
                  {flight.remarks}
                </p>
              </div>
              <div className="flex justify-between p-10 mb-5 bg-blue-100 rounded-b-[15px]">
                Модель самолёта, Ворота
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
