import React from "react";
import { useRouter } from "next/navigation";

export function Booking() {
  const router = useRouter();

  return (
    <div className="p-5">
      <div className="flex mb-5 bg-white rounded-[8px]">
        <div className="rounded-l-[8px] border-[1px] border-r-0 p-1 w-[250px] h-[75px]  py-[15px] overflow-ellipsis">
          <input
            type="text"
            placeholder="Фамилия пассажира"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[250px]"
          />
        </div>
        <div className="border-[1px] border-l-0 p-1 w-[250px] h-[75px] py-[15px]  overflow-ellipsis rounded-r-[8px]">
          <input
            type="text"
            placeholder="Номер заказа, билета или брони"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[250px]"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <button
          className="rounded-[8px] border-[1px] border-black py-5 px-20 bg-[#97ba1e] text-white font-[Manrope-Bold] text-[16px]"
          onClick={() => router.push("/booking")}
        >
          Найти
        </button>
      </div>
    </div>
  );
}
