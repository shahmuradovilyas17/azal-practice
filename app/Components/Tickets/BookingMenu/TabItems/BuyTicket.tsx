import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function BuyTicket() {
  const router = useRouter();

  const [fromState, setFromState] = useState("");
  const [toState, setToState] = useState("");
  const [arrDateState, setArrDateState] = useState("");
  const [depDateState, setDepDateState] = useState("");
  const [passState, setPassState] = useState("");

  const handleClick = () => {
    router.push(
      `/buy?from=${encodeURIComponent(fromState)}&to=${encodeURIComponent(
        toState
      )}&arrDate=${encodeURIComponent(
        arrDateState
      )}&depDate=${encodeURIComponent(depDateState)}&pass=${encodeURIComponent(
        passState
      )}`
    );
  };

  return (
    <div className="p-5">
      <div className="flex mb-5 bg-white rounded-[8px]">
        <div className="rounded-l-[8px] border-[1px] border-r-0 p-1 w-[180px] h-[75px]  py-[15px]">
          <input
            type="text"
            placeholder="Hardan"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[180px]"
            onChange={(e) => setFromState(e.target.value)}
          />
        </div>
        <div className="border-[1px] border-l-0 p-1 w-[180px] h-[75px] py-[15px]">
          <input
            type="text"
            placeholder="Haraya"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[180px]"
            onChange={(e) => setToState(e.target.value)}
          />
        </div>
        <div className=" border-[1px] border-r-0 p-1 w-[180px] h-[75px]  py-[15px]">
          <input
            type="text"
            placeholder="Gediş"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[180px]"
            onChange={(e) => setDepDateState(e.target.value)}
          />
        </div>
        <div className="rounded-r-[8px] border-[1px] border-l-0 p-1 w-[180px] h-[75px] py-[15px]">
          <input
            type="text"
            placeholder="Gəliş"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[180px]"
            onChange={(e) => setArrDateState(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="rounded-[8px] border-[1px]  p-1 w-[210px] h-[75px]  py-[15px] bg-white">
          <input
            type="text"
            placeholder="Sərnişin sayı"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 "
            onChange={(e) => setPassState(e.target.value)}
          />
        </div>
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
