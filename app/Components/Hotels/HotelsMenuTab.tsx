import React from "react";

export function HotelsMenuTab() {
  return (
    <div className=" bg-gray-200">
      <div className="max-w-290 m-auto">
        <div className="font-[Manrope-Bold] text-5xl text-center">
          Лучшие отели по всему миру
        </div>
        <div className="flex   p-10 m-auto">
          <div className="flex m-auto ">
            <div className="p-5">
              <div className="flex mb-5">
                <div className="rounded-[8px] border-[1px]  p-1 w-[500px] h-[75px]  py-[15px] mr-[20px]">
                  <input
                    type="text"
                    placeholder="Город/Страна"
                    className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2  w-[180px]"
                  />
                </div>
                <div className="rounded-l-[8px] border-[1px] border-r-0 p-1 w-[180px] h-[75px]  py-[15px]">
                  <input
                    type="text"
                    placeholder="Когда"
                    className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[180px]"
                  />
                </div>
                <div className="rounded-r-[8px] border-[1px] border-l-0 p-1 w-[180px] h-[75px] py-[15px]">
                  <input
                    type="text"
                    placeholder="Обратно"
                    className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[180px]"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="rounded-[8px] border-[1px]  p-1 w-[210px] h-[75px]  py-[15px]">
                  <input
                    type="text"
                    placeholder="Количество пассажиров"
                    className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 "
                  />
                </div>
                <button className="rounded-[8px] border-[1px] border-black p-5 bg-[#97ba1e] text-white font-[Manrope-Bold] text-[16px]">
                  Поиск
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
