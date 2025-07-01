import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="p-8 text-black border-b-2 bg-blue-100">
      <div className="flex justify-between max-w-290 m-auto">
        <Link href="/">
          <div className="font-[Manrope-Bold] text-4xl ">NovaTrip</div>
        </Link>
        <div className="flex gap-4">
          <div className="bg-white rounded-[12px]">
            <button
              className="flex items-center gap-2 p-3 border-1 border-black rounded-[12px] justify-center text-[14px]"
              id="currency-button"
            >
              <span>Валюта</span>
              <svg className="w-3.5 h-2">
                <path
                  d="M1 1L7 7L13 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                ></path>
              </svg>
            </button>
          </div>
          <div className="bg-white rounded-[12px]">
            <button
              className="flex items-center gap-2 p-3 border-1 border-black rounded-[12px] justify-center text-[14px]"
              id="language-button"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  d="M10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0m0 1.5c.366 0 .738.152 1.146.528.409.376.823.973 1.177 1.744.285.62.495 1.416.688 2.228H6.989c.193-.812.403-1.607.688-2.228.354-.77.768-1.368 1.177-1.744.408-.376.78-.528 1.146-.528m-3.111.594c-.207.325-.4.672-.576 1.052-.38.829-.666 1.809-.887 2.854H2.498a8.5 8.5 0 0 1 4.39-3.906m6.222 0A8.5 8.5 0 0 1 17.502 6h-2.928c-.222-1.045-.507-2.025-.887-2.854a9 9 0 0 0-.576-1.052M1.874 7.5H5.23C5.128 8.316 5 9.116 5 10s.128 1.684.23 2.5H1.874a8.53 8.53 0 0 1 0-5m4.86 0h6.533c.111.807.233 1.61.233 2.5s-.122 1.693-.233 2.5H6.733c-.111-.807-.233-1.61-.233-2.5s.122-1.693.233-2.5m8.036 0h3.356a8.53 8.53 0 0 1 0 5h-3.357c.103-.816.231-1.616.231-2.5s-.128-1.684-.23-2.5M2.498 14h2.928c.221 1.045.507 2.025.887 2.854.175.38.369.727.576 1.052A8.5 8.5 0 0 1 2.498 14m4.491 0h6.022c-.193.812-.403 1.607-.688 2.227-.354.772-.768 1.369-1.177 1.745-.408.375-.78.528-1.146.528s-.738-.152-1.146-.528c-.409-.376-.823-.973-1.177-1.745-.285-.62-.495-1.415-.688-2.227m7.585 0h2.928a8.5 8.5 0 0 1-4.39 3.906c.206-.325.4-.672.575-1.052.38-.829.665-1.809.887-2.854"
                ></path>
              </svg>
              <span>Русский</span>
            </button>
          </div>
          <div className="bg-white rounded-[12px]">
            <button
              className="flex items-center gap-2 p-3 border-1 border-black rounded-[12px] justify-center text-[14px]"
              id="account-button"
            >
              <svg viewBox="4 2 16 20" className="w-5 h-5" fill="currentColor">
                <path d="M12 2C9.247 2 7 4.247 7 7s2.247 5 5 5c2.752 0 5-2.247 5-5s-2.248-5-5-5zm0 1.5c1.942 0 3.5 1.558 3.5 3.5s-1.558 3.5-3.5 3.5A3.489 3.489 0 0 1 8.5 7c0-1.942 1.558-3.5 3.5-3.5zM6.25 14A2.261 2.261 0 0 0 4 16.25v.6c0 1.47.932 2.789 2.354 3.696C7.777 21.453 9.722 22 12 22s4.223-.547 5.645-1.454C19.069 19.639 20 18.32 20 16.85v-.6A2.261 2.261 0 0 0 17.75 14H6.25zm0 1.5h11.5c.423 0 .75.327.75.75v.6c0 .832-.536 1.714-1.661 2.431C15.714 20 14.034 20.5 12 20.5c-2.034 0-3.714-.501-4.839-1.219C6.036 18.564 5.5 17.682 5.5 16.85v-.6c0-.423.327-.75.75-.75z"></path>
              </svg>
              <span>Личный Кабинет</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
