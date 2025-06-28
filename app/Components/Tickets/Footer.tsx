import React from "react";

export function Footer() {
  return (
    <div className=" border-t-2 pt-8 pb-8">
      <div className="max-w-290 m-auto flex justify-between ">
        <div className="flex flex-col gap-3">
          <div className="text-[18px] font-[Manrope-Bold]">Developed by:</div>
          <div className="text-[16px] font-[Manrope-Regular]">
            Ilyas Shakhmuradov
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <b className="text-[18px] font-[Manrope-Bold]">References:</b>
          <a
            href="https://www.s7.ru/ru/"
            className="text-[16px] font-[Manrope-Regular]"
          >
            S7 Airlines
          </a>
          <a
            href="https://www.aviasales.az"
            className="text-[16px] font-[Manrope-Regular]"
          >
            Aviasales
          </a>
          <a
            href="https://www.azal.az/ru/"
            className="text-[16px] font-[Manrope-Regular]"
          >
            Azerbaijan Airlines
          </a>
        </div>
      </div>
    </div>
  );
}
