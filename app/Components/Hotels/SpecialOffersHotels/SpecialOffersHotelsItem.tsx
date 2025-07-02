import React from "react";
import CosmosHotel from "../../../../public/images/cosmos.jpeg";
import MarriottHotel from "../../../../public/images/marriott.jpeg";
import Image from "next/image";

export function SpecialOffersHotelsItem() {
  const specialOffers = [
    {
      id: 1,
      name: "Hotel Cosmos",
      img: CosmosHotel,
      city: "Moscow",
      country: "Russia",
      daily: "AZN 50",
      monthly: "AZN 1000",
    },
    {
      id: 2,
      name: "Marriott Hotel",
      img: MarriottHotel,
      city: "Baku",
      country: "Azerbaijan",
      daily: "AZN 20",
      monthly: "AZN 500",
    },
    {
      id: 3,
      name: "Hotel Cosmos",
      img: CosmosHotel,
      city: "Moscow",
      country: "Russia",
      daily: "AZN 50",
      monthly: "AZN 1000",
    },
    {
      id: 4,
      name: "Marriott Hotel",
      img: MarriottHotel,
      city: "Baku",
      country: "Azerbaijan",
      daily: "AZN 20",
      monthly: "AZN 500",
    },
  ];

  return (
    <>
      {specialOffers.map((offer) => (
        <div
          key={offer.id}
          className="flex gap-4 w-[500px] rounded-[12px] cursor-pointer p-2 hover:bg-blue-100"
        >
          <Image
            src={offer.img}
            alt=""
            width={200}
            className="rounded-[12px] h-50"
          />
          <div className="">
            <div className="text-[30px] font-[Manrope-Bold]">{offer.name}</div>
            <div className="text-[20px] font-[Manrope-Bold] mb-2">
              {offer.city}, {offer.country}
            </div>
            <div className="text-[#505f79] text-[16px] font-[Manrope-Regular] mb-2">
              {offer.daily} - günü
            </div>
            <div className="text-[16px] text-[#97ba1e] font-[Manrope-Bold]">
              {offer.monthly} - ayı
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
