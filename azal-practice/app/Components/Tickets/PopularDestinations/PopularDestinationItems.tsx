"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiperButtons.css";
import Image from "next/image";
import china from "../../../../public/images/china.avif";
import georgia from "../../../../public/images/georgia.avif";
import germany from "../../../../public/images/germany.avif";
import hungary from "../../../../public/images/hungary.avif";
import italy from "../../../../public/images/italy.avif";
import kazakhstan from "../../../../public/images/kazakhstan.avif";
import moldova from "../../../../public/images/moldova.avif";
import montenegro from "../../../../public/images/montenegro.avif";
import uae from "../../../../public/images/uae.avif";
import uzbekistan from "../../../../public/images/uzbekistan.avif";
import { Navigation } from "swiper/modules";

export function PopularDestinationItems() {
  const destinations = [
    {
      id: 1,
      from: "Baku",
      to: "UAE",
      price: "82 AZN",
      img: uae,
    },
    {
      id: 2,
      from: "Baku",
      to: "Georgia",
      price: "129 AZN",
      img: georgia,
    },
    {
      id: 3,
      from: "Baku",
      to: "Italy",
      price: "107 AZN",
      img: italy,
    },
    {
      id: 4,
      from: "Baku",
      to: "Germany",
      price: "163 AZN",
      img: germany,
    },
    {
      id: 5,
      from: "Baku",
      to: "Kazakhstan",
      price: "89 AZN",
      img: kazakhstan,
    },
    {
      id: 6,
      from: "Baku",
      to: "Hungary",
      price: "129 AZN",
      img: hungary,
    },
    {
      id: 7,
      from: "Baku",
      to: "Montenegro",
      price: "289 AZN",
      img: montenegro,
    },
    {
      id: 8,
      from: "Baku",
      to: "China",
      price: "331 AZN",
      img: china,
    },
    {
      id: 9,
      from: "Baku",
      to: "Uzbekistan",
      price: "191 AZN",
      img: uzbekistan,
    },
    {
      id: 10,
      from: "Baku",
      to: "Moldova",
      price: "188 AZN",
      img: moldova,
    },
  ];
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      navigation
      style={{ padding: "0 32px" }}
    >
      {destinations.map((destination) => (
        <SwiperSlide key={destination.id} style={{ margin: "0" }}>
          <div>
            <Image
              src={destination.img}
              alt={destination.to}
              width={300}
              height={200}
              className="rounded-[14px] mb-5"
            />
            <h3 className="text-[17px] font-[Manrope-Bold]">
              {destination.to}
            </h3>
            <p className="text-[17px] font-[Manrope-Regular]">
              {destination.price}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
