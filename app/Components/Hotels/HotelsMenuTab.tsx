import React from "react";

export function HotelsMenuTab() {
  return (
    <div className="">
      <div className="max-w-290 m-auto bg-blue-100 rounded-[15px] p-5">
        <div className="font-[Manrope-Bold] text-5xl text-center">
          Dünya üzərində ən yaxşı otellər
        </div>
        <div className="flex p-10 m-auto">
          <div className="flex m-auto ">
            <div className="p-5">
              <div className="flex mb-5">
                <div className="rounded-[8px] border-[1px]  p-1 w-[500px] h-[75px]  py-[15px] mr-[20px] bg-white">
                  <input
                    type="text"
                    placeholder="Şəhər/Ölkə"
                    className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2  w-[180px]"
                  />
                </div>
                <div className="rounded-l-[8px] border-[1px] border-r-0 p-1 w-[180px] h-[75px]  py-[15px] bg-white">
                  <input
                    type="text"
                    placeholder="Giriş"
                    className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 border-r-[1px] w-[175px]"
                  />
                </div>
                <div className="rounded-r-[8px] border-[1px] border-l-0 p-1 w-[180px] h-[75px] py-[15px] bg-white">
                  <input
                    type="text"
                    placeholder="Çıxış"
                    className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 w-[180px]"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="rounded-[8px] border-[1px]  p-1 w-[210px] h-[75px]  py-[15px] bg-white">
                  <input
                    type="text"
                    placeholder="İnsan Sayı"
                    className="text-[16px] font-[Manrope-Regular] text-[#222a37] outline-none p-2 "
                  />
                </div>
                <button className="rounded-[8px] border-[1px] border-black py-5 px-20 bg-[#97ba1e] text-white font-[Manrope-Bold] text-[16px]">
                  Axtar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
