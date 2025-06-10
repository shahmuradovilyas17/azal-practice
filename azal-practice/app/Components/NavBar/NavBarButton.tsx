/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

export function NavBarButton(props: { text: string; stateName: string }) {
  return (
    <button
      className="flex gap-2 items-center px-5 py-3 rounded-t-xl"
      style={{
        backgroundColor: "rgb(16 16 16 / 20%)",
        boxShadow:
          "rgb(255 255 255) 0 0 0 0 inset, rgb(59 130 246 / 50%) 0 0 0 0 inset, rgb(0 0 0 / 0%) 0 0 0 0",
      }}
      // onClick={() => {

      // }}
    >
      <span className="text-base/6">{props.text}</span>
    </button>
  );
}
