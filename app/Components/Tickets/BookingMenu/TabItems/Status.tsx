import React from "react";
import { useRouter } from "next/navigation";

export function Status() {
  const router = useRouter();
  return (
    <div className="p-5">
      <div className="flex mb-5 ">
        <div className="rounded-l-[8px] border-[1px] border-r-0 p-1 w-[180px] h-[75px]  py-[15px] bg-white">
          <input
            type="text"
            placeholder="Откуда"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 pr-0 border-r-[1px]  w-[175px]"
          />
        </div>
        <div className="border-[1px]  rounded-r-[8px] border-l-0 p-1 w-[180px] h-[75px] py-[15px] mr-10 bg-white">
          <input
            type="text"
            placeholder="Куда"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[180px]"
          />
        </div>
        <div className=" border-[1px] rounded-[8px] p-1 w-[180px] h-[75px]  py-[15px] bg-white">
          <input
            type="text"
            placeholder="Когда"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2  w-[180px]"
          />
        </div>
      </div>
      <button
        className="rounded-[8px] border-[1px] border-black p-5 bg-[#97ba1e] text-white font-[Manrope-Bold] text-[16px]"
        onClick={() => router.push("/status")}
      >
        Проверить статус
      </button>
    </div>
  );
}
