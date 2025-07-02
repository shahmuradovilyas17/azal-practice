import Image from "next/image";
import React, { useState } from "react";
import MoscowImage from "../../../../public/Images/Moscow.webp";
import TomskImage from "../../../../public/Images/Tomsk.webp";
import { useRouter } from "next/navigation";
export function SpecialOffersItem() {
  const router = useRouter();

  // const [fromState, setFromState] = useState("");
  // const [toState, setToState] = useState("");

  const specialOffers = [
    {
      id: 1,
      img: MoscowImage,
      from: "Moscow",
      to: "Baku",
      price: "$100",
    },
    {
      id: 2,
      img: TomskImage,
      from: "Baku",
      to: "Tomsk",
      price: "$200",
    },
    {
      id: 3,
      img: MoscowImage,
      from: "Moscow",
      to: "Baku",
      price: "$100",
    },
    {
      id: 4,
      img: TomskImage,
      from: "Baku",
      to: "Tomsk",
      price: "$200",
    },
    {
      id: 5,
      img: MoscowImage,
      from: "Moscow",
      to: "Baku",
      price: "$100",
    },
    {
      id: 6,
      img: TomskImage,
      from: "Baku",
      to: "Tomsk",
      price: "$200",
    },
  ];

  return (
    <>
      {specialOffers.map((offer) => (
        <div
          key={offer.id}
          className="flex gap-4 w-[300px] rounded-[12px] cursor-pointer p-2 hover:bg-blue-100"
          onClick={() => {
            router.push(
              `/buy?from=${offer.from}&to=${offer.to}&arrDate=""&depDate=""`
            );
          }}
        >
          <Image
            src={offer.img}
            alt=""
            width={80}
            className="rounded-full h-20"
          />
          <div className="">
            <div className="text-[20px] font-[Manrope-Bold]">{offer.to}</div>
            <div className="text-[#505f79] text-[12px] font-[Manrope-Regular] mb-2">
              {offer.from}
            </div>
            <div className="text-[16px] text-[#97ba1e] font-[Manrope-Bold]">
              {offer.price}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
