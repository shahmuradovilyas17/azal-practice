"use client";
import { DataTable } from "@/components/ui/data-table";
import React, { useEffect, useState } from "react";
import { arrColumns } from "@/app/columns";
import { getArrivals } from "@/app/services";
import type { FlightData } from "@/app/types";

export function Arrival() {
  const [data, setData] = useState<FlightData[]>([]);

  useEffect(() => {
    getArrivals().then(setData);
  }, []);

  return (
    <main className="flex flex-col items-center justify-between p-[24px]">
      <DataTable columns={arrColumns} data={data} />
    </main>
  );
}
