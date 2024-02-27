import React from "react";

export default function Header() {
  return (
    <header id="header" className="sticky top-0 left-0">
      <div className="w-full flex">
        <div className="w-[33.333%]"></div>
        <div className="w-[33.333%] flex gap-12 justify-center">
          <img src="/vnbk.png" alt="logo" />
          <img src="/dau_an.png" alt="dau an tren tung buoc chan" />
        </div>
        <div className="w-[33.333%] text-[16px] flex items-center justify-end gap-10 text-white">
          <a href="#thele">Thể lệ dự thi</a>
          <a href="#dangky">Đăng ký dự thi</a>
          <a href="#danhsach">Danh sách bài dự thi</a>
        </div>
      </div>
    </header>
  );
}
