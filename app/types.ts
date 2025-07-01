export interface FlightData {
  id: number;
  date: string;
  time: string;
  from: string;
  to: string;
  flightNumber: string;
  gate: string;
  remarks: string;
  type: string;
}

export interface TicketDB {
  id: number;
  flightID: number;
  name: string;
  surname: string;
  birthday: string;
  ticketNumber: string;
  type: string;
  registered: boolean;
}
