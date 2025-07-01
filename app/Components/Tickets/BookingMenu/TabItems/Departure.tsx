"use client";
import { DataTable } from "@/components/ui/data-table";
import React, { useEffect, useState } from "react";
import { depColumns } from "@/app/columns";
import type { FlightData } from "@/app/types";
import { useStateContext } from "@/app/Components/context";

export function Departure() {
  const [data, setData] = useState<FlightData[]>([]);
  const { flightDB } = useStateContext();

  useEffect(() => {
    const filteredDB = Object.values(flightDB).filter((flight) => {
      return flight.type === "Departure";
    });

    setData(filteredDB);
  }, [flightDB]);

  return (
    <main className="flex  flex-col items-center justify-between p-[24px]">
      <DataTable columns={depColumns} data={data} />
    </main>
  );
}
