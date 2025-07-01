"use client";
import { useSearchParams } from "next/navigation";
import { useStateContext } from "../Components/context";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const params = useSearchParams();
  const surname = params.get("surname");
  const ticketNumber = params.get("ticketNumber");
  const router = useRouter();

  const { flightDB, ticketDB } = useStateContext();

  const filteredData = ticketDB.filter((ticket) => {
    return ticket.surname === surname && ticket.ticketNumber === ticketNumber;
  });

  let filteredFlight = {};

  flightDB.filter((flight) => {
    return filteredData.forEach((ticket) => {
      if (ticket.flightID === flight.id) {
        filteredFlight = flight;
      }
    });
  });

  const getRegistered = () => {
    ticketDB.map((ticket) => {
      if (ticket.surname === surname && ticket.ticketNumber === ticketNumber) {
        return (ticket.registered = true);
      }
    });

    alert("Siz qeydiyyatdan uğurla keçdiniz");
    router.push("/");
  };

  return (
    <div className="min-h-[100vh] p-10 max-w-290 m-auto">
      {filteredData.map((ticket) => {
        return (
          <div key={ticket.id} className="bg-blue-100 p-10 rounded-[15px]">
            <div className="flex mb-10 justify-between text-[20px] font-[Manrope-Regular]">
              <div>
                {filteredFlight.from} - {filteredFlight.to}
              </div>
              <div className="text-center">
                <div>
                  <span className="font-[Manrope-Bold]">Tarix:</span>{" "}
                  {filteredFlight.date}
                </div>
                <div>
                  <span className="font-[Manrope-Bold]">Vaxt:</span>{" "}
                  {filteredFlight.time}
                </div>
              </div>
              <div>
                <span className="font-[Manrope-Bold]">Biletin Nömrəsi: </span>
                {ticket.ticketNumber}
              </div>
            </div>

            <div className="flex gap-10 text-[20px] font-[Manrope-Regular] mb-10">
              <div>
                <span className="font-[Manrope-Bold]">Ad: </span>
                {ticket.name}
              </div>
              <div>
                <span className="font-[Manrope-Bold]">Soyad: </span>
                {ticket.surname}
              </div>
            </div>

            {ticket.registered === true ? (
              <div className="bg-blue-200 p-5 rounded-[15px] inline-block text-[16px] font-[Manrope-Regular]">
                Siz artıq qeydiyyatdan keçmisiniz
              </div>
            ) : (
              <button
                onClick={() => {
                  getRegistered();
                }}
                className="rounded-[8px] border-1 p-5 bg-[#97ba1e] text-white border-black font-[Manrope-Bold] text-[16px] hover:cursor-pointer"
              >
                Qeydiyyatdan keç
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
