import React from "react";
import TabThele from "./tab_thele/tabThele";

export default function Thele() {
  return (
    <section className="pt-5 sm:px-5 sm:!pt-4" id="thele">
      <div className="bg-white px-12 py-6 rounded-xl max-w-[800px] mx-auto flex flex-col gap-3 sm:px-6 text-justify">
        <div className="text-[#1239A7] font-[700] text-[20px] text-center uppercase">
          Cuộc thi viết “Dấu Ấn Trên Từng Bước Chân”
        </div>
        <div className="text-[15px] font-[500] leading-[24px]">
          Bài viết ghi lại những cảm nghĩ và trải nghiệm tuyệt vời về cảnh đẹp,
          con người, văn hóa, hoạt động,... tại một địa điểm du lịch (trong nước
          hoặc quốc tế) mà bạn đã đi qua để thu hút người xem đặt chân đến đây
          khám phá.
        </div>
        <img
          src="/banner_thele.png"
          alt="banner the le"
          className="w-full h-auto object-cover"
        />
        <TabThele />
      </div>
    </section>
  );
}
