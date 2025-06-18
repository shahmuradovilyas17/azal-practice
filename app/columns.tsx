"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Arrival, Departure } from "./types";

export const depColumns: ColumnDef<Departure>[] = [
  {
    accessorKey: "time",
    header: "Time",
  },

  {
    accessorKey: "destination",
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

export const arrColumns: ColumnDef<Arrival>[] = [
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
