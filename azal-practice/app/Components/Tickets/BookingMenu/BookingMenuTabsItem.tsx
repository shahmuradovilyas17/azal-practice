import React from "react";

export function BookingMenuTabsItem({
  text,
  id,
  setActiveTab,
}: {
  text: string;
  id: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div
      className="border-1 rounded-l-none rounded-r-2xl inline-block p-2  text-center font-[Manrope-Bold] text-[16px] cursor-pointer hover:bg-gray-300 transition-colors duration-200"
      onClick={() => setActiveTab(id)}
    >
      {text}
    </div>
  );
}
