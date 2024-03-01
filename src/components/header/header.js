"use client";
import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="header" className="sticky top-0 left-0 md:pr-5">
      <div className="w-full flex sm:items-center">
        <div className="w-[40%] lg:hidden"></div>
        <div className="w-[30%] flex gap-12 justify-center xl:gap-6 lg:w-[50%] lg:justify-start lg:pl-10 md:pl-5 md:w-[40%] sm:w-full">
          <img
            src="/vnbk.png"
            alt="logo"
            className="h-[47px] w-auto object-cover md:h-10"
          />
          <img
            src="/dau_an.png"
            alt="dau an tren tung buoc chan"
            className="h-[47px] w-auto object-cover md:h-10"
          />
        </div>
        <div className="hidden menu sm:block">
          <div
            className="cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M2.14645 2.85355C1.95118 2.65829 1.95118 2.34171 2.14645 2.14645C2.34171 1.95118 2.65829 1.95118 2.85355 2.14645L8 7.29289L13.1464 2.14645C13.3417 1.95118 13.6583 1.95118 13.8536 2.14645C14.0488 2.34171 14.0488 2.65829 13.8536 2.85355L8.70711 8L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L8 8.70711L2.85355 13.8536C2.65829 14.0488 2.34171 14.0488 2.14645 13.8536C1.95119 13.6583 1.95119 13.3417 2.14645 13.1464L7.29289 8L2.14645 2.85355Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="white"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 11.5C2.5 11.2239 2.72386 11 3 11H13C13.2761 11 13.5 11.2239 13.5 11.5C13.5 11.7761 13.2761 12 13 12H3C2.72386 12 2.5 11.7761 2.5 11.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 7.5C2.5 7.22386 2.72386 7 3 7H13C13.2761 7 13.5 7.22386 13.5 7.5C13.5 7.77614 13.2761 8 13 8H3C2.72386 8 2.5 7.77614 2.5 7.5Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 3.5C2.5 3.22386 2.72386 3 3 3H13C13.2761 3 13.5 3.22386 13.5 3.5C13.5 3.77614 13.2761 4 13 4H3C2.72386 4 2.5 3.77614 2.5 3.5Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="w-[40%] text-[16px] flex items-center justify-end gap-10 text-white xl:gap-5 lg:w-[50%] md:w-[60%] md:gap-4 sm:hidden">
          <a href="#thele">Thể lệ dự thi</a>
          <a href="#dangky">Đăng ký dự thi</a>
          <a href="#danhsach">Danh sách bài dự thi</a>
        </div>
      </div>
      <div
        className={`hidden text-white text-center pt-4 sm${
          showMenu ? ":block" : ""
        }`}
      >
        <a
          onClick={() => setShowMenu(false)}
          className="block py-2"
          href="#thele"
        >
          Thể lệ dự thi
        </a>
        <a
          onClick={() => setShowMenu(false)}
          className="block py-2"
          href="#dangky"
        >
          Đăng ký dự thi
        </a>
        <a
          onClick={() => setShowMenu(false)}
          className="block py-2"
          href="#danhsach"
        >
          Danh sách bài dự thi
        </a>
      </div>
    </header>
  );
}
