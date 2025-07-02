import React from "react";
import { PopularDestinationItems } from "./PopularDestinationItems";

export function PopularDestinations() {
  return (
    <div className="">
      <div className="max-w-290 p-10 m-auto">
        <div className="bg-white rounded-[20px] pt-8 pb-8 relative">
          <div className="mb-[20px]">
            <div className="text-[34px] font-[Manrope-Bold] text-center">
              Popular Ünvanlar
            </div>
            <div className="text-[23px] font-[Manrope-Regular] text-center">
              Bakıdan
            </div>
          </div>
          <PopularDestinationItems />
        </div>
      </div>
    </div>
  );
}
