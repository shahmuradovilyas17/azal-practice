import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function Booking() {
  const router = useRouter();

  const [surnameState, setSurnameState] = useState("");
  const [ticketNumberState, setTicketNumberState] = useState("");

  const handleClick = () => {
    router.push(
      `/booking?surname=${encodeURIComponent(
        surnameState
      )}&ticketNumber=${encodeURIComponent(ticketNumberState)}`
    );
  };

  return (
    <div className="p-5">
      <div className="flex mb-5 bg-white rounded-[8px]">
        <div className="rounded-l-[8px] border-[1px] border-r-0 p-1 w-[250px] h-[75px]  py-[15px] overflow-ellipsis">
          <input
            type="text"
            placeholder="Sərnişinin soyadı"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[250px]"
            onChange={(e) => setSurnameState(e.target.value)}
          />
        </div>
        <div className="border-[1px] border-l-0 p-1 w-[250px] h-[75px] py-[15px]  overflow-ellipsis rounded-r-[8px]">
          <input
            type="text"
            placeholder="Biletin nömrəsi"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[250px]"
            onChange={(e) => setTicketNumberState(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="rounded-[8px] border-[1px] border-black py-5 px-20 bg-[#97ba1e] text-white font-[Manrope-Bold] text-[16px] hover:cursor-pointer"
          onClick={handleClick}
        >
          Axtar
        </button>
      </div>
    </div>
  );
}
