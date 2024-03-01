"use client";
import { useEffect, useState } from "react";
import ViewBaithi from "./Baithi/viewBaithi";
import { getAllPost } from "@/libs/getPost";
import moment from "moment";

export default function Admin() {
  const [dataPost, setDataPost] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const getData = async () => {
    const data = await getAllPost();
    setDataPost(data);
    setLoadingData(false);
  };

  const reloadData = async () => {
    setLoadingData(true);
    const data = await getAllPost();
    setDataPost(data);
    setLoadingData(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header className="px-4 py-4 border-b-[1px] border-solid border-white">
        <a href="/">
          <img src="/dau_an.png" />
        </a>
      </header>
      <div className="p-4">
        <div className="pb-2">
          <div className="text-white">
            Số bài viết mới:{" "}
            {dataPost.filter((item) => item.published == 2).length}
          </div>
          <div className="text-white">
            Tổng số bài dự thi: {dataPost.length}
          </div>
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
              <th>Điểm</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {dataPost && dataPost.length > 0 ? (
              dataPost.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div
                      className={`btn ${
                        item.published == 2
                          ? "btn-secondary"
                          : item.published == 1
                          ? "btn-success"
                          : "btn-danger"
                      }`}
                    >
                      {item.published == 2
                        ? "Mới"
                        : item.published == 1
                        ? "Đã duyệt"
                        : "Từ chối"}
                    </div>
                  </td>
                  <td>{moment(item?.createdAt).format("DD/MM/YYYY hh:mm")}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.title}</td>
                  <td>{item.points}</td>
                  <td>
                    <ViewBaithi baithi={item} callBack={reloadData} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Trống</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
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
              <th>Điểm</th>
              <th>Hành động</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
