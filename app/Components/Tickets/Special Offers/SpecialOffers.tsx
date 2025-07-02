import React from "react";
import { SpecialOffersItem } from "./SpecialOffersItem";

export function SpecialOffers() {
  return (
    <div className="">
      <div className="max-w-290 p-10 m-auto">
        <div className="font-[Manrope-Bold] text-[32px] mb-10 text-center">
          Xüsusi təkliflər
        </div>
        <div className="gap-3.75 flex flex-wrap justify-center">
          <SpecialOffersItem />
        </div>
      </div>
    </div>
  );
}
