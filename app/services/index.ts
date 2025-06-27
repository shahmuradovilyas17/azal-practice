import { Departure } from "../[lang]/types.js";
import { Arrival } from "../[lang]/types.js";

const getDepartures = async (): Promise<Departure[]> => {
  const data = await fetch(
    "https://66ce31f6199b1d6286880fb0.mockapi.io/flight/Departure"
  );

  return data.json();
};

const getArrivals = async (): Promise<Arrival[]> => {
  const data = await fetch(
    "https://66ce31f6199b1d6286880fb0.mockapi.io/flight/Arrival"
  );

  return data.json();
};

export { getDepartures, getArrivals };
