import React from "react";

export function Status() {
  return (
    <div>
      <div className="flex mb-5">
        <div className="rounded-l-[8px] border-[1px] border-r-0 p-1 w-[180px] h-[75px]  py-[15px]">
          <input
            type="text"
            placeholder="Откуда"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[180px]"
          />
        </div>
        <div className="border-[1px] rounded-r-[8px] border-l-0 p-1 w-[180px] h-[75px] py-[15px] mr-10">
          <input
            type="text"
            placeholder="Куда"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[180px]"
          />
        </div>
        <div className=" border-[1px] rounded-[8px] p-1 w-[180px] h-[75px]  py-[15px]">
          <input
            type="text"
            placeholder="Когда"
            className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2  w-[180px]"
          />
        </div>
      </div>
      <button className="rounded-[8px] border-[1px] border-black p-5 bg-[#97ba1e] text-white font-[Manrope-Bold] text-[16px]">
        Проверить статус
      </button>
    </div>
  );
}
