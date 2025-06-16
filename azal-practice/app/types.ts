export interface Departure {
  id: number;
  time: string;
  destination: string;
  flightNumber: string;
  gate: string;
  remarks: string;
}

export interface Arrival {
  id: number;
  time: string;
  from: string;
  flightNumber: string;
  gate: string;
  remarks: string;
}
