import React from "react";

export function NavBarServicesItem({
  path,
  path2,
  viewBox,
  name,
}: {
  path: string;
  path2: string;
  viewBox: string;
  name: string;
}) {
  return (
    <div className="ml-1 mr-2 w-[182px]">
      <a
        href="https://www.azal.az/ru/information/baggage/extra/"
        className="flex flex-col gap-3 items-center px-3 py-4 box-border h-[130px] no-underline rounded-xl "
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <div
          className="flex flex-col gap-3 items-center text-sm/4.5 text-center"
          style={{ color: "#2C8DC7" }}
        >
          <div
            className="flex w-12 h-12 items-center justify-center  rounded-[50%]"
            style={{
              backgroundColor: "rgba(44, 141, 199, 0.1)",
            }}
          >
            <svg className="h-5 w-5" viewBox={viewBox}>
              <path className="fill-current" d={path}></path>
              <path className="fill-current" d={path2}></path>
            </svg>
          </div>
          <span style={{ color: "#2E3034" }}>{name}</span>
        </div>
      </a>
    </div>
  );
}
