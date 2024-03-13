"use client";
import { useEffect, useRef, useState } from "react";
import ViewBaithi from "./Baithi/viewBaithi";
import { getAllPost } from "@/libs/getPost";
import moment from "moment";

export default function Admin() {
  const [dataPost, setDataPost] = useState([]);
  const [password, setPassword] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const passwordRef = useRef();

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

  const submitForm = (e) => {
    e.preventDefault();
    if (password == process.env.NEXT_PUBLIC_PASSWORD_ADMIN) {
      getData();
      setIsAdmin(true);
    } else {
      alert("Sai mật khẩu!");
    }
  };

  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  return (
    <>
      <header className="px-4 py-4 border-b-[1px] border-solid border-white">
        <a href="/">
          <img src="/dau_an.png" />
        </a>
      </header>
      {!isAdmin ? (
        <form className="px-4 pt-2" onSubmit={submitForm}>
          <div>
            <label className="text-white mr-2">Password: </label>
            <input
              ref={passwordRef}
              type="password"
              autoComplete="off"
              className="outline-none px-1"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </form>
      ) : (
        <div className="p-4">
          <div className="pb-2">
            <div className="text-white">
              Số bài viết mới:{" "}
              {dataPost.filter((item) => item.published == 2).length}
            </div>
          </div>
          {loadingData ? (
            <div className="text-white">Loading</div>
          ) : (
            <table
              id="admin-table"
              className="table table-striped rounded-md overflow-hidden"
            >
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
                    <tr key={item._id}>
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
                      <td>
                        {moment(item?.createdAt).format("DD/MM/YYYY hh:mm")}
                      </td>
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
          )}
          <div className="text-white float-right">
            Tổng số bài dự thi: {dataPost.length}
          </div>
        </div>
      )}
    </>
  );
}
