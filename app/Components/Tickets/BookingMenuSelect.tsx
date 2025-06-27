"use client";
import React from "react";

export function BookingMenuSelect({
  setActiveSelect,
}: {
  setActiveSelect: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="bg-gray-200 p-8 text-center">
      <div className="inline-flex  gap-2.5 border-2 rounded-[14px] p-1">
        <div
          className="border-1 rounded-[10px] p-1 cursor-pointer w-25"
          onClick={() => setActiveSelect("tickets")}
        >
          <div className="inline-flex items-center">
            <svg className="w-6 h-6">
              <path d="M7.37 14.593 5 14l-2 2 3.5 1.5L8 21l2-2-.593-2.37 2.947-2.679 4.147 7.05a1.777 1.777 0 0 0 1.176-2.048l-1.746-8.385 2.202-2.202a7.05 7.05 0 0 0 1.84-3.259.89.89 0 0 0-1.08-1.08 7.04 7.04 0 0 0-3.26 1.84L13.43 8.069 5.049 6.322A1.78 1.78 0 0 0 2.999 7.5l7.05 4.146z"></path>
            </svg>
          </div>
          <div className="font-[Manrope-Bold] text-[14px]">Авиабилеты</div>
        </div>
        <div
          className="border-1 rounded-[10px] p-1 cursor-pointer w-25"
          onClick={() => setActiveSelect("hotels")}
        >
          <div className="inline-flex items-center">
            <svg className="w-6 h-6">
              <path d="M21 5H3v6h3.5v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h3v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H21zM4 13a3 3 0 0 0-3 3v3h2l1-2h16l1 2h2v-3a3 3 0 0 0-3-3z"></path>
            </svg>
          </div>
          <div className="font-[Manrope-Bold] text-[14px]">Отели</div>
        </div>
      </div>
    </div>
  );
}
