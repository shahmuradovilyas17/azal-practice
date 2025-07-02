import React from "react";
import { useRouter } from "next/navigation";

export function BuyTicket() {
  const router = useRouter();
  return (
    <div className="p-5">
      <div className="flex mb-5 bg-white rounded-[8px]">
        <div className="rounded-l-[8px] border-[1px] border-r-0 p-1 w-[180px] h-[75px]  py-[15px]">
          <input
            type="text"
            placeholder="Hardan"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[180px]"
          />
        </div>
        <div className="border-[1px] border-l-0 p-1 w-[180px] h-[75px] py-[15px]">
          <input
            type="text"
            placeholder="Haraya"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[180px]"
          />
        </div>
        <div className=" border-[1px] border-r-0 p-1 w-[180px] h-[75px]  py-[15px]">
          <input
            type="text"
            placeholder="Gediş"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[180px]"
          />
        </div>
        <div className="rounded-r-[8px] border-[1px] border-l-0 p-1 w-[180px] h-[75px] py-[15px]">
          <input
            type="text"
            placeholder="Gəliş"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[180px]"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="rounded-[8px] border-[1px]  p-1 w-[210px] h-[75px]  py-[15px] bg-white">
          <input
            type="text"
            placeholder="Sərnişin sayı"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 "
          />
        </div>
        <button
          className="rounded-[8px] border-[1px] border-black py-5 px-20 bg-[#97ba1e] text-white font-[Manrope-Bold] text-[16px] hover:cursor-pointer"
          onClick={() => router.push("/buy")}
        >
          Axtar
        </button>
      </div>
    </div>
  );
}
