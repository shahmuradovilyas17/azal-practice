import React from "react";

export function TicketsMenuTabsItem({
  text,
  id,
  setActiveTab,
  activeTab,
}: {
  text: string;
  id: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}) {
  return (
    <div
      className={`border-1  rounded-2xl inline-block p-2  text-center font-[Manrope-Bold] text-[16px]  transition-colors duration-200 ${
        activeTab === id
          ? "bg-blue-500"
          : "bg-white hover:bg-gray-300 cursor-pointer "
      }`}
      onClick={() => setActiveTab(id)}
    >
      <div className={activeTab === id ? "text-white" : "text-black"}>
        {text}
      </div>
    </div>
  );
}
