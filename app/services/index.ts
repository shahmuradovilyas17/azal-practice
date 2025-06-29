import { FlightData } from "../types.js";

const getDepartures = async (): Promise<FlightData[]> => {
  const url = new URL(
    "https://66ce31f6199b1d6286880fb0.mockapi.io/flight/FlightDB"
  );

  url.searchParams.append("type", "departure");
  const data = await fetch(url);

  return data.json();
};

const getArrivals = async (): Promise<FlightData[]> => {
  const url = new URL(
    "https://66ce31f6199b1d6286880fb0.mockapi.io/flight/FlightDB"
  );
  url.searchParams.append("type", "arrival");
  const data = await fetch(url);

  return data.json();
};

const getFlightData = async (): Promise<FlightData[]> => {
  const url = new URL(
    "https://66ce31f6199b1d6286880fb0.mockapi.io/flight/FlightDB"
  );
  const data = await fetch(url);

  return data.json();
};

export { getDepartures, getArrivals, getFlightData };
