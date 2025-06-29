"use client";

import { ColumnDef } from "@tanstack/react-table";
import { FlightData } from "./types";

export const depColumns: ColumnDef<FlightData>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },

  {
    accessorKey: "to",
    header: "Destination",
  },
  {
    accessorKey: "flightNumber",
    header: "Flight Number",
  },
  {
    accessorKey: "gate",
    header: "Gate",
  },
  {
    accessorKey: "remarks",
    header: "Remarks",
  },
];

export const arrColumns: ColumnDef<FlightData>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "from",
    header: "From",
  },
  {
    accessorKey: "flightNumber",
    header: "Flight Number",
  },
  {
    accessorKey: "gate",
    header: "Gate",
  },
  {
    accessorKey: "remarks",
    header: "Remarks",
  },
];
