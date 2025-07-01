"use client";
import { DataTable } from "@/components/ui/data-table";
import React, { useEffect, useState } from "react";
import { arrColumns } from "@/app/columns";
import type { FlightData } from "@/app/types";
import { useStateContext } from "@/app/Components/context";

export function Arrival() {
  const [data, setData] = useState<FlightData[]>([]);
  const { flightDB } = useStateContext();

  useEffect(() => {
    const filteredDB = Object.values(flightDB).filter((flight) => {
      return flight.type === "Arrival";
    });

    setData(filteredDB);
  }, [flightDB]);

  return (
    <main className="flex flex-col items-center justify-between p-[24px]">
      <DataTable columns={arrColumns} data={data} />
    </main>
  );
}
