import React from "react";
import { PopularDestinationItems } from "./PopularDestinationItems";

export function PopularDestinations() {
  return (
    <div className="bg-gray-200">
      <div className="max-w-290 p-10 m-auto">
        <div className="bg-white rounded-[20px] pt-8 pb-8 relative">
          <div className="mb-[17px] pl-8">
            <div className="text-[34px] font-[Manrope-Bold]">
              Популярные направления
            </div>
            <div className="text-[23px] font-[Manrope-Regular]">Из Баку</div>
          </div>
          <PopularDestinationItems />
        </div>
      </div>
    </div>
  );
}
