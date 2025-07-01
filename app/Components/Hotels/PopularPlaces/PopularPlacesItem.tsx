import React from "react";
import MarriottHotel from "../../../../public/images/marriott.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export function PopularPlacesItem() {
  const places = [
    {
      id: 1,
      city: "Baku",
      name: "Marriott",
      price: "85 AZN",
      img: MarriottHotel,
    },
    {
      id: 2,
      city: "Baku",
      name: "Marriott",
      price: "85 AZN",
      img: MarriottHotel,
    },
    {
      id: 3,
      city: "Baku",
      name: "Marriott",
      price: "85 AZN",
      img: MarriottHotel,
    },
    {
      id: 4,
      city: "Baku",
      name: "Marriott",
      price: "85 AZN",
      img: MarriottHotel,
    },
    {
      id: 5,
      city: "Baku",
      name: "Marriott",
      price: "85 AZN",
      img: MarriottHotel,
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
      {places.map((place) => (
        <SwiperSlide key={place.id} style={{ margin: "0" }}>
          <div className="rounded-[14px] p-2 hover:bg-blue-100 cursor-pointer">
            {
              <Image
                src={place.img}
                alt={place.name}
                width={300}
                height={200}
                className="rounded-[14px] mb-5"
              />
            }
            <h3 className="text-[17px] font-[Manrope-Bold]">{place.name}</h3>
            <p className="text-[17px] font-[Manrope-Regular]">{place.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
