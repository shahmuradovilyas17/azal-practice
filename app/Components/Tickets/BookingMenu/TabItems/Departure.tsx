"use client";
import { DataTable } from "@/components/ui/data-table";
import React, { useEffect, useState } from "react";
import { depColumns } from "@/app/columns";
import { getDepartures } from "@/app/services";
import type { FlightData } from "@/app/types";

export function Departure() {
  const [data, setData] = useState<FlightData[]>([]);

  useEffect(() => {
    getDepartures().then(setData);
  }, []);

  return (
    <main className="flex  flex-col items-center justify-between p-[24px]">
      <DataTable columns={depColumns} data={data} />
    </main>
  );
}
