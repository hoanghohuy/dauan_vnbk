import React from "react";
const data = {
  id: 1,
  name: "Hồ Huy Hoàng",
  email: "hhhoang.h3@gmail.com",
  phone: "0394210763",
  facebook: "https://www.facebook.com",
  title: "Dấu ấn VietnamBooking",
  video: "https://www.youtube.com/watch/video",
  image: [
    "https://bizweb.dktcdn.net/100/360/145/files/chup-anh-tet-dep-namnguyenstudio-1.jpg?v=1578371896324",
    "https://bizweb.dktcdn.net/100/360/145/files/chup-anh-tet-dep-namnguyenstudio-1.jpg?v=1578371896324",
    "https://bizweb.dktcdn.net/100/360/145/files/chup-anh-tet-dep-namnguyenstudio-1.jpg?v=1578371896324",
    "https://bizweb.dktcdn.net/100/360/145/files/chup-anh-tet-dep-namnguyenstudio-1.jpg?v=1578371896324",
  ],
  time: "28/2/2024 23:59:59",
  status: "Mới",
};

export default function Danhsach() {
  return (
    <section id="danhsach" className="my-4 sm:px-5">
      <div className=" bg-white px-8 py-6 rounded-xl max-w-[672px] mx-auto flex flex-col gap-3 sm:px-6">
        <div className="text-[#1239A7] font-[700] text-[20px] text-center uppercase">
          Danh sách bài dự thi
        </div>
        <div className="pt-2">
          <div className="row">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div className="col-4 pb-4 sm:w-[50%]">
                <div className="bai-thi-wrapper relative rounded-md">
                  <a
                    href={`/bai-thi/${data.id}`}
                    className="hidden mask-baithi text-white text-[12px] items-center justify-center absolute w-full h-full bg-[#777]"
                  >
                    {data.title}
                  </a>
                  <img src={data.image} className="rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
