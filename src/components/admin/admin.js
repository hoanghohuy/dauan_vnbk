"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ViewBaithi from "./Baithi/viewBaithi";

const data = [
  {
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
  },
  {
    id: 2,
    name: "Nguyễn Ngọc Vũ Hoàng",
    email: "vuhoang@gmail.com",
    phone: "03873213213",
    facebook: "https://www.facebook.com/123",
    title: "Xuân Giáp Thìn",
    video: "https://www.youtube.com/watch/video123",
    time: "24/2/2024 20:45:11",
    status: "Mới",
  },
];
export default function Admin() {
  const [dataBaiViet, setDataBaiViet] = useState([]);

  return (
    <>
      <header className="px-4 py-4 border-b-[1px] border-solid border-white">
        <a href="/">
          <img src="/dau_an.png" />
        </a>
      </header>
      <div className="p-4">
        <div className="pb-2">
          <div className="text-white">Tổng bài dự thi: 1</div>
          <div className="text-white">Tổng bài dự thi đã phê duyệt: 1</div>
        </div>
        <table id="example" class="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Trạng thái</th>
              <th>Thời gian</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Tiêu đề</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>
                    <div className={`btn btn-success`}>{item.status}</div>
                  </td>
                  <td>{item.time}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.title}</td>
                  <td>
                    <ViewBaithi baithi={item} />
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th>STT</th>
              <th>Trạng thái</th>
              <th>Thời gian</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Tiêu đề</th>
              <th>Hành động</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
